import React from "react";
import { motion } from "motion/react";
import { TrophyEra } from "../data";
import { User, Play, Award, ChevronRight } from "lucide-react";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../components/ui/carousel";

import { ProfileModal } from "./ProfileModal";

interface SidebarRightProps {
  era: TrophyEra;
}

export const SidebarRight: React.FC<SidebarRightProps> = ({ era }) => {
  return (
    <aside className="fixed right-0 top-20 bottom-0 w-80 border-l border-slate-100 bg-white hidden xl:block z-40">
      <ScrollArea className="h-full">
        <div className="p-6 space-y-8">
          {/* Trophy Section */}
          {era.trophyImage && (
            <section className="relative group">
              <div className="absolute inset-0 bg-morocco-gold/5 rounded-[2rem] blur-2xl group-hover:bg-morocco-gold/10 transition-colors" />
              <div className="relative bg-white border border-slate-100 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm overflow-hidden moroccan-glaze">
                <div className="absolute inset-0 zellige-pattern opacity-[0.03] mix-blend-overlay pointer-events-none" />
                <img 
                  src={era.trophyImage} 
                  alt="Trophy" 
                  className="w-32 h-32 object-contain drop-shadow-2xl mb-4 hover:scale-110 transition-transform duration-500"
                />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-morocco-gold mb-1">Official Trophy</h4>
                <p className="text-xs font-bold text-slate-900">{era.title.split(' - ')[0]}</p>
              </div>
            </section>
          )}

          {/* Coach Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <User className="w-4 h-4 text-morocco-red" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">The Architect</h3>
            </div>
            <div className="relative group">
              <ProfileModal
                name={era.coach.name}
                role="Head Coach"
                image={era.coach.image}
                description={era.coach.profile}
                joinedYear={era.coach.joinedYear}
              >
                <button className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer focus:outline-none relative text-left moroccan-glaze">
                  <div className="absolute inset-0 zellige-pattern opacity-10 mix-blend-overlay z-10 pointer-events-none" />
                  <img 
                    src={Array.isArray(era.coach.image) ? era.coach.image[0] : era.coach.image} 
                    alt={era.coach.name} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-2xl pointer-events-none z-20">
                    <p className="font-bold text-sm">{era.coach.name}</p>
                    <p className="text-[10px] text-white/70 uppercase tracking-widest">Head Coach</p>
                  </div>
                </button>
              </ProfileModal>
            </div>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed italic font-serif line-clamp-3 md:line-clamp-4 relative group-hover:line-clamp-none cursor-pointer">
              "{era.coach.profile}"
            </p>
          </section>

          <Separator className="bg-slate-100" />

          {/* Highlights Carousel */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Play className="w-4 h-4 text-morocco-red" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Highlights</h3>
            </div>
            <Carousel className="w-full relative">
              <CarouselContent>
                {era.highlights.map((item, i) => (
                  <CarouselItem key={i}>
                    <div className="relative">
                      <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                        <iframe
                          src={item.videoUrl}
                          title={item.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full border-0"
                        ></iframe>
                      </div>
                      <p className="mt-2 text-[10px] font-bold uppercase text-slate-700">{item.title}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {era.highlights.length > 1 && (
                <>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6" />
                </>
              )}
            </Carousel>
          </section>

          <Separator className="bg-slate-100" />

          {/* Winning History */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-morocco-red" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Winning History</h3>
            </div>
            <div className="space-y-3">
              {era.achievements.map((ach, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-morocco-gold group-hover:scale-150 transition-transform" />
                  <p className="text-xs text-slate-600 leading-relaxed">{ach}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>
    </aside>
  );
};
