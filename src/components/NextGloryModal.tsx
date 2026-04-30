import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { MapPin, Calendar, Globe2 } from "lucide-react";

// TARGETS
const TARGET_2026 = new Date("2026-06-11T00:00:00Z").getTime();
const TARGET_2030 = new Date("2030-06-08T00:00:00Z").getTime();

function useCountdown(targetDate: number) {
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days: Math.max(0, days), hours: Math.max(0, hours), minutes: Math.max(0, minutes), seconds: Math.max(0, seconds) };
}

interface CountdownDisplayProps {
  target: number;
  title: string;
  location: string;
  trophyImg: string;
  description: string;
  dates: string;
}

const CountdownDisplay = ({ target, title, location, trophyImg, description, dates }: CountdownDisplayProps) => {
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start group hover:shadow-xl hover:border-morocco-gold/30 transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-morocco-green/5 to-transparent rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
      
      <div className="w-48 h-48 md:w-64 md:h-64 bg-slate-50/50 rounded-3xl flex items-center justify-center p-6 shrink-0 shadow-inner border border-slate-100 relative z-10">
        <img src={trophyImg} alt={title} className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
      </div>
      
      <div className="flex-1 text-center md:text-left relative z-10 flex flex-col h-full justify-center">
        <h4 className="text-3xl md:text-4xl font-display font-black text-slate-900 group-hover:text-morocco-green transition-colors mt-2 md:mt-0">{title}</h4>
        
        <p className="text-base text-slate-600 font-medium leading-relaxed mt-4 max-w-lg">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 text-sm font-bold text-slate-500 justify-center md:justify-start">
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
            <Globe2 className="w-4 h-4 text-morocco-gold" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
            <Calendar className="w-4 h-4 text-morocco-gold" />
            <span>{dates}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3 md:gap-4 mt-8 max-w-md mx-auto md:mx-0">
          {[
            { label: "Days", value: days },
            { label: "Hours", value: hours },
            { label: "Minutes", value: minutes },
            { label: "Secs", value: seconds },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center bg-slate-900 w-full py-4 rounded-2xl shadow-lg relative overflow-hidden group/time">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-morocco-gold transform scale-x-0 group-hover/time:scale-x-100 transition-transform origin-left" />
              <span className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">{item.value.toString().padStart(2, '0')}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface NextGloryModalProps {
  children: React.ReactNode;
}

export const NextGloryModal: React.FC<NextGloryModalProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger render={children as React.ReactElement} />
      <DialogContent className="max-w-[95vw] xl:max-w-[80vw] w-full aspect-auto md:aspect-[5/3] xl:aspect-video border border-morocco-green/20 rounded-[2rem] bg-[#fcfcfc]/95 backdrop-blur-md overflow-y-auto p-6 md:p-10 shadow-2xl flex flex-col justify-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col h-full md:justify-center">
          <DialogHeader className="mb-12 relative z-10 text-center mt-12 md:mt-0">
            <DialogTitle className="text-5xl sm:text-7xl font-display font-extrabold text-slate-900 tracking-tight">
              Next Glory
            </DialogTitle>
            <DialogDescription className="text-lg sm:text-xl font-medium text-slate-500 max-w-3xl mt-4 mx-auto">
              The countdown to history. Follow the atlas lions on their unwavering path to the ultimate prize.
            </DialogDescription>
          </DialogHeader>
          
          <div className="relative z-10 w-full">
          <Tabs defaultValue="2030" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100/50 p-1 rounded-xl">
              <TabsTrigger 
                value="2026"
                className="py-3 text-sm md:text-base font-bold data-[state=active]:bg-white data-[state=active]:text-morocco-green data-[state=active]:shadow-sm rounded-lg transition-all"
              >
                World Cup 2026
              </TabsTrigger>
              <TabsTrigger 
                value="2030"
                className="py-3 text-sm md:text-base font-bold data-[state=active]:bg-white data-[state=active]:text-morocco-red data-[state=active]:shadow-sm rounded-lg transition-all"
              >
                World Cup 2030
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="2026" className="focus:outline-none animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CountdownDisplay 
                title="North America 2026" 
                location="USA, Canada, Mexico" 
                target={TARGET_2026}
                dates="Jun 11 - Jul 19, 2026"
                description="The first World Cup hosted across three nations. Morocco aims to build upon their historic 2022 semi-final run and push even further on the North American stage."
                trophyImg="https://static.vecteezy.com/system/resources/previews/008/785/663/non_2x/fifa-world-cup-symbol-trophy-logo-mondial-champion-gold-design-abstract-illustration-free-vector.jpg"
              />
            </TabsContent>
            
            <TabsContent value="2030" className="focus:outline-none animate-in fade-in slide-in-from-bottom-4 duration-500">
               <CountdownDisplay 
                title="Centenary 2030" 
                location="Morocco, Spain, Portugal" 
                target={TARGET_2030}
                dates="Jun 8 - Jul 21, 2030"
                description="A historic moment for the Kingdom as Morocco co-hosts the Centenary World Cup. The Atlas Lions will play the biggest tournament on earth in front of their home fans."
                trophyImg="https://static.vecteezy.com/system/resources/previews/008/785/663/non_2x/fifa-world-cup-symbol-trophy-logo-mondial-champion-gold-design-abstract-illustration-free-vector.jpg"
              />
            </TabsContent>
          </Tabs>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
