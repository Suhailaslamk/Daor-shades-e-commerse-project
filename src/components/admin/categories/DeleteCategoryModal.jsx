import api from "../../../api/api";
import { motion, AnimatePresence } from "framer-motion";
export default function DeleteCategoryModal({ category, onClose, onDeleted }) {
  const handleDelete = async () => {
    try {
      await api.delete(`/admin/categories/${category.id}`);
      onDeleted();
      onClose();
    } catch (err) {
      alert(err.response?.data?.message || "Cannot delete category");
    }
  };

  return (
  <AnimatePresence>
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop with sophisticated blur */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-zinc-950 border border-zinc-800 p-8 md:p-12 rounded-[2.5rem] w-full max-w-md shadow-2xl overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none">
          <span className="text-9xl font-serif italic font-black">!</span>
        </div>

        <div className="relative space-y-8">
          <div className="space-y-2">
            <h3 className="text-[10px] uppercase tracking-[0.5em] font-black text-rose-500">
              Irreversible Action
            </h3>
            <h2 className="text-3xl font-serif italic text-white tracking-tight">
              Delete Collection?
            </h2>
          </div>

          <p className="text-zinc-500 text-sm leading-relaxed tracking-wide">
            You are about to remove <span className="text-white font-bold italic underline decoration-zinc-800 underline-offset-4 tracking-normal">"{category.name}"</span> from the global registry. This will affect all associated content logic.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button
              onClick={handleDelete}
              className="w-full sm:w-auto bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full text-[10px] uppercase font-black tracking-[0.3em] transition-all duration-300 active:scale-95 shadow-lg shadow-rose-900/20"
            >
              Confirm Deletion
            </button>
            
            <button 
              onClick={onClose} 
              className="w-full sm:w-auto px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500 hover:text-white transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="mt-12 pt-6 border-t border-zinc-900 flex justify-between items-center opacity-40">
          <span className="text-[8px] uppercase tracking-widest text-zinc-600">Secure Registry v2.0</span>
          <div className="h-1 w-1 bg-rose-500 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  </AnimatePresence>
);
}