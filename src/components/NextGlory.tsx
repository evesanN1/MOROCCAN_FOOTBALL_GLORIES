import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Shield } from "lucide-react";

const TARGET_2025_AFCON = new Date("2025-12-21T00:00:00Z").getTime();
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

const CountdownDisplay = ({ target, title, location, trophyImg }: { target: number, title: string, location: string, trophyImg: string }) => {
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-sm flex items-center gap-6 group hover:shadow-md transition-shadow">
      <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center p-3 shrink-0">
        <img src={trophyImg} alt={title} className="w-full h-full object-contain mix-blend-multiply" />
      </div>
      
      <div className="flex-1">
        <h4 className="text-lg font-bold text-slate-900 group-hover:text-morocco-green transition-colors">{title}</h4>
        <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3" /> {location}
        </p>
        
        <div className="flex gap-4 mt-3">
          {[
            { label: "D", value: days },
            { label: "H", value: hours },
            { label: "M", value: minutes },
            { label: "S", value: seconds },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-sm font-mono font-bold text-morocco-green">{item.value.toString().padStart(2, '0')}</span>
              <span className="text-[8px] uppercase tracking-tighter text-slate-400 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const NextGlory = () => {
  return (
    <div className="mt-40 mb-20 pointer-events-none select-none">
      <div className="relative mb-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[2px] w-16 bg-morocco-gold" />
          <span className="text-sm font-bold text-morocco-gold uppercase tracking-[0.4em]">Historical Milestone</span>
        </div>
        
        <div className="relative">
          <h2 className="text-[14rem] md:text-[20rem] font-display font-black text-slate-900 tracking-tighter leading-[0.8] mb-0 opacity-95">
            2025
          </h2>
          
          <div className="absolute -bottom-16 left-0 w-full h-[300px] bg-gradient-to-br from-morocco-green via-morocco-green/95 to-morocco-red rounded-xl shadow-2xl z-[-1]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-48 pointer-events-auto">
        <CountdownDisplay 
          title="AFCON 2025" 
          location="Morocco" 
          target={TARGET_2025_AFCON}
          trophyImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6u6m6MvR8X20B3ZkX6V5_x9G5Y_6Y8L6Z6g&s"
        />
        <CountdownDisplay 
          title="World Cup 2026" 
          location="North America" 
          target={TARGET_2026}
          trophyImg="https://static.vecteezy.com/system/resources/previews/008/785/663/non_2x/fifa-world-cup-symbol-trophy-logo-mondial-champion-gold-design-abstract-illustration-free-vector.jpg"
        />
        <CountdownDisplay 
          title="World Cup 2030" 
          location="Morocco & More" 
          target={TARGET_2030}
          trophyImg="https://static.vecteezy.com/system/resources/previews/008/785/663/non_2x/fifa-world-cup-symbol-trophy-logo-mondial-champion-gold-design-abstract-illustration-free-vector.jpg"
        />
      </div>
    </div>
  );
};
