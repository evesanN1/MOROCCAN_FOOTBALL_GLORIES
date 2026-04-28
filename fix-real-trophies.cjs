const fs = require('fs');

let text = fs.readFileSync('src/data.ts', 'utf-8');

// World Cup (2022, 1986)
// We already replaced it once maybe? Let's explicitly replace ALL trophyImage: "..." with the exact ones!
const wcURL = '"https://upload.wikimedia.org/wikipedia/commons/1/15/FIFA_World_Cup_Trophy_%28Ank_Kumar%2C_Infosys_Limited%29_01.jpg"';
const afconURL = '"https://upload.wikimedia.org/wikipedia/commons/5/5c/Finales_CAN_2021_%28137%29.jpg"';
const wwcURL = '"https://upload.wikimedia.org/wikipedia/commons/a/a2/FIFA_museum%2C_Zurich_06_%28cropped%29.jpg"';
const futsalURL = '"https://upload.wikimedia.org/wikipedia/commons/4/43/WAFCON_Futsal_2025_-_Morocco_trophy_celebration.jpg"';
const arabURL = '"https://upload.wikimedia.org/wikipedia/commons/6/6a/2023_Arab_Club_Champions_Cup_Trophy_CR7Museum.jpg"';
const chanURL = '"https://upload.wikimedia.org/wikipedia/commons/5/5c/Finales_CAN_2021_%28137%29.jpg"'; 

// Let's replace by `id` block.
function replaceTrophy(id, url) {
    // Find the index of `id: "${id}"`
    const idIndex = text.indexOf(`id: "${id}"`);
    if (idIndex === -1) return;
    
    // Find the next `trophyImage: "..."` after id
    const tIndex = text.indexOf('trophyImage: "', idIndex);
    if (tIndex === -1) return;
    
    const end = text.indexOf('",', tIndex);
    const oldStr = text.substring(tIndex, end + 1);
    
    text = text.slice(0, tIndex) + `trophyImage: ${url}` + text.slice(end + 1);
}

replaceTrophy("wc-1986", wcURL);
replaceTrophy("wc-2022", wcURL);
replaceTrophy("afcon-1976", afconURL);
replaceTrophy("afcon-2025", afconURL);
replaceTrophy("wwc-2023", wwcURL);
replaceTrophy("futsal-dominance", futsalURL);
replaceTrophy("arab-cup-2012", arabURL);
replaceTrophy("chan-2018-2020", chanURL);

fs.writeFileSync('src/data.ts', text);
console.log("Replaced trophy images");
