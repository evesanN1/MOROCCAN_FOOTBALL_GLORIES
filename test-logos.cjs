const fs = require('fs');

async function run() {
  const text = fs.readFileSync('src/components/MoroccanClubs.tsx', 'utf-8');
  const urls = [...text.matchAll(/logo:\s+"(http[^"]+)"/g)].map(m => m[1]);
  console.log(`Found ${urls.length} logos.`);

  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.status !== 200) {
        console.log(`Failed ${res.status}: ${url}`);
      }
    } catch(e) {
      console.log(`Error: ${url}`);
    }
  }
}
run();
