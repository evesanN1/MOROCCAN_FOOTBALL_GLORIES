import React from "react";
import { motion } from "motion/react";
import { Star, Award, Shield, Zap } from "lucide-react";

export const Legends: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Football Legends</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Morocco has produced some of the most iconic figures in African and Arab football history. From the early pioneers to the modern-day stars who made history in the 2022 World Cup, here are the legends of Moroccan football.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pioneers */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-morocco-gold/10 rounded-2xl flex items-center justify-center mb-6">
              <Star className="text-morocco-gold w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">The Pioneers & Golden Era</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Larbi_Benbarek_-_2.jpg/500px-Larbi_Benbarek_-_2.jpg" alt="Larbi Benbarek" className="w-16 h-16 rounded-2xl object-cover object-top shrink-0 shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">Larbi Benbarek ("The Black Pearl")</h4>
                  <p className="text-sm text-slate-600 mt-1">Often cited as the first true African football superstar. Pelé once famously said, "If I am the king of football, then Larbi Benbarek is the God." He was a pioneer who starred for Atlético Madrid and Marseille in the 1940s and 50s.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ahmed_Faras_México_70.png/500px-Ahmed_Faras_México_70.png" alt="Ahmed Faras" className="w-16 h-16 rounded-2xl object-cover object-top shrink-0 shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">Ahmed Faras</h4>
                  <p className="text-sm text-slate-600 mt-1">A legendary striker who led Morocco to their only AFCON title in 1976. He remains the national team's all-time leading scorer and was the first Moroccan to win the African Ballon d'Or (1975).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Abdelmajid_Dolmy.jpg/500px-Abdelmajid_Dolmy.jpg" alt="Abdelmajid Dolmy" className="w-16 h-16 rounded-2xl object-cover object-top shrink-0 shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">Abdelmajid Dolmy</h4>
                  <p className="text-sm text-slate-600 mt-1">Known as "The Maestro," he was the heartbeat of the Moroccan midfield during the 1970s and 80s. He was famous for his fair play and incredible vision, never receiving a red card in his entire career.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 1986 & 1998 Icons */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-morocco-red/10 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="text-morocco-red w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">The 1986 & 1998 Icons</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/بادو_الزاكي.jpg/500px-بادو_الزاكي.jpg" alt="Badou Zaki" className="w-16 h-16 rounded-2xl object-cover object-top shrink-0 shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">Badou Zaki</h4>
                  <p className="text-sm text-slate-600 mt-1">One of the greatest African goalkeepers of all time. He was the captain and hero of the 1986 World Cup team that became the first African/Arab side to reach the knockout stages. He won the African Player of the Year in 1986.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Mustapha_Hadji.jpg/500px-Mustapha_Hadji.jpg" alt="Mustapha Hadji" className="w-16 h-16 rounded-2xl object-cover object-top shrink-0 shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">Mustapha Hadji</h4>
                  <p className="text-sm text-slate-600 mt-1">The face of Moroccan football in the late 90s. Famous for his technical brilliance and his iconic goal against Norway in the 1998 World Cup. He won the African Player of the Year in 1998.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/نور_الدين_النيبت_(cropped).jpg/500px-نور_الدين_النيبت_(cropped).jpg" alt="Noureddine Naybet" className="w-16 h-16 rounded-2xl object-cover object-top shrink-0 shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">Noureddine Naybet</h4>
                  <p className="text-sm text-slate-600 mt-1">Arguably Morocco's greatest defender. He earned 115 caps and had a stellar European career, most notably winning La Liga with Deportivo La Coruña in 2000. He was a leader who brought discipline and tactical intelligence.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Legends */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-morocco-green/20 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <Zap className="text-morocco-green w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-6 relative z-10">The Modern Legends</h3>
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Achraf_Hakimi_vs_Niger,_5_Sept_2025.jpg/500px-Achraf_Hakimi_vs_Niger,_5_Sept_2025.jpg" alt="Achraf Hakimi" className="w-16 h-16 rounded-2xl object-cover object-top shrink-0 shadow-sm border border-white/10" />
                <div>
                  <h4 className="font-bold text-morocco-gold">Achraf Hakimi</h4>
                  <p className="text-sm text-slate-300 mt-1">Widely considered one of the best right-backs in the world. He has played for giants like Real Madrid, Inter Milan, and PSG, winning the Champions League and multiple league titles.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hakim_Ziyech_2021.jpg/500px-Hakim_Ziyech_2021.jpg" alt="Hakim Ziyech" className="w-16 h-16 rounded-2xl object-cover object-top shrink-0 shadow-sm border border-white/10" />
                <div>
                  <h4 className="font-bold text-morocco-gold">Hakim Ziyech</h4>
                  <p className="text-sm text-slate-300 mt-1">Known as "The Wizard," his left foot and creative vision have been central to Morocco's recent successes. He holds the record (alongside Hakimi) for the most World Cup appearances by a Moroccan player.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Yassine_Bono_(cropped).jpg/500px-Yassine_Bono_(cropped).jpg" alt="Yassine Bounou" className="w-16 h-16 rounded-2xl object-cover object-top shrink-0 shadow-sm border border-white/10" />
                <div>
                  <h4 className="font-bold text-morocco-gold">Yassine Bounou (Bono)</h4>
                  <p className="text-sm text-slate-300 mt-1">His heroics in the 2022 World Cup penalty shootouts and his consistency in Europe (winning the Europa League with Sevilla) have made him a modern icon, following in the footsteps of Zaki.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Award className="text-morocco-gold w-6 h-6" />
              Comparison of Key Achievements
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="p-4 font-medium">Player</th>
                  <th className="p-4 font-medium">Primary Era</th>
                  <th className="p-4 font-medium">Key Achievement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Ahmed Faras</td>
                  <td className="p-4 text-slate-600">1970s</td>
                  <td className="p-4 text-slate-600">AFCON Winner (1976), African Player of the Year</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Badou Zaki</td>
                  <td className="p-4 text-slate-600">1980s</td>
                  <td className="p-4 text-slate-600">World Cup Round of 16 (1986), Top African Goalkeeper</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Mustapha Hadji</td>
                  <td className="p-4 text-slate-600">1990s</td>
                  <td className="p-4 text-slate-600">African Player of the Year (1998), 1998 WC Star</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Noureddine Naybet</td>
                  <td className="p-4 text-slate-600">1990s/00s</td>
                  <td className="p-4 text-slate-600">Most successful Moroccan club career in Europe</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Achraf Hakimi</td>
                  <td className="p-4 text-slate-600">2010s/20s</td>
                  <td className="p-4 text-slate-600">World Cup Semi-Finalist (2022), UCL Winner</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-slate-50 text-sm text-slate-500 italic">
            These players didn't just win trophies; they changed the way the world views Moroccan football, paving the way for the nation to co-host the 2030 World Cup.
          </div>
        </div>
      </motion.div>
    </div>
  );
};
