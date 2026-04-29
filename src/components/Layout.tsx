import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Crown, Trophy, Users, Star, History, Menu, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";
import { cn } from "../../lib/utils";

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

          <div className="mt-12 px-4" />
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
