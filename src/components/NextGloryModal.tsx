import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Trophy, Calendar, MapPin, Shield } from "lucide-react";

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

const CountdownDisplay = ({ target, title, location, opponent, trophyImg }: { target: number, title: string, location: string, opponent?: string, trophyImg: string }) => {
  const { days, hours, minutes, seconds } = useCountdown(target);

  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative overflow-hidden moroccan-glaze">
      <div className="absolute inset-0 zellige-pattern opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 p-4 opacity-30">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center p-2 shadow-sm border border-slate-100/50">
    <img src={trophyImg} alt="Trophy" className="w-full h-full object-contain mix-blend-multiply rounded-full" />
  </div>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2 relative z-10">
        <Calendar className="w-5 h-5 text-morocco-red" />
        {title}
      </h3>
      <p className="text-sm text-slate-500 mb-6 flex items-center gap-2 relative z-10">
        <MapPin className="w-4 h-4" />
        {location}
      </p>

      {opponent && (
        <div className="mb-6 flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 w-fit relative z-10">
          <Shield className="w-5 h-5 text-morocco-green" />
          <span className="text-sm font-bold text-slate-700">Next Match: <span className="text-morocco-red">{opponent}</span></span>
        </div>
      )}

      <div className="grid grid-cols-4 gap-4 relative z-10">
        {[
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center bg-white py-3 rounded-xl border border-slate-100 shadow-sm">
            <span className="text-2xl font-bold text-morocco-green font-mono">{item.value.toString().padStart(2, '0')}</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const NextGloryModal = ({ children }: { children: React.ReactElement }) => {
  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-slate-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
    <img src="https://static.vecteezy.com/system/resources/previews/008/785/663/non_2x/fifa-world-cup-symbol-trophy-logo-mondial-champion-gold-design-abstract-illustration-free-vector.jpg" alt="World Cup" className="w-8 h-8 object-contain mix-blend-multiply" />
  </div>
            The Next Glory
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <CountdownDisplay 
            title="FIFA World Cup 2026™" 
            location="USA, Canada & Mexico" 
            target={TARGET_2026}
            opponent="TBD (Group Stage)"
            trophyImg="https://static.vecteezy.com/system/resources/previews/008/785/663/non_2x/fifa-world-cup-symbol-trophy-logo-mondial-champion-gold-design-abstract-illustration-free-vector.jpg"
          />
          
          <CountdownDisplay 
            title="FIFA World Cup 2030™" 
            location="Morocco, Spain & Portugal" 
            target={TARGET_2030}
            trophyImg="https://static.vecteezy.com/system/resources/previews/008/785/663/non_2x/fifa-world-cup-symbol-trophy-logo-mondial-champion-gold-design-abstract-illustration-free-vector.jpg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
