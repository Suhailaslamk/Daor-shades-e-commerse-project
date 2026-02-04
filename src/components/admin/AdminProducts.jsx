
import { useEffect, useState } from "react";
import { Plus, Edit3, Package, ChevronLeft, ChevronRight, Image as ImageIcon, Trash2 } from "lucide-react";
import AdminProductForm from "./AdminAddProducts";
import api from "../../api/api";
import DeleteProductModal from "./deleteProductModal";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const pageSize = 10;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/admin/products?page=${page}&pageSize=${pageSize}`);
      setProducts(res.data.data.data);
      setTotal(res.data.data.total);
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const openAdd = () => {
    setEditingProduct(null);
    setModalOpen(true);
  };

  const openEdit = async (id) => {
    try {
      const res = await api.get(`/admin/products/${id}`);
      setEditingProduct(res.data.data);
      setModalOpen(true);
    } catch (err) {
      console.error("Failed to load product", err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:py-24 flex flex-col items-center selection:bg-white selection:text-black">
      <div className="max-w-7xl w-full space-y-20">
        
        {/* --- Header Section --- */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900 pb-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter">
              The <span className="text-zinc-600">Inventory</span>
            </h1>
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-zinc-800"></span>
              <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500">
                Registry System v2.0
              </p>
            </div>
          </div>
          
          <button
            onClick={openAdd}
            className="group relative flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
          >
            <Plus size={18} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-500" />
            <span className="uppercase tracking-[0.3em] text-[10px] font-black">Register Item</span>
          </button>
        </header>

        {/* --- Table / Content Section --- */}
        <div className="relative">
          {loading ? (
            <div className="py-48 flex flex-col items-center justify-center space-y-6">
              <div className="w-16 h-[1px] bg-zinc-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-white w-1/2 animate-[loading_1.5s_infinite_linear]"></div>
              </div>
              <p className="text-[9px] uppercase tracking-[0.6em] text-zinc-600 italic">Syncing Database</p>
            </div>
          ) : products.length === 0 ? (
            <div className="py-40 text-center border border-dashed border-zinc-900 rounded-[3rem]">
              <Package size={32} className="text-zinc-800 mx-auto mb-6" strokeWidth={1} />
              <p className="text-zinc-500 font-serif italic text-2xl tracking-tight text-balance">The collection is currently empty.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Table Header - Desktop Only */}
              <div className="hidden md:grid grid-cols-12 px-8 mb-6 text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-600">
                <div className="col-span-5">Identity / Reference</div>
                <div className="col-span-2 text-center">Category</div>
                <div className="col-span-2 text-center">Valuation</div>
                <div className="col-span-1 text-center">Units</div>
                <div className="col-span-2 text-right">Commands</div>
              </div>

              {/* Rows */}
              {products.map((p) => (
                <div 
                  key={p.id} 
                  className="group grid grid-cols-1 md:grid-cols-12 items-center gap-4 bg-zinc-950/50 border border-zinc-900 px-8 py-6 rounded-[2rem] hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-500"
                >
                  {/* Identity */}
                  <div className="col-span-5 flex items-center gap-6">
                    <div className="h-16 w-16 rounded-2xl overflow-hidden border border-zinc-800 bg-black flex-shrink-0 relative group-hover:border-zinc-500 transition-colors">
                      {p.imageUrl ? (
                        <img 
                          src={p.imageUrl} 
                          alt={p.name} 
                          className="h-full w-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-zinc-800">
                          <ImageIcon size={20} strokeWidth={1} />
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-[13px] uppercase tracking-[0.15em] font-black group-hover:text-white transition-colors">
                        {p.name}
                      </p>
                      <span className={`px-2 py-0.5 rounded-full text-[8px] uppercase font-bold tracking-[0.2em] border ${
                        p.isActive 
                        ? "text-emerald-500 border-emerald-500/20" 
                        : "text-rose-500 border-rose-500/20"
                      }`}>
                        {p.isActive ? "Archived" : "Offline"}
                      </span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="col-span-2 text-center text-[12px] font-serif italic text-zinc-500">
                    {p.categoryName || "Uncategorized"}
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-center">
                    <span className="text-[13px] font-mono tracking-tighter">₹{p.price.toLocaleString()}</span>
                  </div>

                  {/* Stock */}
                  <div className="col-span-1 text-center">
                    <span className={`text-[11px] font-mono ${p.stock < 10 ? 'text-rose-500 font-black underline underline-offset-4' : 'text-zinc-400'}`}>
                      {p.stock.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="col-span-2 flex items-center justify-end gap-2">
                    <button
                      onClick={() => openEdit(p.id)}
                      className="p-3 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-full transition-all duration-300"
                    >
                      <Edit3 size={18} strokeWidth={1.5} />
                    </button>
                    <button
                      onClick={() => setDeleteTarget(p)}
                      className="p-3 text-zinc-800 hover:text-rose-500 hover:bg-rose-500/10 rounded-full transition-all duration-300"
                    >
                      <Trash2 size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* --- Pagination --- */}
        {!loading && products.length > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-zinc-900 gap-6">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 hover:text-white disabled:opacity-20 disabled:hover:translate-x-0 transition-all hover:-translate-x-2"
            >
              <ChevronLeft size={16} strokeWidth={3} /> Previous
            </button>
            
            <div className="px-6 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
                Segment <span className="text-white mx-1 font-mono">{page}</span> of <span className="text-white font-mono">{Math.ceil(total/pageSize)}</span>
              </span>
            </div>

            <button
              disabled={products.length < pageSize}
              onClick={() => setPage((p) => p + 1)}
              className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 hover:text-white disabled:opacity-20 disabled:hover:translate-x-0 transition-all hover:translate-x-2"
            >
              Next <ChevronRight size={16} strokeWidth={3} />
            </button>
          </div>
        )}

        {/* --- Modals --- */}
        {modalOpen && (
          <AdminProductForm
            editingProduct={editingProduct}
            onClose={() => {
              setModalOpen(false);
              fetchProducts();
            }}
          />
        )}
        {deleteTarget && (
          <DeleteProductModal
            product={deleteTarget}
            onClose={() => setDeleteTarget(null)}
            onDeleted={() => {
              setProducts(prev => prev.filter(p => p.id !== deleteTarget.id));
              setDeleteTarget(null);
            }}
          />
        )}
      </div>
      
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}