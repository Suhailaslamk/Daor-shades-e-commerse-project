// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// export default function NotFound() {
//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-10 w-full max-w-lg text-center shadow-[0_0_40px_rgba(255,255,255,0.05)]"
//       >
//         <motion.h1
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="text-[6rem] leading-none font-extrabold text-slate-100 font-[Cinzel]"
//         >
//           404
//         </motion.h1>

//         <h2 className="text-2xl text-slate-200 font-semibold tracking-[0.2em] mb-4">
//           Page Not Found
//         </h2>

//         <p className="text-slate-400 mb-8">
//           The page you’re looking for doesn’t exist or has been moved.
//         </p>

//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <NavLink
//             to="/"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300"
//           >
//             <ArrowLeft size={18} />
//             Go Back Home
//           </NavLink>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }





import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 overflow-hidden relative">
      
      {/* BACKGROUND ACCENT - Subtle luxury grain/glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 flex flex-col items-center max-w-2xl"
      >
        {/* LARGE EDITORIAL NUMBER */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10rem] md:text-[14rem] leading-none font-serif italic text-white tracking-tighter select-none"
        >
          404
        </motion.h1>

        {/* CONTENT */}
        <div className="text-center -mt-8 md:-mt-12 space-y-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-zinc-500 font-bold"
          >
            Entry Not Found in Archive
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-zinc-400 text-sm md:text-base font-light max-w-xs mx-auto leading-relaxed italic font-serif"
          >
            The piece you are looking for has been moved or exists only in memory.
          </motion.p>
        </div>

        {/* ACTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <NavLink
            to="/"
            className="group flex flex-col items-center gap-4 transition-all duration-500"
          >
            {/* Minimalist Button */}
            <div className="flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full overflow-hidden relative transition-transform duration-300 group-hover:scale-105 active:scale-95">
               <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
               <span className="text-[10px] uppercase tracking-[0.4em] font-black">Return to Studio</span>
            </div>
            
            {/* Visual Underline Trace */}
            <div className="h-[1px] w-0 bg-white/20 group-hover:w-full transition-all duration-700" />
          </NavLink>
        </motion.div>
      </motion.div>

      {/* FOOTER DECOR - Corner Text */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <p className="text-[8px] uppercase tracking-[0.5em] text-zinc-700 select-none">Daor Atelier / System Error 00x404</p>
      </div>
      <div className="absolute bottom-10 right-10 hidden md:block">
        <p className="text-[8px] uppercase tracking-[0.5em] text-zinc-700 select-none">©2026 Established Selection</p>
      </div>
    </div>
  );
}