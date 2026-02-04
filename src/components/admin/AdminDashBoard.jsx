

import { useState } from "react";
import { Menu, X, LayoutDashboard, Package, Users, ShoppingCart, ArrowLeft } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  
  const linkStyles = ({ isActive }) => `
  flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-500 group
  ${isActive 
    ? "bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.1)]" 
    : "text-zinc-500 hover:text-white hover:bg-zinc-900"
  }
`;

  return (
  <div className="min-h-screen bg-black text-zinc-100 flex flex-col md:flex-row overflow-x-hidden selection:bg-white selection:text-black font-sans">
    
    {/* --- Mobile Header --- */}
    <header className="md:hidden sticky top-0 z-[60] flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-zinc-900 px-6 py-5">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        <h2 className="text-sm font-serif italic tracking-[0.3em] text-white">DAOR / ADMIN</h2>
      </div>
      <button 
        onClick={toggleSidebar} 
        className="p-2 text-zinc-400 hover:text-white transition-colors"
      >
        {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
      </button>
    </header>

    {/* --- Sidebar --- */}
    <aside
      className={`
        fixed top-0 left-0 h-screen w-72 z-50
        bg-black border-r border-zinc-900
        flex flex-col transform transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0
      `}
    >
      {/* Sidebar Brand Logo */}
      <div className="p-10 mb-6">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 font-bold mb-2">Management</h2>
        <h1 className="text-2xl font-serif italic tracking-tighter text-white">
          Atelier <span className="text-zinc-600">Control</span>
        </h1>
      </div>

      <nav className="flex flex-col gap-1 px-4 flex-1">
        <NavLink to="/admin" end className={linkStyles} onClick={() => setIsOpen(false)}>
          <LayoutDashboard size={18} strokeWidth={1.5} />
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Overview</span>
        </NavLink>

        <NavLink to="/admin/products" className={linkStyles} onClick={() => setIsOpen(false)}>
          <Package size={18} strokeWidth={1.5} />
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Catalog</span>
        </NavLink>

        <NavLink to="/admin/users" className={linkStyles} onClick={() => setIsOpen(false)}>
          <Users size={18} strokeWidth={1.5} />
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Clients</span>
        </NavLink>

        <NavLink to="/admin/orders" className={linkStyles} onClick={() => setIsOpen(false)}>
          <ShoppingCart size={18} strokeWidth={1.5} />
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Orders</span>
        </NavLink>
        <NavLink to="/admin/categories" className={linkStyles} onClick={() => setIsOpen(false)}>
          <Users size={18} strokeWidth={1.5} />
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Category</span>
        </NavLink>
        {/* Space Filler */}
        <div className="flex-1" />

        {/* Footer Link */}
        <div className="mb-10 px-2">
          <NavLink 
            to="/" 
            className="flex items-center gap-4 px-6 py-4 rounded-full text-zinc-500 hover:text-white transition-all group" 
            onClick={() => setIsOpen(false)}
          >
            <ArrowLeft size={18} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold">Exit Studio</span>
          </NavLink>
        </div>
      </nav>
    </aside>

    {/* --- Main Content Area --- */}
    <main className="flex-1 min-h-screen transition-all duration-500 md:ml-72 bg-black relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-900/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      {/* Header Info Bar (Desktop) */}
      <div className="hidden md:flex justify-end items-center px-12 py-6 border-b border-zinc-900/50">
         <div className="flex items-center gap-6">
            <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-500">System Status: <span className="text-emerald-500">Online</span></span>
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] text-white">AD</div>
         </div>
      </div>

      <div className="p-8 md:p-14 max-w-7xl mx-auto">
        <Outlet />
      </div>
    </main>

    {/* --- Mobile Overlay --- */}
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md md:hidden z-40"
        onClick={() => setIsOpen(false)}
      />
    )}
  </div>
);
}
