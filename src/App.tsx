/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Layout } from "./components/Layout";
import { Stadium3D } from "./components/Stadium3D";
import { SidebarRight } from "./components/SidebarRight";
import { Timeline } from "./components/Timeline";
import { Legends } from "./components/Legends";
import { YouthCategories } from "./components/YouthCategories";
import { MoroccanClubs } from "./components/MoroccanClubs";
import { Records } from "./components/Records";
import { NextGlory } from "./components/NextGlory";
import { TROPHY_ERAS, TrophyEra } from "./data";
import { motion, AnimatePresence } from "motion/react";

import { LegacyArchiveModal } from "./components/LegacyArchiveModal";
import { ProfileModal } from "./components/ProfileModal";
import { StadiumLayoutModal } from "./components/StadiumLayoutModal";
import { Jersey } from "./components/Jersey";

export default function App() {
  const [activeEra, setActiveEra] = useState<TrophyEra>(TROPHY_ERAS[0]);
  const [activeCategory, setActiveCategory] = useState("atlas-lions");

  const renderContent = () => {
    switch (activeCategory) {
      case "legends":
        return <Legends />;
      case "youth":
        return <YouthCategories />;
      case "clubs":
        return <MoroccanClubs />;
      case "records":
        return <Records />;
      case "next-glory":
        return <NextGlory />;
      case "atlas-lions":
      default:
        return (
          <>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 xl:pr-80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEra.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-12"
                >
                  {/* Hero Section */}
                  <section className="relative">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-12">
                      <div className="flex-1 max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-[1px] w-12 bg-morocco-gold" />
                          <span className="text-xs font-bold text-morocco-gold uppercase tracking-[0.3em]">Historical Milestone</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 tracking-tighter leading-[1.1] mb-6">
                          {activeEra.year} <br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-morocco-red to-morocco-green">
                            {activeEra.title}
                          </span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-serif italic mb-8">
                          {activeEra.description}
                        </p>
                        
                        <StadiumLayoutModal era={activeEra}>
                          <button className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all hover:scale-105 focus:outline-none shadow-xl shadow-slate-900/20">
                            <span className="text-sm font-bold uppercase tracking-widest">Explore Era</span>
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-morocco-gold rounded-full" />
                            </div>
                          </button>
                        </StadiumLayoutModal>
                      </div>

                      {/* Trophy & Jersey Showcase */}
                      <div className="shrink-0 relative flex items-center justify-center w-full lg:w-auto mt-8 lg:mt-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-morocco-red/10 to-morocco-green/10 rounded-full blur-3xl" />
                        <div className="relative flex items-center p-8 bg-[#bfccb7] backdrop-blur-xl border border-white/60 rounded-[3rem] shadow-2xl">
                          {activeEra.trophyImage && (
                            <motion.div
                              key={`trophy-${activeEra.id}`}
                              initial={{ opacity: 0, scale: 0.8, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ type: "spring", stiffness: 200, damping: 20 }}
                              className="w-[225px] h-[223px] bg-white rounded-full flex items-center justify-center p-4 shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-20 border-4 border-white"
                            >
                              <img 
                                src={activeEra.trophyImage} 
                                alt="Trophy" 
                                className="w-full h-full object-contain mix-blend-multiply drop-shadow-md rounded-full border-solid border-2 border-slate-100"
                              />
                            </motion.div>
                          )}

                        </div>
                      </div>
                    </div>

                    {/* Interactive Stadium */}
                    <StadiumLayoutModal era={activeEra}>
                      <button className="w-full cursor-pointer hover:scale-[1.01] transition-transform focus:outline-none text-left block">
                        <Stadium3D era={activeEra} />
                      </button>
                    </StadiumLayoutModal>
                  </section>

                  {/* Additional Info Grid */}
                  <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                          <h1 className="text-9xl font-display font-bold">{activeEra.year}</h1>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                          <div className="w-2 h-8 bg-morocco-red rounded-full" />
                          Squad Composition
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {activeEra.squad.map((player, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
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
                                    <img src={player.image} alt={player.name} className="w-12 h-12 rounded-xl object-cover object-top shadow-sm" />
                                  ) : (
                                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-morocco-red text-xs">
                                      {player.position}
                                    </div>
                                  )}
                                  {player.number && (
                                    <div className="absolute -bottom-2 -right-2 transform translate-x-1 translate-y-1">
                                      <Jersey number={player.number} isGoalkeeper={player.position === "GK"} className="w-8 h-8 filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]" />
                                    </div>
                                  )}
                                </button>
                              </ProfileModal>
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="font-bold text-sm text-slate-900">{player.name}</p>
                                  <span className="text-[10px] font-bold text-morocco-red bg-morocco-red/10 px-2 py-0.5 rounded-full">{player.position}</span>
                                </div>
                                <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5 mb-1">{player.stats}</p>
                                {player.description && <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 md:line-clamp-3">{player.description}</p>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden moroccan-glaze">
                        <div className="absolute inset-0 zellige-pattern opacity-10 mix-blend-overlay" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-morocco-gold/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 relative z-10">
                          <div className="w-1.5 h-1.5 rounded-full bg-morocco-gold" />
                          Legacy Impact
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed relative z-10">
                          This era redefined Moroccan football, inspiring generations of young athletes and establishing the nation as a global powerhouse.
                        </p>
                        <LegacyArchiveModal era={activeEra}>
                          <button className="mt-8 w-full py-4 bg-morocco-gold text-slate-900 font-bold rounded-2xl hover:bg-morocco-gold-light transition-colors text-sm uppercase tracking-widest relative z-10">
                            View Full Archive
                          </button>
                        </LegacyArchiveModal>
                      </div>
                    </div>
                  </section>
                </motion.div>
              </AnimatePresence>
            </div>

            <SidebarRight era={activeEra} />
            <Timeline activeEraId={activeEra.id} onEraChange={setActiveEra} />
          </>
        );
    }
  };

  return (
    <Layout activeCategory={activeCategory} onCategoryChange={setActiveCategory}>
      {renderContent()}
    </Layout>
  );
}

