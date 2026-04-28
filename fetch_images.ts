const players = [
  "Walid Regragui", "Brahim Díaz", "Achraf Hakimi", "Yassine Bounou",
  "Sofyan Amrabat", "Hakim Ziyech", "Youssef En-Nesyri", "Eric Gerets",
  "Yassine Salhi", "Issam El Adoua", "Abdelilah Hafidi", "Jamal Sellami",
  "Ayoub El Kaabi", "Soufiane Rahimi", "Anas Zniti", "Hicham Dguig",
  "Soufiane El Mesrar", "Bilal Bakkali", "Reda Khiyari", "Gheorghe Mărdărescu",
  "Ahmed Faras", "Mustapha Hadji", "José Faria", "Badou Zaki", "Abderrazak Khairi",
  "Aziz Bouderbala", "Reynald Pedros", "Ghizlane Chebbak", "Anissa Lahmari",
  "Khadija Er-Rmichi", "Larbi Benbarek", "Abdelmajid Dolmy", "Noureddine Naybet"
];

async function getImageUrl(name: string) {
  try {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(name)}&prop=pageimages&format=json&pithumbsize=400`);
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pageId !== "-1" && pages[pageId].thumbnail) {
      return pages[pageId].thumbnail.source;
    }
    const resFr = await fetch(`https://fr.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(name)}&prop=pageimages&format=json&pithumbsize=400`);
    const dataFr = await resFr.json();
    const pagesFr = dataFr.query.pages;
    const pageIdFr = Object.keys(pagesFr)[0];
    if (pageIdFr !== "-1" && pagesFr[pageIdFr].thumbnail) {
      return pagesFr[pageIdFr].thumbnail.source;
    }
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=400`;
  } catch (e) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=400`;
  }
}

async function run() {
  const results: Record<string, string> = {};
  for (const p of players) {
    results[p] = await getImageUrl(p);
  }
  console.log(JSON.stringify(results, null, 2));
}
run();
