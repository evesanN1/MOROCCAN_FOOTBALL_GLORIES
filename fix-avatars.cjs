const fs = require('fs');
let text = fs.readFileSync('src/data.ts', 'utf-8');

const placeholder = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

const lines = text.split("\n");
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes(placeholder)) {
    let nameMatch = lines[i].match(/name:\s*"([^"]+)"/);
    if (!nameMatch) {
       nameMatch = lines[i-1].match(/name:\s*"([^"]+)"/);
    }
    
    if (nameMatch) {
      const name = nameMatch[1];
      const newImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(name.replace(" / ", "+"))}&background=c52a32&color=fff&size=500&bold=true`;
      lines[i] = lines[i].replace(placeholder, newImage);
    }
  }
}

fs.writeFileSync('src/data.ts', lines.join("\n"));
