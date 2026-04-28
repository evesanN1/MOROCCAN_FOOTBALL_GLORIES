import React from "react";
import { motion } from "motion/react";
import { Crown, Globe, Map, User, Star, Award } from "lucide-react";

export const Records: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Records & Achievements</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Moroccan football has reached a "Golden Era" recently, breaking records not only for the country but for the entire African continent and the Arab world. Here are the most significant records held by Morocco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* World Cup Records */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-morocco-gold/10 rounded-2xl flex items-center justify-center">
                <Globe className="text-morocco-gold w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">World Cup Records (Global)</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Star className="w-4 h-4 text-morocco-gold" />
                  Best African/Arab Performance
                </h4>
                <p className="text-sm text-slate-600 mt-1">Morocco is the first and only African and Arab nation to reach the FIFA World Cup Semi-Finals (Qatar 2022), finishing 4th in the world.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Star className="w-4 h-4 text-morocco-gold" />
                  First to Win a Group
                </h4>
                <p className="text-sm text-slate-600 mt-1">In 1986, Morocco became the first African/Arab team to top their group in a World Cup (finishing above England, Poland, and Portugal).</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Star className="w-4 h-4 text-morocco-gold" />
                  First to Reach Knockouts
                </h4>
                <p className="text-sm text-slate-600 mt-1">In 1986, they were the first African team to progress to the Round of 16.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Star className="w-4 h-4 text-morocco-gold" />
                  Clean Sheets
                </h4>
                <p className="text-sm text-slate-600 mt-1">Yassine Bounou holds the record for the most clean sheets by an African goalkeeper in a single World Cup edition (3 in 2022).</p>
              </div>
            </div>
          </div>

          {/* Continental & Regional Records */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-morocco-green/10 rounded-2xl flex items-center justify-center">
                <Map className="text-morocco-green w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Continental & Regional Records</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Star className="w-4 h-4 text-morocco-green" />
                  CHAN Dominance
                </h4>
                <p className="text-sm text-slate-600 mt-1">Morocco is the first and only country to win the African Nations Championship (CHAN) back-to-back (2018 and 2020).</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Star className="w-4 h-4 text-morocco-green" />
                  Youth World Champions
                </h4>
                <p className="text-sm text-slate-600 mt-1">In a historic 2025, Morocco won the FIFA U-20 World Cup, becoming one of the few African nations to hold a global youth title.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Star className="w-4 h-4 text-morocco-green" />
                  Club Success
                </h4>
                <p className="text-sm text-slate-600 mt-1">Moroccan clubs are the most successful in the history of the CAF Confederation Cup, with a total of 8 titles (as of 2026).</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Star className="w-4 h-4 text-morocco-green" />
                  Futsal Excellence
                </h4>
                <p className="text-sm text-slate-600 mt-1">The Futsal team reached a record-high FIFA Ranking of 6th in the world (2024/2025), and they have won 3 consecutive AFCON and 3 consecutive Arab Cup titles.</p>
              </div>
            </div>
          </div>

          {/* Individual Player Records */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                <User className="text-blue-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Individual Player Records</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900">Most Caps (Appearances)</h4>
                <p className="text-sm text-slate-600 mt-1">Noureddine Naybet holds the record with 115 appearances. Achraf Hakimi is rapidly closing in with 95+ caps at only 27 years old.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Top Goal Scorer</h4>
                <p className="text-sm text-slate-600 mt-1">Ahmed Faras remains the all-time leading scorer with 36 goals. Currently, Ayoub El Kaabi (32 goals) and Youssef En-Nesyri (25+ goals) are the closest active players to breaking this record.</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Most World Cup Matches</h4>
                <p className="text-sm text-slate-600 mt-1">Achraf Hakimi and Hakim Ziyech share the record for the most World Cup games played by a Moroccan (10 matches each).</p>
              </div>
            </div>
          </div>

          {/* Recent Historic "Firsts" */}
          <div className="bg-gradient-to-br from-morocco-red to-rose-900 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Crown className="w-32 h-32" />
            </div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Award className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Recent Historic "Firsts" (2024–2026)</h3>
            </div>
            <div className="space-y-6 relative z-10">
              <div>
                <h4 className="font-bold text-morocco-gold">Olympic Medal</h4>
                <p className="text-sm text-rose-100 mt-1">In 2024, the Moroccan Olympic team won the Bronze Medal in Paris, the first-ever Olympic football medal for the country.</p>
              </div>
              <div>
                <h4 className="font-bold text-morocco-gold">Perfect Qualification</h4>
                <p className="text-sm text-rose-100 mt-1">For the 2026 World Cup, Morocco set a record by winning 8 out of 8 qualifying matches, conceding only 2 goals.</p>
              </div>
              <div>
                <h4 className="font-bold text-morocco-gold">Women's Breakthrough</h4>
                <p className="text-sm text-rose-100 mt-1">The women's team became the first from the Arab world to qualify for and reach the Round of 16 in a FIFA Women's World Cup (2023).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Table */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Award className="text-morocco-gold w-6 h-6" />
              Summary Table: Key Achievement Records
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="p-4 font-medium">Record Type</th>
                  <th className="p-4 font-medium">Achievement</th>
                  <th className="p-4 font-medium">Year/Stat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Highest FIFA Rank</td>
                  <td className="p-4 text-slate-600">11th (Global)</td>
                  <td className="p-4 text-slate-600">2023/2024</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">World Cup Best</td>
                  <td className="p-4 text-slate-600">4th Place</td>
                  <td className="p-4 text-slate-600">2022</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">CHAN Titles</td>
                  <td className="p-4 text-slate-600">2 (Back-to-Back)</td>
                  <td className="p-4 text-slate-600">2018, 2020</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Youth World Cup</td>
                  <td className="p-4 text-slate-600">Champions</td>
                  <td className="p-4 text-slate-600">2025</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Most Goals (Indiv.)</td>
                  <td className="p-4 text-slate-600">Ahmed Faras</td>
                  <td className="p-4 text-slate-600">36</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Most Caps (Indiv.)</td>
                  <td className="p-4 text-slate-600">Noureddine Naybet</td>
                  <td className="p-4 text-slate-600">115</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
