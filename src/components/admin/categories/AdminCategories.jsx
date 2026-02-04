
import { useEffect, useState , } from "react";
import api from "../../../api/api";
import CategoryForm from "./CategoryForm";
import DeleteCategoryModal from "./DeleteCategoryModal";

export default function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await api.get("/admin/categories");
      setCategories(res.data.data || []);
    } catch {
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);



return (
  <div className="min-h-screen bg-black text-white px-6 py-12 md:py-24 flex flex-col items-center md:ml-14 selection:bg-white selection:text-black antialiased">
    <div className="max-w-4xl w-full space-y-20">
      
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900 pb-12">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-serif italic tracking-tighter">
            Taxonomy <span className="text-zinc-600">& Logic</span>
          </h2>
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-12 bg-zinc-800"></span>
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">
              Classification Registry
            </p>
          </div>
        </div>
      </header>

      {/* Form Section - Integrated Card */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-transparent rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
        <div className="relative bg-zinc-950 border border-zinc-900 rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="text-7xl font-serif italic font-black text-white select-none">01</span>
          </div>
          <CategoryForm
            editing={editing}
            onSuccess={() => {
              setEditing(null);
              fetchCategories();
            }}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-black">Active Collections</p>
          <span className="h-[1px] flex-grow mx-6 bg-zinc-900"></span>
          <p className="text-[10px] font-mono text-zinc-700">{categories.length.toString().padStart(2, '0')}</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-6">
            <div className="w-12 h-12 border border-zinc-900 border-t-white rounded-full animate-spin"></div>
            <p className="text-[9px] uppercase tracking-[0.5em] text-zinc-600 italic">Syncing Index</p>
          </div>
        ) : (
          <div className="space-y-3">
            {categories.map((c) => (
              <div 
                key={c.id} 
                className="group flex items-center justify-between bg-zinc-950/40 border border-zinc-900 p-6 md:p-8 rounded-[2rem] hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-500"
              >
                <div className="flex items-center gap-6">
                   <div className="h-10 w-10 flex items-center justify-center rounded-full border border-zinc-900 bg-black group-hover:border-zinc-500 transition-colors duration-500">
                     <div className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                   </div>
                   <span className="text-[13px] md:text-[15px] uppercase tracking-[0.2em] font-black group-hover:translate-x-1 transition-transform duration-500">
                    {c.name}
                  </span>
                  
                </div>

                <div className="flex items-center gap-2">
                    <button
                    
                    className="px-6 py-2.5 text-[9px] uppercase tracking-[0.3em] font-black text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-full transition-all duration-300 border border-transparent hover:border-zinc-700"
                  >
                    {c.id}
                  </button>
                  <button
                    onClick={() => setEditing(c)}
                    className="px-6 py-2.5 text-[9px] uppercase tracking-[0.3em] font-black text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-full transition-all duration-300 border border-transparent hover:border-zinc-700"
                  >
                    Modify
                  </button>
                  <button
                    onClick={() => setDeleting(c)}
                    className="px-6 py-2.5 text-[9px] uppercase tracking-[0.3em] font-black text-zinc-800 hover:text-rose-500 hover:bg-rose-500/5 rounded-full transition-all duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            
            {/* Empty State */}
            {categories.length === 0 && (
              <div className="py-32 text-center border border-dashed border-zinc-900 rounded-[3rem]">
                <p className="text-zinc-600 font-serif italic text-xl">The taxonomy registry is currently void.</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-700 mt-4 underline underline-offset-8 decoration-zinc-800">Initiate first classification</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal Logic */}
      {deleting && (
        <DeleteCategoryModal
          category={deleting}
          onClose={() => setDeleting(null)}
          onDeleted={fetchCategories}
        />
      )}
    </div>
  </div>
);
}