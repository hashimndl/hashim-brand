function cleanXmlText(value: string) {
  return value
    .replace(/<!\[CDATA\[/g, "")
    .replace(/\]\]>/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isSafeHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
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

    return items.slice(0, 6).map((item, index) => {
      const content = item[1];

      const rawTitle = content.match(/<title>([\s\S]*?)<\/title>/)?.[1] || "Post";
      const rawLink = content.match(/<link>([\s\S]*?)<\/link>/)?.[1] || "";
      const rawDesc =
        content.match(/<description>([\s\S]*?)<\/description>/)?.[1] || "";

      const title = cleanXmlText(rawTitle);
      const description = cleanXmlText(rawDesc);
      const safeUrl = isSafeHttpUrl(rawLink.trim())
        ? rawLink.trim()
        : "https://www.linkedin.com/in/hashimnaveed";

      return {
        id: `${index}-${title.slice(0, 20)}`,
        title,
        excerpt: description.split(".").slice(0, 2).join(". ").slice(0, 180),
        url: safeUrl,
      };
    });
  } catch (e) {
    console.error("RSS failed", e);

    return [
      {
        id: "fallback-1",
        title: "LinkedIn feed unavailable",
        excerpt:
          "The LinkedIn RSS feed could not be loaded right now. Please try again later.",
        url: "https://www.linkedin.com/in/hashimnaveed",
      },
    ];
  }
}