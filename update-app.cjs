const fs = require('fs');

// ==== 1. Update App.tsx ====
let appTsx = fs.readFileSync('src/App.tsx', 'utf8');

// Find the section that renders activeEra.jerseyImage and remove it 
// We are only supposed to remove the one in front of the titles (the top one), not the one for the player image.
// Looking at App.tsx, there's: 
// {activeEra.jerseyImage && ( ... <img src={activeEra.jerseyImage} ... /> )}

appTsx = appTsx.replace(
  /\{activeEra\.jerseyImage && \(\s*<motion\.div[^>]*>\s*<img\s*src=\{activeEra\.jerseyImage\}[^>]*className="w-32 h-40 md:w-48 md:h-64 object-contain drop-shadow-2xl z-10"[^>]*\/>\s*<\/motion\.div>\s*\)\}/m,
  ''
);

fs.writeFileSync('src/App.tsx', appTsx);
