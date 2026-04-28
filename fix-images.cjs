const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

// Replace silhouette with new profile placeholder
content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/c\/cd\/Silhouette_Male\.svg\/500px-Silhouette_Male\.svg\.png/g, 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png');

// Trophies - ensure real pictures with proper Wikimedia links
const trophyReplacements = {
  // World Cup (2022, 1986) - 1/10/World_Cup_Trophy.png was 404
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/World_Cup_Trophy.png/500px-World_Cup_Trophy.png': 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/FIFA_World_Cup_Trophy.png/500px-FIFA_World_Cup_Trophy.png',
  
  // AFCON (2025, 1976)
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Africa_Cup_of_Nations.jpg/500px-Africa_Cup_of_Nations.jpg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Africa_Cup_of_Nations.jpg/500px-Africa_Cup_of_Nations.jpg', // Fine
  
  // Women's World Cup (2023)
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/FIFA_Women%27s_World_Cup_Trophy.svg/500px-FIFA_Women%27s_World_Cup_Trophy.svg.png': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/FIFA_Women%27s_World_Cup_trophy.svg/500px-FIFA_Women%27s_World_Cup_trophy.svg.png',
  
  // Futsal AFCON (2016-2024)
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/CAF_Futsal_Africa_Cup_of_Nations_Trophy.jpg/500px-CAF_Futsal_Africa_Cup_of_Nations_Trophy.jpg': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/CAN_Futsal_official_logo.png/500px-CAN_Futsal_official_logo.png'
};

for (const [search, replace] of Object.entries(trophyReplacements)) {
  // Use replaceAll in case there are multiple
  content = content.replace(new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace);
}

fs.writeFileSync('src/data.ts', content, 'utf8');

// Next Glory Updates - gold trophy for the Next Glory modal and Layout
let nextGlory = fs.readFileSync('src/components/NextGloryModal.tsx', 'utf8');
nextGlory = nextGlory.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/c\/cb\/Gold_Trophy_Icon\.svg\/500px-Gold_Trophy_Icon\.svg\.png/g, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Trophy_icon.svg/500px-Trophy_icon.svg.png');
fs.writeFileSync('src/components/NextGloryModal.tsx', nextGlory, 'utf8');

let layout = fs.readFileSync('src/components/Layout.tsx', 'utf8');
layout = layout.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/c\/cb\/Gold_Trophy_Icon\.svg\/500px-Gold_Trophy_Icon\.svg\.png/g, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Trophy_icon.svg/500px-Trophy_icon.svg.png');
fs.writeFileSync('src/components/Layout.tsx', layout, 'utf8');

console.log("Fixes applied successfully.");
