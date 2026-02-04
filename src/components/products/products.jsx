

import { Heart, ShoppingCart, ChevronLeft, ChevronRight, SlidersHorizontal, Search, ShoppingBag, ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
import { useProducts } from "../../context/prodcontxt";
import { useEffect, useState } from "react";
import { useNavigate ,useSearchParams } from "react-router-dom";
import { useCart } from "../../context/cartcontext";
import { useAuth } from "../../context/authcontext";
import { useWishlist } from "../../context/wishlistcontext";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import AtelierSort from "../layout/AtelierSort";
import api from "../../api/api";

export default function Products() {
  const navigate = useNavigate();
  const { products,search,setSort ,setSearch, category, setCategory,setPage,page,totalCount ,pageSize,loading } = useProducts();
  const { addToCart ,cart} = useCart();
  const { user } = useAuth();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlPage = Number(searchParams.get("page")) || 1;
  const [categories, setCategories] = useState([])
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
 
const [selectedLabel, setSelectedLabel] = useState("Sort by");

  const options = [
    { label: "Price: Low to High", value: "price" },
    { label: "Price: High to Low", value: "priceHighLow" },
    { label: "Featured", value: "" },
  ];

  const handleSelect = (option) => {
    setSort(option.value);
    setSelectedLabel(option.label);
    setIsOpen(false);
  };
useEffect(() => {
  setPage(urlPage);
}, [urlPage]);

useEffect(() => {
  api.get("admin/categories").then(res => {
    setCategories([{ id: null, name: "All" }, ...res.data.data]);
  });
}, []);

  const handleAddToCart = async (e, product) => {
  e.stopPropagation();
  if (!user) return navigate("/login");
  const inCart = cart.find(item => item.productId === product.id);
  const currentQty = inCart ? inCart.quantity : 0;

  if (currentQty + 1 > product.stock) {
    toast.error("Out of stock");
    return;
  }

  try {
    await addToCart(product.id, 1);
    toast.success("Added to bag");
  } catch (err) {
    toast.error("Failed to add to bag");
  }
};

  const handleWishlist = (e, id)=> {
    e.stopPropagation();
    if (!user){
      navigate("/login")
      return ;

    }
    
    if (isInWishlist(id)) {
    toggleWishlist(id);
    toast.info("Removed from wishlist");
  } else {
    toggleWishlist(id);
    toast.success("Added to wishlist");
  }
};



// 
return (
  <div className="min-h-screen bg-white pt-32 pb-40 selection:bg-black selection:text-white">
    <div className="max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
      
      {/* 01. EDITORIAL HEADER */}
      <header className="mb-32 relative">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[1px] w-8 bg-zinc-200" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 font-bold">
              The Archive
            </span>
            <span className="h-[1px] w-8 bg-zinc-200" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-zinc-900 tracking-tighter italic"
          >
            {categories.find(c => c.id === category)?.name || "All Pieces"}
          </motion.h1>
          
          <div className="mt-12 flex items-center gap-8">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
              Available Units // {products.length}
            </span>
          </div>
        </div>
      </header>

      {/* 02. TECHNICAL NAVBAR (Custom Dropdown Integration) */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 mb-24 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          
          {/* CATEGORY SELECTOR */}
          <div className="flex items-center gap-10 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id ?? "all"}
                onClick={() => { setCategory(cat.id); setPage(1); }}
                className={`group relative text-[11px] uppercase tracking-[0.3em] transition-all ${
                  category === cat.id ? "text-black font-black" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {cat.name || "General"}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-black transition-all duration-500 ${
                  category === cat.id ? "w-full" : "w-0 group-hover:w-4"
                }`} />
              </button>
            ))}
          </div>

          {/* SEARCH & CUSTOM SORT */}
          <div className="flex items-center gap-16">
            {/* Search Input */}
            <div className="flex items-center gap-4 group border-b border-transparent focus-within:border-zinc-900 transition-all pb-1">
              <Search size={14} className="text-zinc-400 group-focus-within:text-black" strokeWidth={1.5} />
              <input
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                placeholder="Find a Silhouette..."
                className="bg-transparent outline-none text-[12px] uppercase tracking-widest w-32 md:w-48 placeholder:text-zinc-300 font-light"
              />
            </div>
            
            {/* ATELIER CUSTOM SORT */}
            <div className="relative">
              <AtelierSort setSort={setSort} /> 
            </div>
          </div>
        </div>
      </nav>

      {/* 03. PRODUCT GALLERY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-32">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-8 animate-pulse">
              <div className="aspect-[3/4] bg-zinc-50" />
              <div className="space-y-4">
                <div className="h-2 bg-zinc-100 w-3/4" />
                <div className="h-2 bg-zinc-50 w-1/2" />
              </div>
            </div>
          ))
        ) : (
          products.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 4) * 0.1 }}
              viewport={{ once: true }}
              key={item.id}
              className="group cursor-pointer"
            >
              {/* Product Visual */}
              <div 
                className="relative overflow-hidden aspect-[3/4] mb-10 bg-zinc-50"
                onClick={() => navigate(`/products/${item.id}`)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-[1.5s] cubic-bezier(0.16, 1, 0.3, 1) grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110"
                />
                
                {/* Wishlist Overlay */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleWishlist(e, item.id); }}
                  className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  <Heart
                    size={16}
                    strokeWidth={1}
                    className={isInWishlist(item.id) ? "fill-black text-black" : "text-zinc-400"}
                  />
                </button>

                {/* Add to Cart Drawer */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleAddToCart(e, item); }}
                    disabled={item.stock <= 0}
                    className="w-full bg-black text-white py-6 text-[10px] uppercase tracking-[0.4em] font-black hover:bg-zinc-800 transition-colors"
                  >
                    {item.stock > 0 ? "Commit to Cart" : "Sold Out"}
                  </button>
                </div>
              </div>

              {/* Product Descriptor */}
              <div className="space-y-4 px-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-[12px] uppercase tracking-[0.2em] font-black text-zinc-900 group-hover:underline decoration-zinc-200 underline-offset-8">
                      {item.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                      {item.categoryName}
                    </p>
                  </div>
                  <p className="text-[13px] font-mono text-zinc-900">
                    ₹{item.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
      
      {/* 04. MINIMALIST PAGINATION */}
      {!loading && (
        <footer className="mt-48 pt-20 border-t border-zinc-100 flex flex-col items-center gap-12">
          <div className="flex items-center gap-20">
            <button
              disabled={page <= 1}
              onClick={() => setSearchParams({ page: page - 1 })}
              className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] disabled:opacity-20 transition-all"
            >
              <div className="h-[1px] w-8 bg-zinc-900 group-hover:w-16 transition-all" />
              Prev
            </button>

            <span className="text-[10px] font-mono text-zinc-400 uppercase">
              Section {page} / {totalPages}
            </span>

            <button
              disabled={page >= totalPages}
              onClick={() => setSearchParams({ page: page + 1 })}
              className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] disabled:opacity-20 transition-all"
            >
              Next
              <div className="h-[1px] w-8 bg-zinc-900 group-hover:w-16 transition-all" />
            </button>
          </div>
        </footer>
      )}
    </div>
  </div>
);
}