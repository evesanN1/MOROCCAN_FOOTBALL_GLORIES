import React, { useState, useEffect } from "react";
import { Trophy, Calendar, MapPin, Shield } from "lucide-react";
import { motion } from "motion/react";

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

const CountdownDisplay = ({ target, title, location, opponent, trophyImg, description }: { target: number, title: string, location: string, opponent?: string, trophyImg: string, description: string }) => {
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 relative overflow-hidden group shadow-sm">
      <div className="absolute inset-0 zellige-pattern opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-morocco-gold" />
            <span className="text-xs font-bold text-morocco-gold uppercase tracking-[0.3em]">Future Vision</span>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tighter mb-4 flex items-center gap-4">
            <Calendar className="w-10 h-10 text-morocco-red" />
            {title}
          </h3>
          
          <p className="text-lg text-slate-500 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            {location}
          </p>
          
          <p className="text-slate-600 leading-relaxed font-serif italic mb-8 max-w-xl">
            {description}
          </p>

          {opponent && (
            <div className="mb-8 flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 w-fit">
              <Shield className="w-6 h-6 text-morocco-green" />
              <span className="text-base font-bold text-slate-700">Next Match: <span className="text-morocco-red">{opponent}</span></span>
            </div>
          )}

          <div className="grid grid-cols-4 gap-6">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: minutes },
              { label: "Seconds", value: seconds },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-slate-50 py-6 px-4 rounded-3xl border border-slate-100 shadow-sm">
                <span className="text-4xl font-bold text-morocco-green font-mono">{item.value.toString().padStart(2, '0')}</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium mt-2">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-morocco-red/20 to-morocco-green/20 rounded-full blur-3xl" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center p-8 shadow-2xl border-4 border-slate-50">
            <img src={trophyImg} alt="Trophy" className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const NextGlory = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="mb-16">
        <h2 className="text-6xl font-display font-extrabold text-slate-900 tracking-tighter leading-tight mb-4">
          CHASING <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-morocco-red to-morocco-green">THE NEXT FRONTIER</span>
        </h2>
        <p className="text-xl text-slate-500 font-serif italic max-w-2xl">
          The path ahead for the Atlas Lions is paved with ambition. From hosting the world to conquering new stages, the journey continues.
        </p>
      </div>

      <div className="space-y-12">
        <CountdownDisplay 
          title="AFCON 2025" 
          location="Kingdom of Morocco" 
          target={TARGET_2025_AFCON}
          description="Morocco hosts the 35th edition of the Africa Cup of Nations. The Atlas Lions look to secure their second continental title on home soil, fueled by the passion of millions."
          trophyImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6u6m6MvR8X20B3ZkX6V5_x9G5Y_6Y8L6Z6g&s"
        />

        <CountdownDisplay 
          title="FIFA World Cup 2026™" 
          location="USA, Canada & Mexico" 
          target={TARGET_2026}
          opponent="TBD (Group Stage)"
          description="Following a historic semi-final run in Qatar, the Atlas Lions return to the world stage aiming to surpass their previous achievements in the first 48-team World Cup."
          trophyImg="https://static.vecteezy.com/system/resources/previews/008/785/663/non_2x/fifa-world-cup-symbol-trophy-logo-mondial-champion-gold-design-abstract-illustration-free-vector.jpg"
        />
        
        <CountdownDisplay 
          title="FIFA World Cup 2030™" 
          location="Morocco, Spain & Portugal" 
          target={TARGET_2030}
          description="A historic joint-hosting that brings the World Cup to Moroccan soil for the first time in history. A celebration of football, culture, and unity across two continents."
          trophyImg="https://static.vecteezy.com/system/resources/previews/008/785/663/non_2x/fifa-world-cup-symbol-trophy-logo-mondial-champion-gold-design-abstract-illustration-free-vector.jpg"
        />
      </div>
    </div>
  );
};
