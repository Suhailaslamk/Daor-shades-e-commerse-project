
// // import { useNavigate } from "react-router-dom";
// // import { useCart } from "../../context/cartcontext";
// // import { useEffect } from "react";
// // import { useAuth } from "../../context/authcontext";

// // export default function CartPage() {
// //   const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
// //   const navigate = useNavigate();
// //   const {user} = useAuth()
// // useEffect(()=> {
// //   if(!user)
// //     navigate('/')
// // },[user,navigate])
  
// //   const totalAmount = cart.reduce(
// //     (sum, item) => sum + ((Number(item.price) || 0) * (item.quantity || 1)),
// //     0
// //   );

// //   return (
// //     <div className="min-h-screen bg-[#f5f5f0] px-8 py-10 mt-16">
// //       <h1 className="text-3xl font-bold mb-6"> Your Cart</h1>

// //       {cart.length === 0 ? (
// //         <p className="text-gray-500 text-lg">Your cart is empty.</p>
// //       ) : (
// //         <>
// //           <div className="space-y-4">
// //             {cart.map((entry) => (
// //               <div
// //                 key={entry.id}
// //                 className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
// //               >
// //                 <div className="flex items-center gap-4">
// //                   <img
// //                     src={entry.image}
// //                     alt={entry.name}
// //                     className="w-20 h-20 object-cover rounded"
// //                   />
// //                   <div>
// //                     <h2 className="text-xl font-semibold">{entry.name}</h2>
// //                     <p>${entry.price}</p>
// //                   </div>
// //                 </div>

               
// //                 <div className="flex flex-col items-end gap-2">
// //                   <div className="flex items-center gap-2">
// //                     <button
// //                       onClick={() => decreaseQuantity(entry.id)}
// //                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
// //                     >
// //                       -
// //                     </button>
// //                     <span className="px-2">{entry.quantity || 1}</span>
// //                     <button
// //                       onClick={() => increaseQuantity(entry.id)}
// //                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
// //                     >
// //                       +
// //                     </button>
// //                   </div>

// //                   <button
// //                     onClick={() => removeFromCart(entry.id)}
// //                     className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 mt-2"
// //                   >
// //                     Remove
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

       
// //           <div className="mt-6 p-4 bg-white rounded shadow flex justify-between items-center max-w-md">
// //             <h2 className="text-xl font-semibold">Total:</h2>
// //             <p className="text-lg font-semibold">₹{totalAmount}</p>
// //           </div>

         
// //           <button
// //             onClick={() => navigate("/payment")}
// //             className="mt-4 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
// //           >
// //             Buy Now
// //           </button>
// //         </>
// //       )}
// //     </div>
// //   );
// // }



// // import { useNavigate } from "react-router-dom";
// // import { useCart } from "../../context/cartcontext";
// // import { useEffect } from "react";
// // import { useAuth } from "../../context/authcontext";
// // import { toast } from "react-toastify";

// // export default function CartPage() {
// //   const navigate = useNavigate();
// //   const { user } = useAuth();
// //   const { cart, loading, updateCart, removeFromCart, getCart } = useCart();

// //   useEffect(() => {
// //     if (!user) navigate("/");
// //   }, [user, navigate]);

// //   if (loading) return <p className="p-8">Loading cart...</p>;

// //   const items = cart?.items || [];

// //   const increaseQuantity = async (item) => {
// //     try {
// //       await updateCart(item.productId, item.quantity + 1);
// //     } catch (err) {
// //       toast.error("Failed to update quantity");
// //     }
// //   };

// //   const decreaseQuantity = async (item) => {
// //     if (item.quantity <= 1) {
// //       return removeFromCart(item.productId);
// //     }
// //     try {
// //       await updateCart(item.productId, item.quantity - 1);
// //     } catch (err) {
// //       toast.error("Failed to update quantity");
// //     }
// //   };

// //   const totalAmount = items.reduce(
// //     (sum, item) => sum + Number(item.price) * (item.quantity || 1),
// //     0
// //   );

// //   return (
// //     <div className="min-h-screen bg-[#f5f5f0] px-8 py-10 mt-16">
// //       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

// //       {items.length === 0 ? (
// //         <p className="text-gray-500 text-lg">Your cart is empty.</p>
// //       ) : (
// //         <>
// //           <div className="space-y-4">
// //             {items.map((entry) => (
// //               <div
// //                 key={entry.productId}
// //                 className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
// //               >
// //                 <div className="flex items-center gap-4">
// //                   <img
// //                     src={entry.image}
// //                     alt={entry.name}
// //                     className="w-20 h-20 object-cover rounded"
// //                   />
// //                   <div>
// //                     <h2 className="text-xl font-semibold">{entry.name}</h2>
// //                     <p>₹{entry.price}</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex flex-col items-end gap-2">
// //                   <div className="flex items-center gap-2">
// //                     <button
// //                       onClick={() => decreaseQuantity(entry)}
// //                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
// //                     >
// //                       -
// //                     </button>
// //                     <span className="px-2">{entry.quantity || 1}</span>
// //                     <button
// //                       onClick={() => increaseQuantity(entry)}
// //                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
// //                     >
// //                       +
// //                     </button>
// //                   </div>

// //                   <button
// //                     onClick={() => removeFromCart(entry.productId)}
// //                     className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 mt-2"
// //                   >
// //                     Remove
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="mt-6 p-4 bg-white rounded shadow flex justify-between items-center max-w-md">
// //             <h2 className="text-xl font-semibold">Total:</h2>
// //             <p className="text-lg font-semibold">₹{totalAmount}</p>
// //           </div>

// //           <button
// //             onClick={() => navigate("/payment")}
// //             className="mt-4 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
// //           >
// //             Buy Now
// //           </button>
// //         </>
// //       )}
// //     </div>
// //   );
// // }




// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../context/cartcontext";
// import { useEffect } from "react";
// import { useAuth } from "../../context/authcontext";

// export default function CartPage() {
//   const { cart, removeFromCart, updateCart } = useCart();
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   useEffect(() => {
//     if (!user) navigate("/login");
//   }, [user, navigate]);

//   const totalAmount = cart.reduce(
//     (sum, item) => sum + (Number(item.price) || 0) * (item.quantity || 1),
//     0
//   );

//   return (
//     <div className="min-h-screen bg-[#f5f5f0] px-8 py-10 mt-16">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

//       {cart.length === 0 ? (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {cart.map((item) => (
//               <div
//                 key={item.productId}
//                 className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={item.imageUrl || item.image} // match backend property
//                     alt={item.name}
//                     className="w-20 h-20 object-cover rounded"
//                   />
//                   <div>
//                     <h2 className="text-xl font-semibold">{item.name}</h2>
//                     <p>₹{item.price}</p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-end gap-2">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() =>
//                         updateCart(item.productId, (item.quantity || 1) - 1)
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                       disabled={item.quantity <= 1}
//                     >
//                       -
//                     </button>
//                     <span className="px-2">{item.quantity || 1}</span>
//                     <button
//                       onClick={() =>
//                         updateCart(item.productId, (item.quantity || 1) + 1)
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>

//                   <button
//                     onClick={() => removeFromCart(item.productId)}
//                     className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 mt-2"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 p-4 bg-white rounded shadow flex justify-between items-center max-w-md">
//             <h2 className="text-xl font-semibold">Total:</h2>
//             <p className="text-lg font-semibold">₹{totalAmount}</p>
//           </div>

//           <button
//             onClick={() => navigate("/payment")}
//             className="mt-4 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
//           >
//             Buy Now
//           </button>
//         </>
//       )}
//     </div>
//   );
// }



import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartcontext";
import { useEffect } from "react";
import { useAuth } from "../../context/authcontext";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import api from "../../api/api";
import { toast } from "react-toastify";

export default function CartPage() {
  const { cart, removeFromCart, updateCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();

 

  const totalAmount = cart.reduce(
  (sum, item) => sum + item.price * (item.quantity || 1),
  0
);

const handleCheckout = () => {
  if (cart.length === 0) {
    toast.error("Your cart is empty");
    return;
  }

  navigate("/shipping-address");
};
  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="mb-16 border-b border-zinc-100 pb-8 flex justify-between items-end">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 block mb-2">Shopping Bag</span>
            <h1 className="text-5xl font-serif italic tracking-tighter">Your Selection</h1>
          </div>
          <p className="text-xs uppercase tracking-widest text-zinc-400">
            {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
          </p>
        </header>

        {cart.length === 0 ? (
          <div className="h-[40vh] flex flex-col items-center justify-center space-y-6 text-center">
            <ShoppingBag size={40} strokeWidth={1} className="text-zinc-200" />
            <p className="text-zinc-500 uppercase tracking-widest text-xs">Your bag is currently empty.</p>
            <button 
              onClick={() => navigate("/products")}
              className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black pb-1 hover:text-zinc-400 transition-colors"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* ITEMS LIST */}
            <div className="flex-1 space-y-10">
              {cart.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={item.productId}
                  className="flex gap-6 md:gap-10 border-b border-zinc-50 pb-10 group"
                >
                  {/* Image Container */}
                  <div className="w-24 h-32 md:w-40 md:h-52 bg-zinc-50 overflow-hidden flex-shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  {/* Details Container */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-sm md:text-lg uppercase tracking-widest font-medium mb-1">
                          {item.name}
                        </h2>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest">Ref: #00{item.productId}</p>
                      </div>
                      <p className="text-sm md:text-lg font-light italic">₹{item.price}</p>
                    </div>

                    <div className="flex justify-between items-end">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-zinc-200 px-4 py-2 gap-6">
                        <button
                          onClick={() => { updateCart(item.productId, (item.quantity || 1) - 1)
                            toast.info("Decreased item quantity")
                          }
                          }
                          className="text-zinc-400 hover:text-black transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-xs font-medium w-4 text-center">{item.quantity || 1}</span>
                        <button
                          onClick={() => {updateCart(item.productId, (item.quantity || 1) + 1)
                            toast.success("Increased item quantity")
                          }
                          }
                          className="text-zinc-400 hover:text-black transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Remove Action */}
                      <button
                        onClick={() => removeFromCart(item.productId)}
                        className="text-[10px] uppercase tracking-widest text-zinc-300 hover:text-red-500 transition-colors flex items-center gap-2"
                      >
                        <Trash2 size={12} /> Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SUMMARY SIDEBAR */}
            <aside className="lg:w-[350px] space-y-8">
              <div className="bg-zinc-50 p-8 space-y-6 sticky top-32">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold border-b border-zinc-200 pb-4">
                  Order Summary
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-xs uppercase tracking-widest">
                    <span className="text-zinc-400">Subtotal</span>
                    <span>₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-xs uppercase tracking-widest">
                    <span className="text-zinc-400">Shipping</span>
                    <span className="text-emerald-600 italic">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-xs uppercase tracking-widest border-t border-zinc-200 pt-4 font-bold">
                    <span>Total</span>
                    <span className="text-lg">₹{totalAmount}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                    <button
                        onClick={handleCheckout}
                        className="w-full bg-black text-white py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group"
                    >
                        Proceed to Checkout
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[9px] text-zinc-400 text-center uppercase tracking-widest">
                        Secure SSL Encrypted Checkout
                    </p>
                </div>
              </div>
            </aside>

          </div>
        )}
      </div>
    </div>
  );
}