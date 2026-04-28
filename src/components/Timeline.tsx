import React from "react";
import { motion } from "motion/react";
import { TROPHY_ERAS, TrophyEra } from "../data";
import { Trophy } from "lucide-react";
import { cn } from "../../lib/utils";

interface TimelineProps {
  activeEraId: string;
  onEraChange: (era: TrophyEra) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ activeEraId, onEraChange }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-white/80 backdrop-blur-xl border-t border-slate-200 z-50 flex items-center px-8 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-12 min-w-max mx-auto">
        {TROPHY_ERAS.map((era, idx) => (
          <div key={era.id} className="flex items-center gap-12">
            <button
              onClick={() => onEraChange(era)}
              className="relative flex flex-col items-center group"
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 relative z-10",
                activeEraId === era.id 
                  ? "bg-morocco-red text-white scale-125 shadow-lg shadow-morocco-red/30" 
                  : "bg-slate-100 text-slate-400 hover:bg-slate-200"
              )}>
                <Trophy className={cn("w-5 h-5", activeEraId === era.id ? "text-morocco-gold" : "")} />
                
                {activeEraId === era.id && (
                  <motion.div 
                    layoutId="glow"
                    className="absolute inset-0 bg-morocco-red rounded-full blur-md opacity-50 -z-10"
                  />
                )}
              </div>
              
              <div className="mt-2 text-center">
                <p className={cn(
                  "text-[10px] font-bold tracking-widest uppercase transition-colors",
                  activeEraId === era.id ? "text-morocco-red" : "text-slate-400"
                )}>
                  {era.year}
                </p>
                <p className={cn(
                  "text-[8px] font-serif italic transition-colors",
                  activeEraId === era.id ? "text-slate-900" : "text-slate-300"
                )}>
                  {era.category}
                </p>
              </div>

              {/* Connector Line */}
              {idx < TROPHY_ERAS.length - 1 && (
                <div className="absolute left-full top-5 w-12 h-[1px] bg-slate-200 -translate-x-1" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
