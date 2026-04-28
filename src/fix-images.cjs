const fs = require("fs");

const files = [
  "src/data.ts",
  "src/components/Legends.tsx",
  "src/components/MoroccanClubs.tsx",
  "src/components/Layout.tsx",
  "src/components/NextGloryModal.tsx"
];

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  
  content = content.replace(/https:\/\/upload\.wikimedia\.org\/([^"'\s]+)/g, "https://wsrv.nl/?url=upload.wikimedia.org/$1");
  
  fs.writeFileSync(file, content);
}
console.log("Done adding wsrv proxy!");
