import { useEffect, useState } from "react";
import api from "../../../api/api";

export default function CategoryForm({ editing, onSuccess }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editing) setName(editing.name);
  }, [editing]);

  const submit = async e => {
    e.preventDefault();
    setError("");

    try {
      if (editing) {
        await api.put("/admin/categories", {
          categoryId: editing.id,
          name
        });
      } else {
        await api.post("/admin/categories", { name });
      }

      setName("");
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || "Failed");
    }
  };

  return (
  <form onSubmit={submit} className="relative space-y-8">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="space-y-1">
        <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">
          {editing ? "Refinement Mode" : "New Classification"}
        </h3>
        <p className="text-xl md:text-2xl font-serif italic text-white">
          {editing ? `Modify: ${editing.name}` : "Establish Category"}
        </p>
      </div>
      
      {editing && (
        <button 
          type="button"
          onClick={() => {
            setName("");
            onSuccess(); // Triggers the clear/reset in parent
          }}
          className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-colors"
        >
          Discard Changes
        </button>
      )}
    </div>

    <div className="relative group">
      <input
        autoFocus
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter identifier..."
        className="w-full bg-transparent border-b border-zinc-800 text-white py-4 text-lg md:text-xl font-light tracking-wide placeholder:text-zinc-800 outline-none focus:border-white transition-all duration-700"
      />
      {/* Animated underline */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-focus-within:w-full transition-all duration-1000 ease-out"></div>
    </div>

    <div className="flex flex-col md:flex-row md:items-center gap-6 pt-4">
      <button
        type="submit"
        className="bg-white text-black px-10 py-4 rounded-full text-[10px] uppercase font-black tracking-[0.3em] hover:bg-zinc-200 transition-all duration-300 active:scale-95 shadow-xl"
      >
        {editing ? "Commit Update" : "Index Category"}
      </button>

      {error && (
        <motion.p 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-rose-500 text-[9px] uppercase tracking-[0.2em] font-bold flex items-center gap-2"
        >
          <span className="h-1 w-1 bg-rose-500 rounded-full animate-pulse"></span>
          {error}
        </motion.p>
      )}
    </div>

    {/* Subtle design element */}
    <div className="pt-8 opacity-5 select-none pointer-events-none border-t border-zinc-800">
      <p className="text-[40px] font-black tracking-tighter uppercase leading-none">
        Registry Entry Auto-Save Enabled
      </p>
    </div>
  </form>
);
}