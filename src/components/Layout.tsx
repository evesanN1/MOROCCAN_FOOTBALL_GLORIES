import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Crown, Trophy, Users, Star, History, Menu, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";
import { cn } from "../../lib/utils";

import { NextGloryModal } from "./NextGloryModal";

interface LayoutProps {
  children: React.ReactNode;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeCategory, onCategoryChange }) => {
  const navItems = [
    { id: "atlas-lions", label: "Atlas Lions", icon: Trophy },
    { id: "legends", label: "Football Legends", icon: Star },
    { id: "youth", label: "Youth Categories", icon: Users },
    { id: "clubs", label: "Moroccan Clubs", icon: History },
    { id: "records", label: "Records", icon: Crown },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-morocco-gold/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-b border-slate-200 z-50 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-morocco-red rounded-xl flex items-center justify-center shadow-lg shadow-morocco-red/20">
            <Crown className="text-morocco-gold w-7 h-7" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl tracking-tight text-slate-900">
              MOROCCAN <span className="text-morocco-red">FOOTBALL</span> GLORIES
            </h1>
            <p className="text-[10px] font-arabic italic text-slate-500 tracking-widest uppercase">
              تاريخ أمجاد الكرة المغربية
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">Heritage Status</span>
            <span className="text-xs font-bold text-morocco-green flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-morocco-green animate-pulse" />
              ROYAL LEGACY ACTIVE
            </span>
          </div>
          <Button variant="outline" size="icon" className="rounded-full border-slate-200">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Sidebar Left */}
      <aside className="fixed left-0 top-20 bottom-0 w-64 border-r border-slate-100 bg-white/50 hidden lg:block z-40">
        <ScrollArea className="h-full py-8 px-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onCategoryChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                  activeCategory === item.id 
                    ? "bg-morocco-red text-white shadow-lg shadow-morocco-red/20 moroccan-glaze" 
                    : "hover:bg-slate-50 text-slate-500 hover:text-slate-900"
                )}
              >
                {activeCategory === item.id && <div className="absolute inset-0 zellige-pattern opacity-10 mix-blend-overlay pointer-events-none" />}
                <item.icon className={cn("w-5 h-5 relative z-10", activeCategory === item.id ? "text-morocco-gold" : "text-slate-400 group-hover:text-morocco-red")} />
                <span className="font-medium text-sm relative z-10">{item.label}</span>
                {activeCategory === item.id && <ChevronRight className="ml-auto w-4 h-4 text-morocco-gold/50 relative z-10" />}
              </button>
            ))}
          </div>

          <div className="mt-12 px-4">
            <NextGloryModal>
              <button className="w-full text-left p-6 rounded-2xl bg-gradient-to-br from-morocco-green to-emerald-900 text-white relative overflow-hidden shadow-xl shadow-morocco-green/20 cursor-pointer hover:scale-[1.02] transition-transform moroccan-glaze focus:outline-none">
                <div className="absolute inset-0 zellige-pattern opacity-10 mix-blend-overlay" />
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 shadow-sm border border-slate-100/50 rotate-12">
                     <img src="https://static.vecteezy.com/system/resources/previews/008/785/663/non_2x/fifa-world-cup-symbol-trophy-logo-mondial-champion-gold-design-abstract-illustration-free-vector.jpg" alt="Trophy" className="w-full h-full object-contain mix-blend-multiply rounded-full" />
                  </div>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-morocco-gold mb-2 relative z-10">Next Glory</h3>
                <p className="text-sm font-medium leading-relaxed relative z-10">World Cup 2026 & 2030</p>
                <div className="mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden relative z-10">
                  <motion.div 
                    className="h-full bg-morocco-gold" 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
              </button>
            </NextGloryModal>
          </div>
        </ScrollArea>
      </aside>

      {/* Main Content Area */}
      <main className="lg:pl-64 pt-20 pb-32 min-h-screen relative z-10">
        {children}
      </main>

      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] zellige-pattern" />
    </div>
  );
};
