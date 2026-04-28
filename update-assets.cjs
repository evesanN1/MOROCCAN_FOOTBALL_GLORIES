const fs = require('fs');

let dataTs = fs.readFileSync('src/data.ts', 'utf8');

function updateTrophy(id, url) {
    const idIdx = dataTs.indexOf(`id: "${id}"`);
    if (idIdx === -1) return;
    const tIdx = dataTs.indexOf('trophyImage: "', idIdx);
    if (tIdx === -1) return;
    const end = dataTs.indexOf('",', tIdx);
    
    dataTs = dataTs.slice(0, tIdx) + `trophyImage: "${url}"` + dataTs.slice(end + 2);
}

// 1. Update trophies
updateTrophy("wc-1986", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4pDGiItfDJcKR6XvrJyPdVlxAR8D0R9Ekg&s");
updateTrophy("wc-2022", "https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2022-12/2_50.jpg?itok=a84-KV7d");
updateTrophy("afcon-2025", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTyYsLENwCxtlMsflsUlIL6UJZkS2rayYumw&s");
updateTrophy("afcon-1976", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSRBCpMOnMzRKqgrErsAvuf9Gs6FOScea1Q&s");
updateTrophy("wwc-2023", "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2023/07/10143932/womens-world-cup-trophy.jpg");
updateTrophy("futsal-dominance", "https://niya.maroc.ma/wp-content/uploads/2025/05/%D8%A7%D9%84%D9%83%D8%A3%D8%B3-scaled-1-1-1024x660.jpg");
updateTrophy("arab-cup-2012", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9Xq4Nlr1NyllOa7FlAQ6_S8H_-9AfSJFdA&s");
updateTrophy("chan-2018-2020", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7YdvEPPfRd09DsHNPe4CiFPiRmtzoqfsEg&s");

function updateVideo(id, url) {
    const idIdx = dataTs.indexOf(`id: "${id}"`);
    if (idIdx === -1) return;
    const vIdx = dataTs.indexOf('videoUrl: "', idIdx);
    if (vIdx === -1) return;
    const end = dataTs.indexOf('",', vIdx);
    dataTs = dataTs.slice(0, vIdx) + `videoUrl: "${url}"` + dataTs.slice(end + 2);
}

// 2. Update videos
updateVideo("afcon-2025", "https://www.youtube.com/embed/DTxYWA7Uo5U");
updateVideo("futsal-dominance", "https://www.youtube.com/embed/3J5FaCy1hM8");
updateVideo("wwc-2023", "https://www.youtube.com/embed/NqFq3fkz6RM");
updateVideo("wc-2022", "https://www.youtube.com/embed/0VifmfZibXM");
updateVideo("chan-2018-2020", "https://www.youtube.com/embed/e1wh9WHNBeo");
updateVideo("arab-cup-2012", "https://www.youtube.com/embed/pka0m8-U-xY");
updateVideo("wc-1986", "https://www.youtube.com/embed/EGWT9hb-uMs");
updateVideo("afcon-1976", "https://www.youtube.com/embed/qKmVVMfI_JY");

// 3. Update key figures 
function updateFigureImage(nameStartsWith, url) {
    // Find name matching
    //  name: "Abdelmajid Dolmy",
    //  image: "...",
    const nameRegex = new RegExp(`name:\\s*"${nameStartsWith}[^"]*",\\s*((?:(?:role|club):\\s*"[^"]*",\\s*)*)image:\\s*"[^"]*"`, 'g');
    dataTs = dataTs.replace(nameRegex, (match, middle) => {
        return match.replace(/image:\s*"[^"]*"/, `image: "${url}"`);
    });
}
updateFigureImage("Abdelmajid Dolmy", "https://www.mjtnews.com/wp-content/uploads/2020/06/unnamed-15-2.jpg");
// For Chadi Riad there might not be one? Is he in youth categories or key figures? I think youth. We'll find out later if it doesn't match here
updateFigureImage("Chadi Riad", "https://africafoot.com/wp-content/uploads/2023/05/Chadi-Riad-1.jpg");
updateFigureImage("Hicham Dguig", "https://mountakhab.net/wp-content/uploads/2024/09/IMG_4111-jpeg.webp");
// Jamal Sellami / Houcine Ammouta? Let's check what their names are.
updateFigureImage("Jamal Sellami", "https://lionsdelatlas.ma/wp-content/uploads/2022/11/Houcine-Ammouta.jpg.webp");
updateFigureImage("Houcine Ammouta", "https://lionsdelatlas.ma/wp-content/uploads/2022/11/Houcine-Ammouta.jpg.webp");
updateFigureImage("Jos", "https://www.zerozero.pt/wimg/n733768b/1216172-jose-faria-confirma-saida-de-dois-jogadores-do-estrela.jpg"); // José Faria
updateFigureImage("Gheorghe M", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Vintil%C4%83_M%C4%83rd%C4%83rescu_1965.jpg/330px-Vintil%C4%83_M%C4%83rd%C4%83rescu_1965.jpg");

// 4. In YouthCategories.tsx there might be players like Chadi Riad
let youthTsx = fs.readFileSync('src/components/YouthCategories.tsx', 'utf8');
const chadiRiadRegex = /name:\s*"Chadi Riad",\s*role:\s*"[^"]*",\s*image:\s*"[^"]*"/g;
youthTsx = youthTsx.replace(chadiRiadRegex, (match) => match.replace(/image:\s*"[^"]*"/, 'image: "https://africafoot.com/wp-content/uploads/2023/05/Chadi-Riad-1.jpg"'));
fs.writeFileSync('src/components/YouthCategories.tsx', youthTsx);

// Update clubs in src/components/MoroccanClubs.tsx
let clubsTsx = fs.readFileSync('src/components/MoroccanClubs.tsx', 'utf8');
function updateClub(nameStartsWith, url) {
    const clubRegex = new RegExp(`name:\\s*"${nameStartsWith}[^"]*",\\s*city:\\s*"[^"]*",\\s*logo:\\s*"[^"]*"`, 'g');
    clubsTsx = clubsTsx.replace(clubRegex, (match) => {
        return match.replace(/logo:\s*"[^"]*"/, `logo: "${url}"`);
    });
}
updateClub("AS FAR", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabpwdLzgJ9zdH0JdqsySNALRzz3auKZK6og&s");
updateClub("Raja CA", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8n21YRyPxntb25lK_O18tJR7f9WL_mNkY_Q&s");
updateClub("Wydad AC", "https://upload.wikimedia.org/wikipedia/en/1/18/Wydad_AC_crest_%282022%29.svg");
updateClub("RS Berkane", "https://upload.wikimedia.org/wikipedia/en/d/de/RS_Berkane_%28logo%29.png");
updateClub("Maghreb de F", "https://upload.wikimedia.org/wikipedia/commons/d/de/MAS-Logo_official_by_brahim.png");
updateClub("FUS Rabat", "https://upload.wikimedia.org/wikipedia/fr/thumb/6/60/FUS_Rabat_%28logo%29.svg/1280px-FUS_Rabat_%28logo%29.svg.png");
updateClub("HUS Agadir", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7apjUL6tG-IFe4wZ8LP4ZF2hgLOa2rxnyA&s");
updateClub("IR Tanger", "https://upload.wikimedia.org/wikipedia/en/d/d1/IR_tanger_logo.png");
updateClub("COD Mekn", "https://upload.wikimedia.org/wikipedia/fr/f/f5/COD_Mekn%C3%A8s_%28logo%29.svg");
updateClub("Difaâ El Jadidi", "https://upload.wikimedia.org/wikipedia/en/8/84/Difa%C3%A2_El_Jadidi_%28logo%29.png");
updateClub("Union Touarga Sport", "https://upload.wikimedia.org/wikipedia/en/8/83/Union_Touarga_Sportif_logo.png");
updateClub("Olympic Safi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuphVdX1vAGLBWHkHzg4M3n21KLddrqMtRVw&s");
updateClub("Moghreb T", "https://tmssl.akamaized.net//images/wappen/head/9100.png?lm=1717720007");
updateClub("JS Soualem", "https://upload.wikimedia.org/wikipedia/en/6/67/JS_Soualem_logo.png");
updateClub("RCA Zemamra", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd-8HH-CL_oR6m2GpSdsQv2fGKembOL4hlQ&s");
updateClub("SC Chabab Mohammedia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BDpRkxazhtik9XrLXHjdgzCaG7KIO2cmrA&s");

// Botola Pro 2
updateClub("Kawkab Marrakech", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfYIA8bK05FBt-l7EMvIjqByacjWRKlwUQA&s");
updateClub("K", "https://upload.wikimedia.org/wikipedia/fr/2/2d/KAC_de_K%C3%A9nitra_%28logo%29.svg"); // Wait, "Kénitra AC" or "KAC" - I'll just use Kénitra
updateClub("Mouloudia Oujda", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5I4ox84Ipe49iQzC6IA28Bm6U6QG1xlT9A&s");
updateClub("Stade Marocain", "https://upload.wikimedia.org/wikipedia/fr/b/be/Stade_Marocain_%28logo%29.svg");
updateClub("Olympique Khouribga", "https://tmssl.akamaized.net//images/wappen/head/18702.png?lm=1729069064");
updateClub("Raja Beni Mellal", "https://upload.wikimedia.org/wikipedia/fr/f/fc/Raja_B%C3%A9ni_Mellal_%28logo%29.svg");
updateClub("Chabab Atlas Kh", "https://upload.wikimedia.org/wikipedia/fr/1/1c/CAK_logo.gif");
updateClub("Wydad F", "https://upload.wikimedia.org/wikipedia/commons/6/6d/Wydad_de_F%C3%A8s_Logo.png");
updateClub("Racing de Casablanca", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8Fw4AG_ZTg9hJ7hA51SoSE5BAMH92qTC9w&s");
updateClub("Olympique Dcheira", "https://upload.wikimedia.org/wikipedia/commons/2/2e/Olympique_dcheira_logo.jpg");
updateClub("Jeunesse Massira", "https://upload.wikimedia.org/wikipedia/fr/c/c0/JSM.Logo.jpg");
updateClub("US Yacoub El Mansour", "https://upload.wikimedia.org/wikipedia/fr/c/c9/Logo_Union_sportive_Yacoub_El_Mansour.jpg");
updateClub("Chabab Benguerir", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy76VfHU5K9q96y7o7oqLHBdzbXVaZ3zL5Ow&s");
updateClub("USM Oujda", "https://r2.thesportsdb.com/images/media/team/badge/i3zm8q1631198941.png");
updateClub("Rapide Oued Zem", "https://upload.wikimedia.org/wikipedia/fr/f/fc/LogoRCOZ.png");
updateClub("Youssoufia Berrechid", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9kF-I1Fo5EXcCHAk3_0HRnT4IVvlPrPRTQ&s");

// Ensure Kénitra works exactly
clubsTsx = clubsTsx.replace(/name:\s*"Kénitra AC"[^}]*logo:\s*"[^"]*"/g, (m) => m.replace(/logo:\s*"[^"]*"/, 'logo: "https://upload.wikimedia.org/wikipedia/fr/2/2d/KAC_de_K%C3%A9nitra_%28logo%29.svg"'));

fs.writeFileSync('src/data.ts', dataTs);
fs.writeFileSync('src/components/MoroccanClubs.tsx', clubsTsx);
console.log("Assets updated!");
