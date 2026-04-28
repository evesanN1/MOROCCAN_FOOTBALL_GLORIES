import React from "react";
import { motion } from "motion/react";
import { Shield, Trophy, Building2, Layers } from "lucide-react";

export const MoroccanClubs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Moroccan Clubs</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Morocco's football club system is highly organized and ranked as one of the best in Africa. It is divided into professional and amateur tiers. Here is the breakdown of the clubs for the 2025–2026 season.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Botola Pro 1 */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-morocco-gold/10 rounded-2xl flex items-center justify-center">
                <Trophy className="text-morocco-gold w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Botola Pro 1</h3>
            </div>
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-widest font-bold">Professional First Division</p>
            <p className="text-sm text-slate-600 mb-6">This is the top tier, featuring 16 clubs. The current 2025–2026 participants include:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "AS FAR (Rabat)", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabpwdLzgJ9zdH0JdqsySNALRzz3auKZK6og&s" },
                { name: "Raja CA (Casablanca)", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8n21YRyPxntb25lK_O18tJR7f9WL_mNkY_Q&s" },
                { name: "Wydad AC (Casablanca)", logo: "https://upload.wikimedia.org/wikipedia/en/1/18/Wydad_AC_crest_%282022%29.svg" },
                { name: "RS Berkane (Berkane)", logo: "https://upload.wikimedia.org/wikipedia/en/d/de/RS_Berkane_%28logo%29.png" },
                { name: "Maghreb de Fès (MAS)", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/MAS-Logo_official_by_brahim.png" },
                { name: "FUS Rabat", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/60/FUS_Rabat_%28logo%29.svg/1280px-FUS_Rabat_%28logo%29.svg.png" },
                { name: "HUS Agadir", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7apjUL6tG-IFe4wZ8LP4ZF2hgLOa2rxnyA&s" },
                { name: "IR Tanger", logo: "https://upload.wikimedia.org/wikipedia/en/d/d1/IR_tanger_logo.png" },
                { name: "COD Meknès", logo: "https://upload.wikimedia.org/wikipedia/fr/f/f5/COD_Mekn%C3%A8s_%28logo%29.svg" },
                { name: "Difaâ El Jadidi", logo: "https://upload.wikimedia.org/wikipedia/en/8/84/Difa%C3%A2_El_Jadidi_%28logo%29.png" },
                { name: "Union Touarga Sport", logo: "https://upload.wikimedia.org/wikipedia/en/8/83/Union_Touarga_Sportif_logo.png" },
                { name: "Olympic Safi", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuphVdX1vAGLBWHkHzg4M3n21KLddrqMtRVw&s" },
                { name: "Moghreb Tétouan", logo: "https://tmssl.akamaized.net//images/wappen/head/9100.png?lm=1717720007" },
                { name: "JS Soualem", logo: "https://upload.wikimedia.org/wikipedia/en/6/67/JS_Soualem_logo.png" },
                { name: "RCA Zemamra", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd-8HH-CL_oR6m2GpSdsQv2fGKembOL4hlQ&s" },
                { name: "SC Chabab Mohammedia", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BDpRkxazhtik9XrLXHjdgzCaG7KIO2cmrA&s" }
              ].map((club, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <img src={club.logo} alt={club.name} className="w-8 h-8 rounded-full shadow-sm object-cover" />
                  <span className="text-sm text-slate-700 font-medium">{club.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botola Pro 2 */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                <Shield className="text-slate-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Botola Pro 2</h3>
            </div>
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-widest font-bold">Professional Second Division</p>
            <p className="text-sm text-slate-600 mb-6">The second tier also consists of 16 clubs fighting for promotion to the top flight:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Kawkab Marrakech (KACM)", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfYIA8bK05FBt-l7EMvIjqByacjWRKlwUQA&s" },
                { name: "Kénitra AC (KAC)", logo: "https://upload.wikimedia.org/wikipedia/fr/2/2d/KAC_de_K%C3%A9nitra_%28logo%29.svg" },
                { name: "Mouloudia Oujda (MCO)", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5I4ox84Ipe49iQzC6IA28Bm6U6QG1xlT9A&s" },
                { name: "Stade Marocain (Rabat)", logo: "https://upload.wikimedia.org/wikipedia/fr/b/be/Stade_Marocain_%28logo%29.svg" },
                { name: "Olympique Khouribga (OCK)", logo: "https://tmssl.akamaized.net//images/wappen/head/18702.png?lm=1729069064" },
                { name: "Raja Beni Mellal (RBM)", logo: "https://upload.wikimedia.org/wikipedia/fr/f/fc/Raja_B%C3%A9ni_Mellal_%28logo%29.svg" },
                { name: "Chabab Atlas Khénifra (CAK)", logo: "https://upload.wikimedia.org/wikipedia/fr/1/1c/CAK_logo.gif" },
                { name: "Wydad Fès (WAF)", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Wydad_de_F%C3%A8s_Logo.png" },
                { name: "Racing de Casablanca (RAC)", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8Fw4AG_ZTg9hJ7hA51SoSE5BAMH92qTC9w&s" },
                { name: "Olympique Dcheira (OD)", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Olympique_dcheira_logo.jpg" },
                { name: "Jeunesse Massira (JSM)", logo: "https://upload.wikimedia.org/wikipedia/fr/c/c0/JSM.Logo.jpg" },
                { name: "US Yacoub El Mansour", logo: "https://upload.wikimedia.org/wikipedia/fr/c/c9/Logo_Union_sportive_Yacoub_El_Mansour.jpg" },
                { name: "Chabab Benguerir (CJBG)", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy76VfHU5K9q96y7o7oqLHBdzbXVaZ3zL5Ow&s" },
                { name: "USM Oujda (USMO)", logo: "https://r2.thesportsdb.com/images/media/team/badge/i3zm8q1631198941.png" },
                { name: "Rapide Oued Zem (RCOZ)", logo: "https://upload.wikimedia.org/wikipedia/fr/f/fc/LogoRCOZ.png" },
                { name: "Youssoufia Berrechid (CAYB)", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9kF-I1Fo5EXcCHAk3_0HRnT4IVvlPrPRTQ&s" }
              ].map((club, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <img src={club.logo} alt={club.name} className="w-8 h-8 rounded-full shadow-sm object-cover" />
                  <span className="text-sm text-slate-700 font-medium">{club.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Amateur Leagues */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Building2 className="w-32 h-32" />
          </div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <Layers className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">The Amateur Leagues (LNFA)</h3>
          </div>
          <p className="text-sm text-slate-300 mb-8 relative z-10">
            Below the professional tiers, there is a massive network of over 100 clubs divided into three main levels:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-morocco-gold mb-2">National Amateur (Tier 3)</h4>
              <p className="text-sm text-slate-300">16 clubs (e.g., WS Temara, Amal Tiznit, Rachad Bernoussi).</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-morocco-gold mb-2">Amateurs I (Tier 4)</h4>
              <p className="text-sm text-slate-300">32 clubs split into North and South groups.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-morocco-gold mb-2">Amateurs II (Tier 5)</h4>
              <p className="text-sm text-slate-300">62+ clubs split into four regional groups (North East, North West, Sahara, and South).</p>
            </div>
          </div>
        </div>

        {/* League Hierarchy Table */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Layers className="text-morocco-gold w-6 h-6" />
              League Hierarchy at a Glance
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="p-4 font-medium">Level</th>
                  <th className="p-4 font-medium">League Name</th>
                  <th className="p-4 font-medium">Number of Clubs</th>
                  <th className="p-4 font-medium">Nature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">1</td>
                  <td className="p-4 font-bold text-morocco-red">Botola Pro 1</td>
                  <td className="p-4 text-slate-600">16</td>
                  <td className="p-4 text-slate-600">Professional</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">2</td>
                  <td className="p-4 font-bold text-slate-700">Botola Pro 2</td>
                  <td className="p-4 text-slate-600">16</td>
                  <td className="p-4 text-slate-600">Professional</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">3</td>
                  <td className="p-4 font-bold text-slate-700">National Amateur</td>
                  <td className="p-4 text-slate-600">16</td>
                  <td className="p-4 text-slate-600">Semi-Pro/Amateur</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">4</td>
                  <td className="p-4 font-bold text-slate-700">Amateurs I</td>
                  <td className="p-4 text-slate-600">32</td>
                  <td className="p-4 text-slate-600">Amateur</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">5</td>
                  <td className="p-4 font-bold text-slate-700">Amateurs II</td>
                  <td className="p-4 text-slate-600">62+</td>
                  <td className="p-4 text-slate-600">Amateur</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-slate-50 text-sm text-slate-500 italic">
            <span className="font-bold">Note:</span> The clubs in the professional divisions (Botola 1 & 2) are required by the Federation (FRMF) to have professional structures, including youth academies and financial transparency, which has helped Moroccan clubs dominate recent African continental competitions.
          </div>
        </div>
      </motion.div>
    </div>
  );
};
