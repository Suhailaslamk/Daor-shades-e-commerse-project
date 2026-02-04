// import { Bell, X } from "lucide-react";
// import { useNotifications } from "../../hooks/useNotification";
// import { toast } from "react-toastify";
// import { useEffect, useState } from "react";
// import { AnimatePresence ,motion} from "framer-motion";

// export default function NotificationBell() {
//   const { notifications, markAsRead } = useNotifications();
//   const [open, setOpen] = useState(false);

//   const unread = notifications.filter(n => !n.isRead).length;
//    useEffect(() => {
//   notifications
//     .filter(n => !n.isRead)
//     .forEach(n => toast.info(n.title));
// }, [notifications]);



// return (
//   <div className="relative">
//     {/* TRIGGER - Minimalist & Transparent */}
//     <button 
//       onClick={() => setOpen(o => !o)} 
//       className="relative p-2 text-zinc-400 hover:text-white transition-all duration-500 group"
//     >
//       <Bell size={18} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
//       {unread > 0 && (
//         <span className="absolute top-2 right-2 flex h-1.5 w-1.5">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
//           <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
//         </span>
//       )}
//     </button>

//     <AnimatePresence>
//       {open && (
//         <>
//           {/* Backshade for focus */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setOpen(false)}
//             className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px]" 
//           />

//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 10 }}
//             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//             className={`
//               fixed top-0 right-0 h-screen z-[100]
//               w-full sm:w-[400px] 
//               bg-black border-l border-zinc-800 shadow-[20px_0_60px_rgba(0,0,0,0.8)]
//               flex flex-col
//             `}
//           >
//             {/* Header - Technical Style */}
//             <div className="px-8 py-10 border-b border-zinc-900 flex justify-between items-center">
//               <div className="space-y-1">
//                 <h3 className="text-[10px] uppercase tracking-[0.6em] font-black text-white">System Logs</h3>
//                 <p className="text-[8px] uppercase tracking-[0.2em] text-zinc-500 font-mono">Archive Access // 2026</p>
//               </div>
//               <button 
//                 onClick={() => setOpen(false)}
//                 className="p-2 text-zinc-500 hover:text-white transition-colors"
//               >
//                 <X size={20} strokeWidth={1} />
//               </button>
//             </div>

//             {/* List Area - Scoped scrolling */}
//             <div className="flex-1 overflow-y-auto no-scrollbar bg-black px-2">
//               {notifications.length === 0 ? (
//                 <div className="h-full flex flex-col items-center justify-center opacity-20">
//                   <div className="w-[1px] h-12 bg-white mb-6" />
//                   <p className="text-[9px] uppercase tracking-[0.4em] text-white font-bold">No Entries Found</p>
//                 </div>
//               ) : (
//                 notifications.map((n, index) => (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     key={n.id}
//                     onClick={() => {
//                       markAsRead(n.id);
//                       if (window.innerWidth < 768) setOpen(false);
//                     }}
//                     className={`relative p-8 transition-all duration-700 cursor-pointer border-b border-zinc-900/50 group ${
//                       n.isRead ? "opacity-30 hover:opacity-100" : "bg-white/[0.02]"
//                     }`}
//                   >
//                     {/* Active Indicator Line */}
//                     {!n.isRead && (
//                       <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white" />
//                     )}

//                     <div className="space-y-3">
//                       <div className="flex justify-between items-start gap-4">
//                         <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-tighter">
//                           ID: {n.id.slice(-6).toUpperCase()}
//                         </span>
//                         <span className="text-[8px] font-mono text-zinc-600">
//                           {new Date(n.createdAt).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}
//                         </span>
//                       </div>
                      
//                       <div className="space-y-1">
//                         <p className={`text-[11px] uppercase tracking-[0.2em] font-black leading-tight ${n.isRead ? "text-zinc-500" : "text-white"}`}>
//                           {n.title}
//                         </p>
//                         <p className="text-[11px] text-zinc-500 leading-relaxed font-light font-serif italic">
//                           {n.message}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Technical Decor */}
//                     <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <div className="h-[1px] w-full bg-zinc-800" />
//                       <p className="text-[7px] text-zinc-600 pt-2 uppercase tracking-widest">Mark as Resolved →</p>
//                     </div>
//                   </motion.div>
//                 ))
//               )}
//             </div>

//             {/* Footer - Utility Bar */}
//             <div className="p-8 border-t border-zinc-900 bg-zinc-950/50">
//               <button className="group w-full flex items-center justify-between">
//                 <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 group-hover:text-white transition-colors font-black">
//                   Clear All History
//                 </span>
//                 <div className="h-[1px] w-8 bg-zinc-800 group-hover:w-12 group-hover:bg-white transition-all" />
//               </button>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   </div>
// );
// }











import { Bell, X, ShieldCheck, Zap, Info } from "lucide-react";
import { useNotifications } from "../../hooks/useNotification";
import { toast } from "react-toastify";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function NotificationBell() {
  const { notifications, markAsRead, clearAll } = useNotifications();
  const [open, setOpen] = useState(false);
  const lastNotifiedId = useRef(null);

  const unread = notifications.filter(n => !n.isRead).length;

  // Optimized Toast: Only notify for the most recent unread message
  useEffect(() => {
    const latest = notifications.filter(n => !n.isRead)[0];
    if (latest && latest.id !== lastNotifiedId.current) {
      toast.dark(latest.title, {
        icon: <Zap size={14} className="text-white" />,
        style: { background: '#000', color: '#fff', fontSize: '10px', letterSpacing: '0.2em', borderRadius: '0' }
      });
      lastNotifiedId.current = latest.id;
    }
  }, [notifications]);

  return (
    <div className="relative">
      {/* TRIGGER */}
      <button 
        onClick={() => setOpen(o => !o)} 
        className="relative p-2 text-zinc-400 hover:text-white transition-all duration-500 group"
      >
        <Bell size={18} strokeWidth={1} className="group-hover:rotate-12 transition-transform" />
        {unread > 0 && (
          <span className="absolute top-2 right-2 flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-[4px]" 
            />

            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen z-[100] w-full sm:w-[450px] bg-black border-l border-zinc-900 shadow-2xl flex flex-col"
            >
              {/* HEADER */}
              <div className="px-10 py-12 border-b border-zinc-900 flex justify-between items-center">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    <h3 className="text-[10px] uppercase tracking-[0.6em] font-black text-white">System Archive</h3>
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-mono">Terminal Active // {unread} Pending</p>
                </div>
                <button 
                  onClick={() => setOpen(false)}
                  className="p-2 text-zinc-500 hover:text-white hover:rotate-90 transition-all duration-300"
                >
                  <X size={22} strokeWidth={1} />
                </button>
              </div>

              {/* LOG LIST */}
              <div className="flex-1 overflow-y-auto no-scrollbar py-4">
                {notifications.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-20">
                    <ShieldCheck size={40} strokeWidth={0.5} className="text-white" />
                    <p className="text-[9px] uppercase tracking-[0.5em] text-white">Registry Clear</p>
                  </div>
                ) : (
                  notifications.map((n, index) => (
                    <motion.div
                      key={n.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => markAsRead(n.id)}
                      className={`relative p-10 border-b border-zinc-900/50 cursor-pointer group transition-all duration-500 ${
                        n.isRead ? "opacity-20 grayscale" : "bg-white/[0.01]"
                      }`}
                    >
                      {/* Interactive indicator */}
                      {!n.isRead && (
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                      )}

                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase">
                            Ref_No: {String(n.id).slice(-8)}
                          </span>
                          <div className="flex items-center gap-2">
                            <div className={`h-1 w-1 rounded-full ${n.isRead ? 'bg-zinc-800' : 'bg-white'}`} />
                            <span className="text-[8px] font-mono text-zinc-500">
                              {new Date(n.createdAt).toLocaleTimeString([], { hour12: false })}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className={`text-[12px] uppercase tracking-[0.2em] font-black transition-colors ${n.isRead ? 'text-zinc-600' : 'text-white'}`}>
                            {n.title}
                          </h4>
                          <p className="text-[11px] text-zinc-500 leading-relaxed font-light italic font-serif">
                            {n.message}
                          </p>
                        </div>

                        {/* Hover Action Label */}
                        {!n.isRead && (
                          <div className="pt-2 overflow-hidden h-0 group-hover:h-6 transition-all duration-500">
                            <p className="text-[8px] uppercase tracking-[0.4em] text-white font-bold">
                              Click to Archive Entry →
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* FOOTER */}
              <div className="p-10 border-t border-zinc-900 bg-[#050505]">
                <button 
                  onClick={clearAll}
                  className="w-full flex justify-between items-center group overflow-hidden"
                >
                  <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 group-hover:text-white transition-all">
                    Purge All Records
                  </span>
                  <div className="flex items-center">
                    <div className="h-[1px] w-0 bg-white group-hover:w-12 transition-all duration-700" />
                    <Zap size={12} className="text-zinc-500 group-hover:text-white ml-2" />
                  </div>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}