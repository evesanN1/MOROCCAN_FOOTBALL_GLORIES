import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { TrophyEra, Player } from "../data";
import { MapPin } from "lucide-react";
import { ProfileModal } from "./ProfileModal";
import { Jersey } from "./Jersey";

interface StadiumLayoutModalProps {
  children: React.ReactElement;
  era: TrophyEra;
}

const getPositionCoordinates = (position: string, index: number, total: number) => {
  // Simple heuristic to place players on the pitch based on their position
  const pos = position.toUpperCase();
  
  let top = "50%";
  let left = "50%";

  if (pos.includes("GK")) {
    top = "85%";
    left = "50%";
  } else if (pos.includes("CB") || pos.includes("DF")) {
    top = "70%";
    left = `${20 + (60 / (total + 1)) * (index + 1)}%`;
  } else if (pos.includes("RB") || pos.includes("RWB")) {
    top = "65%";
    left = "85%";
  } else if (pos.includes("LB") || pos.includes("LWB")) {
    top = "65%";
    left = "15%";
  } else if (pos.includes("CDM") || pos.includes("CM") || pos.includes("MF")) {
    top = "45%";
    left = `${20 + (60 / (total + 1)) * (index + 1)}%`;
  } else if (pos.includes("RM") || pos.includes("RW")) {
    top = "35%";
    left = "80%";
  } else if (pos.includes("LM") || pos.includes("LW")) {
    top = "35%";
    left = "20%";
  } else if (pos.includes("CAM")) {
    top = "30%";
    left = "50%";
  } else if (pos.includes("ST") || pos.includes("FW") || pos.includes("CF") || pos.includes("PIVOT") || pos.includes("WINGER")) {
    top = "15%";
    left = `${30 + (40 / (total + 1)) * (index + 1)}%`;
  }

  return { top, left, transform: "translate(-50%, -50%)" };
};

export const StadiumLayoutModal: React.FC<StadiumLayoutModalProps> = ({ children, era }) => {
  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-slate-900 border-slate-800">
        <DialogHeader className="p-6 bg-slate-900 text-white border-b border-slate-800 flex justify-between items-center relative z-20 overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
            {era.trophyImage && <img src={era.trophyImage} alt="Trophy" className="w-24 h-24 object-contain" />}
          </div>
          <div className="text-left relative z-10">
            <DialogTitle className="text-2xl font-display font-bold flex items-center gap-3">
              <MapPin className="w-6 h-6 text-morocco-gold" />
              Tactical Layout: {era.year}
            </DialogTitle>
            <p className="text-slate-400 text-sm mt-1">{era.title}</p>
          </div>
        </DialogHeader>
        
        <div className="bg-emerald-900 p-4 sm:p-8 flex justify-center items-center overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="relative w-full max-w-2xl aspect-[3/4] bg-emerald-800 overflow-hidden rounded-xl shadow-2xl border-4 border-emerald-700/50">
            {/* Pitch Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 80px)' }} />
            
            {/* Pitch Lines */}
            <div className="absolute inset-4 border-2 border-white/40 rounded-lg pointer-events-none" />
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-white/40 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            {/* Penalty Areas */}
            <div className="absolute top-4 left-1/2 w-64 h-32 border-2 border-white/40 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-4 left-1/2 w-64 h-32 border-2 border-white/40 -translate-x-1/2 pointer-events-none" />
            
            {/* Goal Areas */}
            <div className="absolute top-4 left-1/2 w-24 h-12 border-2 border-white/40 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-4 left-1/2 w-24 h-12 border-2 border-white/40 -translate-x-1/2 pointer-events-none" />
            
            {/* Penalty Spots */}
            <div className="absolute top-24 left-1/2 w-1.5 h-1.5 bg-white/40 rounded-full -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-24 left-1/2 w-1.5 h-1.5 bg-white/40 rounded-full -translate-x-1/2 pointer-events-none" />
            
            {/* Corner Arcs */}
            <div className="absolute top-4 left-4 w-8 h-8 border-b-2 border-r-2 border-white/40 rounded-br-full pointer-events-none" />
            <div className="absolute top-4 right-4 w-8 h-8 border-b-2 border-l-2 border-white/40 rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-t-2 border-r-2 border-white/40 rounded-tr-full pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-t-2 border-l-2 border-white/40 rounded-tl-full pointer-events-none" />

            {/* Players */}
            {era.squad.map((player, index) => {
              const style = player.grid 
                ? { top: `${player.grid.y}%`, left: `${player.grid.x}%`, transform: "translate(-50%, -50%)" }
                : getPositionCoordinates(player.position, index, era.squad.length);
              
              return (
                <div key={player.name} className="absolute z-10" style={style}>
                  <ProfileModal
                    name={player.name}
                    role={player.position}
                    image={player.image}
                    description={player.description}
                    joinedYear={player.joinedYear}
                    number={player.number}
                  >
                    <button className="group flex flex-col items-center cursor-pointer hover:scale-110 transition-transform focus:outline-none">
                      <div className="relative">
                        {player.image ? (
                          <img 
                            src={player.image} 
                            alt={player.name} 
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover object-top border-2 border-white shadow-lg"
                          />
                        ) : (
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-100 flex items-center justify-center font-bold text-morocco-red border-2 border-white shadow-lg">
                            {player.position}
                          </div>
                        )}
                        {player.number && (
                          <div className="absolute -bottom-2 -right-2 transform translate-x-1 translate-y-1">
                            <Jersey number={player.number} isGoalkeeper={player.position === "GK"} className="w-8 h-8 filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]" />
                          </div>
                        )}
                      </div>
                      <div className="mt-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-center border border-white/10">
                        <p className="text-white font-bold text-[10px] sm:text-xs whitespace-nowrap">{player.name}</p>
                        <p className="text-morocco-gold text-[8px] sm:text-[10px] font-bold uppercase">{player.position}</p>
                      </div>
                    </button>
                  </ProfileModal>
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
