import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { ScrollArea } from "../../components/ui/scroll-area";
import { TrophyEra } from "../data";
import { History, Award, Star, BookOpen } from "lucide-react";
import { ProfileModal } from "./ProfileModal";
import { Jersey } from "./Jersey";

interface LegacyArchiveModalProps {
  children: React.ReactElement;
  era: TrophyEra;
}

export const LegacyArchiveModal: React.FC<LegacyArchiveModalProps> = ({ children, era }) => {
  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-3xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-slate-900 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-morocco-red" />
            Legacy Archive: {era.year} {era.title.split(' - ')[0]}
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-full max-h-[65vh] pr-4 mt-4">
          <div className="space-y-8">
            {/* Overview */}
            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <History className="w-5 h-5 text-morocco-gold" />
                Historical Context
              </h3>
              <p className="text-slate-600 leading-relaxed font-serif">
                {era.description} This period marked a significant turning point in Moroccan football history. 
                The tactical innovations and sheer determination displayed by the squad set new benchmarks for 
                future generations. The legacy of {era.year} continues to resonate in the modern era, 
                serving as a blueprint for success on both the continental and global stages.
              </p>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-morocco-green" />
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {era.achievements.map((ach, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-morocco-green shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{ach}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Figures */}
            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-morocco-red" />
                Architects of Glory
              </h3>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden moroccan-glaze">
                <div className="absolute inset-0 zellige-pattern opacity-[0.02] mix-blend-overlay pointer-events-none" />
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100 relative z-10">
                  <ProfileModal
                    name={era.coach.name}
                    role="Head Coach"
                    image={era.coach.image}
                    description={era.coach.profile}
                    joinedYear={era.coach.joinedYear}
                  >
                    <button className="shrink-0 cursor-pointer hover:scale-105 transition-transform focus:outline-none">
                      <img 
                        src={Array.isArray(era.coach.image) ? era.coach.image[0] : era.coach.image} 
                        alt={era.coach.name} 
                        className="w-16 h-16 rounded-full object-cover object-top border-2 border-slate-100"
                      />
                    </button>
                  </ProfileModal>
                  <div>
                    <h4 className="font-bold text-slate-900">{era.coach.name}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Head Coach</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Notable Players</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {era.squad.map((player, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <ProfileModal
                          name={player.name}
                          role={player.position}
                          image={player.image}
                          description={player.description}
                          joinedYear={player.joinedYear}
                          number={player.number}
                        >
                          <button className="shrink-0 cursor-pointer hover:scale-105 transition-transform focus:outline-none relative">
                            {player.image ? (
                              <img src={player.image} alt={player.name} className="w-8 h-8 rounded-full object-cover object-top border border-slate-100" />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-morocco-red">
                                {player.position}
                              </div>
                            )}
                            {player.number && (
                              <div className="absolute -bottom-2 -right-2 scale-[0.65] origin-bottom-right transform translate-x-1 translate-y-1">
                                <Jersey number={player.number} isGoalkeeper={player.position === "GK"} className="w-8 h-8 filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]" />
                              </div>
                            )}
                          </button>
                        </ProfileModal>
                        <div>
                          <p className="text-sm font-bold text-slate-700">{player.name}</p>
                          <p className="text-[10px] text-slate-500">{player.stats}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
