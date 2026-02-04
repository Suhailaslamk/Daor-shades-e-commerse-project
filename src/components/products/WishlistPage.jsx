// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/authcontext";
// import { useWishlist } from "../../context/wishlistcontext";
// import { useCart } from "../../context/cartcontext";

// export default function WishlistPage() {
//   const navigate = useNavigate();
//   const { user } = useAuth();
//   const { wishlist, removeFromWishlist } = useWishlist();
//   const { addToCart } = useCart();

//   useEffect(() => {
//     if (!user) navigate("/login");
//   }, [user, navigate]);

//   return (
//     <div className="min-h-screen bg-[#f5f5f0] px-8 py-10 mt-16">
//       <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

//       {wishlist.length === 0 ? (
//         <p className="text-gray-500 text-lg">No items in your wishlist.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {wishlist.map((item) => (
//             <div key={item.id} className="bg-white p-4 rounded-xl shadow">
//               <img
//                 src={item.imageUrl}
//                 alt={item.name}
//                 className="w-full h-56 object-cover rounded-lg"
//               />

//               <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
//               <p className="text-gray-600">₹{item.price}</p>

//               <div className="flex gap-2 mt-3">
//                 <button
//                   onClick={() => addToCart(item.id, 1)}
//                   className="flex-1 bg-black text-white px-3 py-2 rounded-md"
//                 >
//                   Add to Cart
//                 </button>

//                 <button
//                   onClick={() => removeFromWishlist(item.id)}
//                   className="flex-1 bg-red-500 text-white px-3 py-2 rounded-md"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import { useWishlist } from "../../context/wishlistcontext";
import { useCart } from "../../context/cartcontext";
import { ShoppingBag, X } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function WishlistPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart ,cart} = useCart();

  // useEffect(() => {
  //   if (!user) navigate("/login");
  // }, [user, navigate]);
// const handleAddToCart = async (e, product) => {
//   e.stopPropagation();
//   if (!user) return navigate("/login");
//   const inCart = cart.find(item => item.productId === product.id);
//   const currentQty = inCart ? inCart.quantity : 0;

//   if (currentQty + 1 > product.stock) {
//     toast.error("Out of stock");
//     return;
//   }

//   try {
//     await addToCart(product.id, 1);
//     toast.success("Added to bag");
//   } catch (err) {
//     toast.error("Failed to add to bag");
//   }
// };


const handleAddToCart = async (e, wishlistItem) => {
  e.stopPropagation();

  // 🔑 Normalize product from wishlist item
  const product = wishlistItem.product ?? wishlistItem;

  if (!product || !product.id) {
    toast.error("Invalid product");
    return;
  }

  if (product.stock <= 0) {
    toast.error("Out of stock");
    return;
  }

  if (!user) {
    navigate("/login");
    return;
  }

  const inCart = cart.find(
    item => item.productId === product.id
  );

  const currentQty = inCart ? inCart.quantity : 0;

  if (currentQty + 1 > product.stock) {
    toast.error("Out of stock");
    return;
  }

  try {
    await addToCart(product.id, 1);
    toast.success("Added to bag");
  } catch {
    toast.error("Failed to add to bag");
  }
};

  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-32 mt-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 block mb-4">Your Selection</span>
          <h1 className="text-5xl font-serif italic tracking-tighter">The Wishlist</h1>
        </header>

        {wishlist.length === 0 ? (
          <div className="h-[40vh] flex flex-col items-center justify-center space-y-6">
            <p className="text-zinc-400 uppercase tracking-[0.2em] text-[11px]">Your wishlist is currently empty.</p>
            <Link to="/products" className="bg-zinc-900 text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em]">
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {wishlist.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={item.id} 
                className="group relative"
              >
                {/* REMOVE BUTTON */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={14} className="text-zinc-400 hover:text-black" />
                </button>

                <div className="aspect-[3/4] overflow-hidden bg-zinc-50 mb-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium">{item.name}</h3>
                    <p className="text-[11px] text-zinc-500 tracking-widest mt-1">${item.price}</p>
                  </div>

                  <button
                    onClick={(e) => handleAddToCart(e, item)}
                    disabled={(item.product?.stock ?? item.stock) <= 0}
                    className="w-full border border-zinc-200 py-3 flex items-center justify-center gap-2 hover:bg-zinc-900 hover:text-white transition-all text-[9px] uppercase tracking-[0.2em]"
                  > {(item.product?.stock ?? item.stock) > 0 ? "Add to Bag " : "Sold Out"}
                    
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}