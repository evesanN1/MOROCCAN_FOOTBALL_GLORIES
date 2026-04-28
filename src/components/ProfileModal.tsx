import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Calendar, User } from "lucide-react";
import { Jersey } from "./Jersey";

interface ProfileModalProps {
  children: React.ReactElement;
  name: string;
  role: string;
  image?: string | string[];
  description?: string;
  joinedYear?: string;
  number?: number;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ children, name, role, image, description, joinedYear, number }) => {
  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-display font-bold text-slate-900 flex items-center gap-3">
            <User className="w-5 h-5 text-morocco-red" />
            Player Profile
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 flex flex-col items-center text-center">
                    <div className="relative inline-block">
            {Array.isArray(image) ? (
              <div className="flex justify-center gap-4 mb-4">
                {image.map((img, i) => (
                  <img 
                    key={i}
                    src={img} 
                    alt={name} 
                    className="w-24 h-24 rounded-full object-cover object-top border-4 border-slate-100 shadow-md"
                  />
                ))}
              </div>
            ) : image ? (
              <img 
                src={image} 
                alt={name} 
                className="w-32 h-32 rounded-full object-cover object-top border-4 border-slate-100 shadow-md mb-4"
              />
            ) : (
              <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center font-bold text-morocco-red text-2xl mb-4 shadow-md">
                {name.charAt(0)}
              </div>
            )}
            
            {number && (
               <div className="absolute -bottom-4 -right-4 z-20">
                 <Jersey number={number} isGoalkeeper={role === "GK"} className="w-16 h-16 drop-shadow-lg filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]" />
               </div>
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
          <p className="text-sm font-bold text-morocco-green uppercase tracking-widest mt-1 mb-6 flex items-center gap-2 justify-center">
            {role}
          </p>
          
          <div className="bg-slate-50 rounded-2xl p-6 w-full border border-slate-100 text-left space-y-4 relative overflow-hidden moroccan-glaze">
            <div className="absolute inset-0 zellige-pattern opacity-[0.03] mix-blend-overlay pointer-events-none" />
            <div className="relative z-10">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">About</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {description || "A legendary figure in Moroccan football history, contributing significantly to the nation's success on the international stage."}
              </p>
            </div>
            
            <div className="flex items-center gap-2 pt-4 border-t border-slate-200 relative z-10">
              <Calendar className="w-4 h-4 text-morocco-gold" />
              <span className="text-sm font-medium text-slate-600">
                Joined National Team: <span className="font-bold text-slate-900">{joinedYear || "Unknown"}</span>
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
