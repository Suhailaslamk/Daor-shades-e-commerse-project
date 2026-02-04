import { Ban } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Blocked() {
    const navigate = useNavigate()
  return (
  <div className="min-h-screen flex items-center justify-center bg-black px-6 relative overflow-hidden">
    
    {/* Background Texture/Grain */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-lg w-full text-center relative z-10"
    >
      {/* ICON - Minimalist & Serious */}
      <div className="mb-10 relative inline-block">
        <div className="absolute inset-0 blur-2xl bg-rose-500/10 rounded-full" />
        <div className="relative border border-zinc-800 p-8 rounded-full bg-black">
          <Ban className="text-zinc-400 group-hover:text-rose-500 transition-colors" size={32} strokeWidth={1} />
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="space-y-6 mb-12">
        <header>
          <span className="text-[10px] uppercase tracking-[0.5em] text-rose-500 font-bold block mb-4">
            Security Protocol
          </span>
          <h1 className="text-4xl md:text-5xl font-serif italic tracking-tight text-white">
            Access <span className="text-zinc-500">Suspended</span>
          </h1>
        </header>

        <div className="h-[1px] w-12 bg-zinc-800 mx-auto" />

        <p className="text-zinc-500 text-[11px] md:text-xs uppercase tracking-[0.2em] leading-relaxed max-w-sm mx-auto">
          Your account has been deactivated by the Atelier administration. 
          For restoration inquiries, please reach out to our concierge.
        </p>
      </div>

      {/* ACTION BUTTON */}
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => {
            localStorage.removeItem("accessToken");
            // window.location.href = "/login";
             navigate("/login");
          }}
          className="group relative px-12 py-5 bg-white text-black rounded-full overflow-hidden transition-all duration-500 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
        >
          <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-black">
            Return to Login
          </span>
          <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>

        <a 
          href="mailto:support@daor.com" 
          className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-zinc-700 pb-1"
        >
          Contact Concierge
        </a>
      </div>
    </motion.div>

    {/* DESIGN DECOR - Vertical Label */}
    <div className="absolute left-10 bottom-10 hidden md:block origin-left -rotate-90">
      <p className="text-[8px] uppercase tracking-[0.5em] text-zinc-800">Status: Terminal_Inactive</p>
    </div>
  </div>
);
}
