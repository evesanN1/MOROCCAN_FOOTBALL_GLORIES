import React from "react";
import { motion } from "motion/react";
import { Users, GraduationCap, Medal, Info } from "lucide-react";

export const YouthCategories: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Youth Categories</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The youth categories for Moroccan football are structured according to FIFA and CAF standards. These teams serve as a pipeline to the senior national team, with the Royal Moroccan Football Federation (FRMF) overseeing their training at facilities like the Mohammed VI Football Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Men's Youth */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                <Users className="text-blue-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Men's Youth Categories</h3>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">U-23 (Olympic Team)</h4>
                  <p className="text-sm text-slate-600 mt-1">This is the highest youth level. It serves as the primary squad for the Olympic Games. Players must be under 23, though the Olympics allow three "overage" players.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">U-20 (Junior Team)</h4>
                  <p className="text-sm text-slate-600 mt-1">Competes in the U-20 Africa Cup of Nations and the FIFA U-20 World Cup. It is often considered the most critical transition stage for young professionals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">U-17 (Cadet Team)</h4>
                  <p className="text-sm text-slate-600 mt-1">Competes in the U-17 Africa Cup of Nations and the FIFA U-17 World Cup. This level focuses on identifying early elite talent.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">U-15 & U-16 (Developmental)</h4>
                  <p className="text-sm text-slate-600 mt-1">These levels are primarily for regional tournaments (like UNAF) and developmental friendly matches to prepare players for the U-17 level.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">U-13 (School Level)</h4>
                  <p className="text-sm text-slate-600 mt-1">Often associated with the African Schools Football Championship, focusing on grassroots development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Women's Youth */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center">
                  <Users className="text-pink-500 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Women's Youth Categories</h3>
              </div>
              <p className="text-sm text-slate-600 mb-6">Morocco has heavily invested in women's football recently, establishing consistent youth structures:</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">U-20 Women</h4>
                    <p className="text-sm text-slate-600 mt-1">Competes in the U-20 Women's World Cup and African qualifiers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">U-17 Women</h4>
                    <p className="text-sm text-slate-600 mt-1">Competes in the U-17 Women's World Cup (Morocco made history by qualifying for the first time in 2022).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-morocco-green to-emerald-900 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <GraduationCap className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 relative z-10">
                <Info className="w-5 h-5 text-morocco-gold" />
                Why these categories matter
              </h3>
              <p className="text-sm text-emerald-50 leading-relaxed relative z-10">
                The Moroccan strategy involves keeping these groups active year-round, not just during tournament qualifiers. This "continuity" is why you often see players like Achraf Hakimi or Azzedine Ounahi having played together in the U-17 or U-20 levels long before they reached the senior team.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Table */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Medal className="text-morocco-gold w-6 h-6" />
              Summary of Major Competitions by Category
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="p-4 font-medium">Category</th>
                  <th className="p-4 font-medium">Major Tournament</th>
                  <th className="p-4 font-medium">Age Limit Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">U-23</td>
                  <td className="p-4 text-slate-600">Olympic Games / U-23 AFCON</td>
                  <td className="p-4 text-slate-600">23 or under (plus 3 overage for Olympics)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">U-20</td>
                  <td className="p-4 text-slate-600">U-20 World Cup / U-20 AFCON</td>
                  <td className="p-4 text-slate-600">Must be 20 or younger in the competition year</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">U-17</td>
                  <td className="p-4 text-slate-600">U-17 World Cup / U-17 AFCON</td>
                  <td className="p-4 text-slate-600">Must be 17 or younger in the competition year</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">U-15</td>
                  <td className="p-4 text-slate-600">African Schools Championship</td>
                  <td className="p-4 text-slate-600">Generally 14–15 years old</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
