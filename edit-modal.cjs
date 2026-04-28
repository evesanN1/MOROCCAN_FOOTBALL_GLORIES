const fs = require('fs');
let code = fs.readFileSync('src/components/NextGloryModal.tsx', 'utf8');

// 1. Add TARGET_AFCON
code = code.replace(
  'const TARGET_2026 = new Date("2026-06-11T00:00:00Z").getTime();',
  `const TARGET_2025_AFCON = new Date("2025-12-21T00:00:00Z").getTime();\nconst TARGET_2026 = new Date("2026-06-11T00:00:00Z").getTime();`
);

// 2. Add trophyImg to CountdownDisplay props
code = code.replace(
  `const CountdownDisplay = ({ target, title, location, opponent }: { target: number, title: string, location: string, opponent?: string }) => {`,
  `const CountdownDisplay = ({ target, title, location, opponent, trophyImg }: { target: number, title: string, location: string, opponent?: string, trophyImg: string }) => {`
);

// 3. Update the rendered Trophy image in CountdownDisplay
code = code.replace(
  `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Trophy_icon.svg/500px-Trophy_icon.svg.png" alt="Trophy" className="w-32 h-32 rotate-12 object-contain" />`,
  `<div className="w-32 h-32 bg-white rounded-full flex items-center justify-center p-2 shadow-sm border border-slate-100/50">
    <img src={trophyImg} alt="Trophy" className="w-full h-full object-contain mix-blend-multiply rounded-full" />
  </div>`
);

// 4. Update the opacity of the parent wrapper
code = code.replace(
  `<div className="absolute top-0 right-0 p-4 opacity-10">`,
  `<div className="absolute top-0 right-0 p-4 opacity-30">`
);

// 5. Update the DialogTitle trophy
code = code.replace(
  `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Trophy_icon.svg/500px-Trophy_icon.svg.png" alt="World Cup" className="w-8 h-8 object-contain" />`,
  `<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/FIFA_World_Cup_Trophy_%28Ank_Kumar%2C_Infosys_Limited%29_01.jpg" alt="World Cup" className="w-8 h-8 object-contain mix-blend-multiply" />
  </div>`
);

// 6. Add AFCON 2025 and update WC calls
const targetBody = `<CountdownDisplay 
            title="FIFA World Cup 2026™" 
            location="USA, Canada & Mexico" 
            target={TARGET_2026}
            opponent="TBD (Group Stage)"
          />
          
          <CountdownDisplay 
            title="FIFA World Cup 2030™" 
            location="Morocco, Spain & Portugal" 
            target={TARGET_2030}
          />`;

const replacementBody = `<CountdownDisplay 
            title="AFCON 2025" 
            location="Morocco" 
            target={TARGET_2025_AFCON}
            trophyImg="https://upload.wikimedia.org/wikipedia/commons/5/5c/Finales_CAN_2021_%28137%29.jpg"
          />

          <CountdownDisplay 
            title="FIFA World Cup 2026™" 
            location="USA, Canada & Mexico" 
            target={TARGET_2026}
            opponent="TBD (Group Stage)"
            trophyImg="https://upload.wikimedia.org/wikipedia/commons/1/15/FIFA_World_Cup_Trophy_%28Ank_Kumar%2C_Infosys_Limited%29_01.jpg"
          />
          
          <CountdownDisplay 
            title="FIFA World Cup 2030™" 
            location="Morocco, Spain & Portugal" 
            target={TARGET_2030}
            trophyImg="https://upload.wikimedia.org/wikipedia/commons/1/15/FIFA_World_Cup_Trophy_%28Ank_Kumar%2C_Infosys_Limited%29_01.jpg"
          />`;

code = code.replace(targetBody, replacementBody);

// 7. Change sm:max-w-xl to sm:max-w-2xl and allow scroll
code = code.replace(
  `DialogContent className="sm:max-w-xl"`,
  `DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto"`
);

fs.writeFileSync('src/components/NextGloryModal.tsx', code);
console.log("Updated NextGloryModal.tsx");
