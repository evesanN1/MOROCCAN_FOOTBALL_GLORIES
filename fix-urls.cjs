const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

const replacements = {
  'chadi riad': 'https://africafoot.com/wp-content/uploads/2023/05/Chadi-Riad-1.jpgy',
  'yahia attiyat allah': 'https://www.kingfut.com/wp-content/uploads/2024/02/croatia-v-morocco-3rd-place-fifa-world-cup-qatar-2022-2-1-scaled-1.jpg',
  'brahim diaz': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSd649TQTFu0mDDrWsPzrbuJ99w8H-9kwS1A&s',
  'reda khiyari': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqJj88KpmXZAG36QW_n4nNG3swJXekg9lPw&s',
  'soufiane borite': 'https://lnfoficial.com.br/media/2024/07/18.07.2024-Marrocos-Foto-FIFA-1.webp',
  'bilal bakkali': 'https://lionsdelatlas.ma/wp-content/uploads/2025/05/bilal-bakkali.png',
  'anas el ayyane': 'https://cdn-img.zerozero.pt/img/planteis/new/46/52/11684652_anas_el_ayyane_20240919173151.jpg',
  'omar namsaoui': 'https://fr.le7tv.ma/wp-content/uploads/2022/06/Screenshot_20220608-090606_Gallery-1.jpg',
  'soufiane bouftini': 'data:image/jpeg;base64,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',
  'hamza el moussaoui': 'https://www.cafonline.com/media/hdmmtynv/el-moussaoui-hamza.png',
  'walid el karti': 'https://lionsdelatlas.ma/wp-content/uploads/2025/09/walid-el-karti-e1757940719531-696x450.jpg',
  'ismail haddad': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8K6fPeDMvWYOhTK9XC6TBprDkH6bD3suEw&s',
  'ayoub el khaliqui': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pk3_ocDdm__srDq641qDs4gaOm0TRkOaRg&s',
  'ismail benlamalem': 'https://www.footballdatabase.eu/images/photos/players/a_119/119069.jpg',
  'zakaria bergdich': 'https://alchetron.com/cdn/zakarya-bergdich-e4a44fef-61fd-4924-a856-b97ca01f4ff-resize-750.jpeg',
  'abdessamad menkari': 'https://aujourdhui.ma/wp-content/uploads/2016/02/Abdessamad-El-Mankari-1801.jpg',
  'yassine salhi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrciXCw15U9G6qBY3W92Nb9GYANRlG2Z5JDQ&s',
  'badou zaki': 'https://www.2022mag.com/wp-content/uploads/2020/05/CrDpSmvWIAAt9pM.jpg',
  'labid khalifa': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOb5u6qtaKfqSSh93zDWcadn3Jdf4BdKbXA&s',
  'mustafa el biyaz': 'https://cdn.resfu.com/img_data/players/medium/382684.jpg?size=340x&lossy=1',
  'abdelmajid lamriss': 'https://cdn.resfu.com/img_data/players/medium/382677.jpg?size=340x&lossy=1',
  'abdelmajid dolmy': 'https://www.mjtnews.com/wp-content/uploads/2020/06/unnamed-15-2.jpg',
  'abderrazak khairi': 'https://lematin.ma/lematin/uploads/images/2025/12/20/478530.webp',
  'mohammed timoumi': 'https://shoot-africa.com/wp-content/uploads/2025/06/54ccfe38a4c8772021fec0b1cc0f2fd0737401de690754166524554f333692fa.webp',
  'hamid hazzaz': 'https://upload.wikimedia.org/wikipedia/ar/thumb/6/6c/%D8%AD%D9%85%D9%8A%D8%AF_%D8%A7%D9%84%D9%87%D8%B2%D8%A7%D8%B2.jpg/330px-%D8%AD%D9%85%D9%8A%D8%AF_%D8%A7%D9%84%D9%87%D8%B2%D8%A7%D8%B2.jpg',
  'larbi aherdane': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Gyo_e-TbRZ_XjfTWyS8u7_jYEQmkPsVliQ&s',
  'brahim glaoua': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBu6FRT5hu6q0X-q19U98iqc1wYk67LrrJg&s',
  'jawad andaloussi': 'https://i.ytimg.com/vi/q3hjyliQRFo/mqdefault.jpg',
  'chérif fetoui': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3sUmCiYynuNbJjdmM4mAZRE6Iw2-p3yJpw&s',
  'abdallah tazi': 'https://sport.le360.ma/resizer/v2/7B7HRUTV5JC4LL2JRIHNOKLYWA.png?auth=6197bd08d633392b260c4c5acaa771b698965597bb99504b74be1a65f7c3f9d2&smart=true&width=1216&height=684',
  'baba': 'https://ichef.bbci.co.uk/ace/standard/624/cpsprodpb/15E13/production/_99491698_papacamara.jpg',
  'hassan amcharrat (acila)': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2l2-pSt73Pl7Pe42sNvGBqAljowE_yu96A&s'
};

const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];

  if (line.includes('name:')) {
    const match = line.match(/name:\s*"([^"]+)"/);
    if (match) {
      let name = match[1].trim().toLowerCase();
      
      // Special cases
      if (name === 'بيليه المغرب' || name === 'hassan amcharrat (acila)') name = 'hassan amcharrat (acila)';

      if (replacements[name]) {
        // Find existing image: "..." and replace
        line = line.replace(/image:\s*"[^"]+"/, `image: "${replacements[name]}"`);
        lines[i] = line;
      }
    }
  }
}

fs.writeFileSync('src/data.ts', lines.join('\n'), 'utf8');
console.log('Update Complete.');
