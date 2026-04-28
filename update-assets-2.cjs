const fs = require('fs');

let dataTs = fs.readFileSync('src/data.ts', 'utf8');

function updateFigureImage(nameStartsWith, url) {
    if (!url) return;
    const nameRegex = new RegExp(`name:\\s*"${nameStartsWith}[^"]*",\\s*((?:(?:role|club|nameArabic|position|stats|appearances|goals|description):\\s*[^,]*,\\s*)*)image:\\s*"[^"]*"`, 'g');
    dataTs = dataTs.replace(nameRegex, (match, middle) => {
        return match.replace(/image:\s*"[^"]*"/, `image: "${url}"`);
    });
}

const list = [
    ["Yahia Attiyat Allah", "https://www.kingfut.com/wp-content/uploads/2024/02/croatia-v-morocco-3rd-place-fifa-world-cup-qatar-2022-2-1-scaled-1.jpg"],
    ["Brahim Diaz", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSd649TQTFu0mDDrWsPzrbuJ99w8H-9kwS1A&s"],
    ["Reda Khiyari", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqJj88KpmXZAG36QW_n4nNG3swJXekg9lPw&s"],
    ["Soufiane Borite", "https://lnfoficial.com.br/media/2024/07/18.07.2024-Marrocos-Foto-FIFA-1.webp"],
    ["Bilal Bakkali", "https://lionsdelatlas.ma/wp-content/uploads/2025/05/bilal-bakkali.png"],
    ["Anas El Ayyane", "https://cdn-img.zerozero.pt/img/planteis/new/46/52/11684652_anas_el_ayyane_20240919173151.jpg"],
    ["Omar Namsaoui", "https://fr.le7tv.ma/wp-content/uploads/2022/06/Screenshot_20220608-090606_Gallery-1.jpg"],
];

for (const [name, url] of list) {
    updateFigureImage(name, url);
}

// Write the result back to dataTs
fs.writeFileSync('src/data.ts', dataTs);
console.log("Player assets updated!");
