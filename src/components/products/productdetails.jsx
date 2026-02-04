

import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/prodcontxt";
import { useCart } from "../../context/cartcontext";
import { useAuth } from "../../context/authcontext";
import { useWishlist } from "../../context/wishlistcontext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Heart, Info, Globe, Shield } from "lucide-react";
import api from "../../api/api";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
const { cart, addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      setError(false);

      const res = await api.get(`/products/${id}`);
      const data = res.data.data;

      setProduct(data);
      setSelectedImage(data.imageUrl);
    } catch (err) {
      console.error(err);
      setError(true);
      toast.error("Product not found");
      navigate("/products");
    } finally {
      setLoading(false);
    }
  };

  fetchProductDetails();
}, [id, navigate]);


if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F0F0]">
      <div className="animate-pulse space-y-6 w-full max-w-4xl bg-white p-10">
        <div className="h-96 bg-zinc-200" />
        <div className="h-6 bg-zinc-200 w-1/2" />
        <div className="h-4 bg-zinc-200 w-1/3" />
      </div>
    </div>
  );
}
if (error) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-6">
        <p className="text-zinc-500 uppercase tracking-widest text-sm">
          Product not available
        </p>
        <button
          onClick={() => navigate("/products")}
          className="text-xs uppercase tracking-widest border-b border-black pb-1"
        >
          Back to Collection
        </button>
      </div>
    </div>
  );
}

const handleAddToCart = async () => {
  if (!user) {
    navigate("/login");
    return;
  }

  const inCart = cart.find(item => item.productId === product.id); // use productId
  const currentQty = inCart ? inCart.quantity : 0;

  if (currentQty + 1 > product.stock) {
    toast.error("Out of stock");
    return;
  }

  try {
    await addToCart(product.id, 1);
    toast.success("Added to bag!");
  } catch (err) {
    toast.error("Failed to add to bag");
  }
};


const handleWishlistToggle = () => {
  if (!user) {
    navigate("/login");
    return;
  }

  toggleWishlist(product.id);

  // check the current state **after toggling**
  const inWishlist = isInWishlist(product.id);
  toast[inWishlist ? "info" : "success" ](
    inWishlist ?  "Removed from wishlist" : "Added to wishlist" 
  );
};
  
  

  return (
  <div className="min-h-screen bg-[#F4F4F5] flex items-center justify-center p-6 md:p-12 font-sans selection:bg-zinc-200">
    
    {/* THE COMPACT PRODUCT CARD */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white w-full max-w-5xl rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row border border-white"
    >
      
      {/* LEFT: IMAGE SECTION */}
      <div className="md:w-1/2 relative bg-[#F9F9F9] group">
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm hover:bg-black hover:text-white transition-all duration-300"
        >
          <ArrowLeft size={16} />
        </button>

        <div className="h-[45vh] md:h-[70vh] w-full overflow-hidden">
          <motion.img 
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={selectedImage} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            alt={product.name}
          />
        </div>

        {/* Thumbnail Selector */}
        <div className="absolute bottom-6 left-6 flex gap-2">
          {[product.imageUrl || product.image, product.image1, product.image2].filter(Boolean).map((img, i) => (
            <button 
              key={i}
              onMouseEnter={() => setSelectedImage(img)}
              className={`w-12 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                selectedImage === img ? "border-black scale-105 shadow-lg" : "border-transparent opacity-60"
              }`}
            >
              <img src={img} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: CONTENT SECTION */}
      <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-between bg-white">
        
        <div className="space-y-10">
          {/* Brand & Title */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">
                {product.categoryName || "Atelier Limited"}
              </span>
              <button 
                onClick={handleWishlistToggle}
                className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center hover:bg-zinc-50 transition-colors"
              >
                <Heart 
                  size={18} 
                  className={isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-zinc-300"} 
                />
              </button>
            </div>
            <h1 className="text-4xl font-serif italic tracking-tight text-zinc-900 leading-tight">
              {product.name}
            </h1>
            <p className="text-2xl font-light text-zinc-800 tracking-tighter">
              ₹{product.price.toLocaleString()}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4">
             <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold">Details</p>
             <p className="text-sm leading-relaxed text-zinc-500 font-light">
               {product.description || "A masterclass in silhouette and form. This piece features hand-selected materials and a tailored fit designed for the modern avant-garde wardrobe."}
             </p>
          </div>

          {/* Specs Bar */}
          <div className="flex items-center gap-8 py-6 border-y border-zinc-50">
            <div className="flex flex-col gap-1">
              <span className="text-[8px] uppercase tracking-tighter text-zinc-400">Inventory</span>
              <span className={`text-[10px] font-bold uppercase ${product.stock > 0 ? 'text-zinc-900' : 'text-rose-500'}`}>
                {product.stock > 0 ? `${product.stock} Available` : 'Waitlist'}
              </span>
            </div>
            <div className="w-[1px] h-6 bg-zinc-100" />
            <div className="flex flex-col gap-1">
              <span className="text-[8px] uppercase tracking-tighter text-zinc-400">Shipping</span>
              <span className="text-[10px] font-bold uppercase text-zinc-900 italic">Complimentary</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 space-y-4">
          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className="w-full bg-zinc-900 text-white py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-black transition-all duration-300 active:scale-[0.98] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] disabled:bg-zinc-200 disabled:text-zinc-400 disabled:shadow-none"
          >
            <ShoppingBag size={18} />
            <span className="text-[11px] uppercase tracking-[0.3em] font-black">
              {product.stock > 0 ? "Add to Bag" : "Notify Me"}
            </span>
          </button>
          
          <p className="text-center text-[9px] uppercase tracking-[0.2em] text-zinc-400">
            Secure checkout & 14-day returns
          </p>
        </div>

      </div>
    </motion.div>
  </div>
);
}