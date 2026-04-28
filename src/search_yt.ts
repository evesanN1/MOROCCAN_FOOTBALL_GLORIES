async function searchYT(query: string) {
  try {
    const res = await fetch(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`);
    const text = await res.text();
    const match = text.match(/\"videoId\":\"([a-zA-Z0-9_-]{11})\"/);
    if (match) return match[1];
    return "dQw4w9WgXcQ";
  } catch (e) {
    return "dQw4w9WgXcQ";
  }
}

async function run() {
  const queries = [
    "Morocco vs Spain World Cup 2022 highlights",
    "Morocco vs Portugal World Cup 2022 highlights",
    "Morocco vs Colombia Womens World Cup 2023 highlights",
    "Morocco Futsal AFCON 2024 final highlights",
    "Morocco vs Nigeria CHAN 2018 final highlights",
    "Morocco vs Mali CHAN 2020 final highlights",
    "Morocco vs Libya Arab Cup 2012 final",
    "Morocco vs Portugal 1986 World Cup highlights",
    "Morocco vs Guinea 1976 AFCON"
  ];
  const results: Record<string, string> = {};
  for (const q of queries) {
    results[q] = await searchYT(q);
  }
  console.log(JSON.stringify(results, null, 2));
}
run();
