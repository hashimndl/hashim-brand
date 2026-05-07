function decodeHtmlEntities(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function cleanXmlText(value: string) {
  return decodeHtmlEntities(
    value
      .replace(/<!\[CDATA\[/g, "")
      .replace(/\]\]>/g, "")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/\[[^\]]*?\]\s*[-–—>]+\s*\[[^\]]*?\]/g, " ")
      .replace(/[→➜⇒⟶⟹]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function isSafeHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function normalizeTitle(title: string) {
  const cleaned = cleanXmlText(title)
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) return "LinkedIn Insight";
  return cleaned.length > 110 ? `${cleaned.slice(0, 107).trim()}...` : cleaned;
}

function normalizeExcerpt(description: string) {
  let cleaned = cleanXmlText(description);

  cleaned = cleaned
    .replace(/\b(read more|see more|continue reading)\b/gi, " ")
    .replace(/\b(like|comment|share)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  const sentences = cleaned
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean)
    .filter((sentence) => {
      const lower = sentence.toLowerCase();

      if (sentence.length < 35) return false;
      if (lower.includes("http://") || lower.includes("https://")) return false;
      if (/[→➜⇒⟶⟹]/.test(sentence)) return false;
      if (sentence.includes("[") && sentence.includes("]")) return false;

      return true;
    });

  const excerpt = sentences.slice(0, 2).join(" ").trim() || cleaned;

  if (!excerpt) {
    return "A recent LinkedIn insight on cloud, AI infrastructure, and enterprise technology.";
  }

  return excerpt.length > 180 ? `${excerpt.slice(0, 177).trim()}...` : excerpt;
}

function looksLowQuality(title: string, excerpt: string) {
  const combined = `${title} ${excerpt}`.toLowerCase();

  const noisyPatterns = [
    "[ data ]",
    "[ ml pipeline ]",
    "[ deployment ]",
    "fallback post",
    "add rss feed later",
  ];

  return noisyPatterns.some((pattern) => combined.includes(pattern));
}

export async function fetchLinkedInRSS() {
  try {
    const RSS_URL = "https://rss.app/feeds/Zr0gWo80mev88Zt0.xml";

    const res = await fetch(RSS_URL, {
      next: { revalidate: 21600 },
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      throw new Error(`RSS request failed: ${res.status}`);
    }

    const text = await res.text();
    const items = [...text.matchAll(/<item>([\s\S]*?)<\/item>/g)];

    const posts = items
      .slice(0, 8)
      .map((item, index) => {
        const content = item[1];

        const rawTitle =
          content.match(/<title>([\s\S]*?)<\/title>/)?.[1] || "LinkedIn Insight";
        const rawLink = content.match(/<link>([\s\S]*?)<\/link>/)?.[1] || "";
        const rawDesc =
          content.match(/<description>([\s\S]*?)<\/description>/)?.[1] || "";

        const title = normalizeTitle(rawTitle);
        const excerpt = normalizeExcerpt(rawDesc);
        const safeUrl = isSafeHttpUrl(rawLink.trim())
          ? rawLink.trim()
          : "https://www.linkedin.com/in/hashimnaveed";

        return {
          id: `${index}-${title.slice(0, 30).replace(/\s+/g, "-").toLowerCase()}`,
          title,
          excerpt,
          url: safeUrl,
        };
      })
      .filter((post) => !looksLowQuality(post.title, post.excerpt))
      .slice(0, 4);

    if (posts.length === 0) {
      return [
        {
          id: "fallback-1",
          title: "LinkedIn Insights",
          excerpt:
            "Recent writing and professional insights are available on my LinkedIn profile.",
          url: "https://www.linkedin.com/in/hashimnaveed",
        },
      ];
    }

    return posts;
  } catch (error) {
    console.error("RSS failed", error);

    return [
      {
        id: "fallback-1",
        title: "LinkedIn Insights",
        excerpt:
          "Recent writing and professional insights are available on my LinkedIn profile.",
        url: "https://www.linkedin.com/in/hashimnaveed",
      },
    ];
  }
}