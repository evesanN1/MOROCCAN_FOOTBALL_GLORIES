import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrophyEra } from "../data";
import { Star, Info } from "lucide-react";

interface Stadium3DProps {
  era: TrophyEra;
}

export const Stadium3D: React.FC<Stadium3DProps> = ({ era }) => {
  return (
    <div className="relative w-full aspect-[16/9] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white stadium-glow">
      {/* Stadium Walls with Zellige */}
      <div className="absolute inset-0 zellige-pattern opacity-10" />
      
      {/* Pitch */}
      <div className="absolute inset-12 bg-gradient-to-b from-emerald-600 to-emerald-800 rounded-[2rem] shadow-inner border-4 border-white/20 overflow-hidden">
        {/* Pitch Markings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 border-2 border-white/20 rounded-full" />
          <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/20" />
        </div>

        {/* Players */}
        <div className="absolute inset-0 p-8 grid grid-cols-5 gap-4 items-center">
          <AnimatePresence mode="wait">
            {era.squad.map((player, idx) => (
              <motion.div
                key={`${era.id}-${player.name}`}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border-2 border-morocco-gold/20 group-hover:border-morocco-gold transition-colors">
                    <div className="text-morocco-red font-display font-bold text-xl">{player.position}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <motion.div 
                    className="absolute -top-2 -right-2 bg-morocco-gold text-white p-1 rounded-full shadow-md"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Star className="w-3 h-3 fill-current" />
                  </motion.div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-white font-bold text-xs tracking-tight drop-shadow-md">{player.name}</p>
                  <p className="text-white/70 font-arabic text-[10px] italic">{player.nameArabic}</p>
                </div>

                {/* Hover Card */}
                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 -translate-y-24">
                  <div className="bg-white p-4 rounded-xl shadow-2xl border border-slate-100 w-48">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-morocco-red uppercase tracking-widest">{player.position}</span>
                      <Info className="w-3 h-3 text-slate-300" />
                    </div>
                    <p className="font-bold text-sm text-slate-900">{player.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{player.stats}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Stadium Arches Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-white/30 backdrop-blur-sm rounded-b-3xl border-x border-b border-white/20" />
      
      {/* Floodlights */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] animate-pulse" />
      <div className="absolute top-8 right-8 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] animate-pulse" />

      {/* Title Overlay */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end pointer-events-none">
        <motion.div
          key={era.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
        >
          <h2 className="text-white font-display font-bold text-3xl tracking-tighter uppercase drop-shadow-xl">
            {era.title}
          </h2>
          <p className="text-morocco-gold font-arabic text-lg italic mt-1">{era.titleArabic}</p>
        </motion.div>
        
        <div className="flex gap-2">
          {era.achievements.map((ach, i) => (
            <div key={i} className="bg-morocco-gold/20 backdrop-blur-sm px-3 py-1 rounded-full border border-morocco-gold/30 text-[10px] font-bold text-morocco-gold uppercase tracking-widest">
              {ach}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
