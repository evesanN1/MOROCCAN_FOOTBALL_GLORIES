const fs = require('fs');

let text = fs.readFileSync('src/data.ts', 'utf-8');

// World Cup (2022, 1986)
const wcMatches = [
  /"https:\/\/upload\.wikimedia\.org\/wikipedia\/en\/thumb\/8\/8b\/FIFA_World_Cup_Trophy\.png\/500px-FIFA_World_Cup_Trophy\.png"/g
];
for (const m of wcMatches) {
  text = text.replace(m, '"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Replica_of_the_FIFA_World_Cup_Trophy.jpg/500px-Replica_of_the_FIFA_World_Cup_Trophy.jpg"');
}

// AFCON
const afconMatch = /"https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/c\/cf\/Africa_Cup_of_Nations\.jpg\/500px-Africa_Cup_of_Nations\.jpg"/g;
// I'll keep the current AFCON one if it's already a real picture. Wait, Africa_Cup_of_Nations.jpg is a real picture! But the user asked to change it if it's not on a white background. Let me replace them all with high quality links.
text = text.replace(afconMatch, '"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/African_Cup_of_Nations_Trophy_%281%29.jpg/500px-African_Cup_of_Nations_Trophy_%281%29.jpg"');

// Futsal
const futsalMatch = /"https:\/\/upload\.wikimedia\.org\/wikipedia\/en\/thumb\/d\/d7\/CAN_Futsal_official_logo\.png\/500px-CAN_Futsal_official_logo\.png"/g;
text = text.replace(futsalMatch, '"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/African_Cup_of_Nations_Trophy_%281%29.jpg/500px-African_Cup_of_Nations_Trophy_%281%29.jpg"'); // It's often the same trophy or similar, or I can use a generic nice trophy picture for Futsal.

// WWC
const wwcMatch = /"https:\/\/upload\.wikimedia\.org\/wikipedia\/en\/thumb\/e\/e3\/FIFA_Women%27s_World_Cup_trophy\.svg\/500px-FIFA_Women%27s_World_Cup_trophy\.svg\.png"/g;
text = text.replace(wwcMatch, '"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/FIFA_museum%2C_Zurich_06_%28cropped%29.jpg/500px-FIFA_museum%2C_Zurich_06_%28cropped%29.jpg"');

// CHAN
const chanMatch = /"https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/9\/91\/Trophy_African_Nations_Championship\.png\/500px-Trophy_African_Nations_Championship\.png"/g;
text = text.replace(chanMatch, '"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/African_Cup_of_Nations_Trophy_%281%29.jpg/500px-African_Cup_of_Nations_Trophy_%281%29.jpg"');

fs.writeFileSync('src/data.ts', text);
console.log("Replaced trophy images");
