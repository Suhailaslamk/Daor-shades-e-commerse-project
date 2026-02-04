// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import { Lock, ArrowLeft } from "lucide-react";

// export default function Unauthorized() {
//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-10 w-full max-w-lg text-center shadow-[0_0_40px_rgba(255,255,255,0.05)]"
//       >
//         <Lock size={60} className="text-red-400 mx-auto mb-4" />
//         <h1 className="text-3xl font-[Cinzel] text-slate-100 mb-4">
//           Unauthorized Access
//         </h1>
//         <p className="text-slate-400 mb-6">
//           You don’t have permission to view this page.
//         </p>
//         <NavLink
//           to="/"
//           className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300"
//         >
//           <ArrowLeft size={18} />
//           Back to Home
//         </NavLink>
//       </motion.div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Lock, ArrowLeft } from "lucide-react";

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02)_0%,transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="relative z-10 w-full max-w-md flex flex-col items-center text-center"
      >
        {/* ICON - Minimalist & Refined */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-6 rounded-full border border-zinc-800 bg-zinc-950/50 relative group"
        >
          <Lock size={32} strokeWidth={1} className="text-zinc-500 group-hover:text-white transition-colors duration-500" />
          <div className="absolute inset-0 rounded-full bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>

        {/* CONTENT */}
        <header className="space-y-4 mb-12">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-serif italic tracking-tight text-white"
          >
            Restricted <span className="text-zinc-500 font-sans not-italic font-light tracking-widest uppercase text-xs block mt-2">Access Point</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-zinc-500 text-[11px] uppercase tracking-[0.3em] font-light leading-relaxed"
          >
            Credentials Required. Your current profile does not have clearance for this archive.
          </motion.p>
        </header>

        {/* ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full pt-6 border-t border-zinc-900"
        >
          <NavLink
            to="/"
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:pr-14 active:scale-95"
          >
            <ArrowLeft size={16} className="transition-transform duration-500 group-hover:-translate-x-1" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Return to Gallery</span>
            
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </NavLink>
        </motion.div>

        {/* Aesthetic Reference Code */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
          className="mt-12 text-[8px] font-mono text-zinc-600 tracking-[0.5em] uppercase"
        >
          Error Code: 403_ATELIER_PRIV
        </motion.span>
      </motion.div>

      {/* Frame Elements */}
      <div className="absolute top-10 left-10 w-20 h-[1px] bg-zinc-900" />
      <div className="absolute top-10 left-10 w-[1px] h-20 bg-zinc-900" />
      <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-zinc-900" />
      <div className="absolute bottom-10 right-10 w-[1px] h-20 bg-zinc-900" />
    </div>
  );
}


