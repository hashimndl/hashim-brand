export async function fetchLinkedInRSS() {
  try {
    // You replace this with your RSS bridge URL
    const RSS_URL =
      "https://rss.app/feeds/Zr0gWo80mev88Zt0.xml";

    const res = await fetch(RSS_URL, {
      next: { revalidate: 21600 } // 6 hours cache
    });

    const text = await res.text();

    // Simple XML parsing (lightweight)
    const items = [...text.matchAll(/<item>([\s\S]*?)<\/item>/g)];

    return items.slice(0, 6).map((item, index) => {
      const content = item[1];

      const title = content.match(/<title>(.*?)<\/title>/)?.[1] || "Post";
      const link = content.match(/<link>(.*?)<\/link>/)?.[1] || "";
      const desc = content.match(/<description>(.*?)<\/description>/)?.[1] || "";

      return {
        id: index,
        title,
        excerpt: desc.replace(/<[^>]*>/g, "").slice(0, 140),
        url: link
      };
    });
  } catch (e) {
    console.log("RSS failed, using fallback");

    return [
      {
        id: 1,
        title: "Fallback Post",
        excerpt: "Add RSS feed later for auto updates",
        url: "#"
      }
    ];
  }
}