
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useAuth } from "../../context/authcontext";

// // export default function OrdersPage() {
// //   const { user } = useAuth();
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //   console.log("🔹 user from auth context:", user);

  
// //   if (!user) {
// //     setLoading(false); 
// //     return;
// //   }

// //   const fetchOrders = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await axios.get(`https://daor-shades-e-commerse-project.onrender.com/orders?userId=${user.id}`);
// //       setOrders(res.data);
// //     } catch (err) {
// //       console.error(" Error fetching orders:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   fetchOrders();
// // }, [user]);
  
// //   if (loading) return <p className="text-center mt-16">Loading orders...</p>;
// //   if (error) return <p className="text-center mt-16 text-red-600">Error: {error.message}</p>;
// //   if (!user) return <p className="text-center mt-16">Please log in to view your orders.</p>;
// //   if (orders.length === 0) return <p className="text-center mt-16">No orders yet.</p>;

// //   return (
// //     <div className="min-h-screen px-8 py-10 mt-20 bg-[#f5f5f0]">
// //       <h1 className="text-3xl font-bold mb-6">📦 Your Orders</h1>

// //       <div className="space-y-4">
// //         {orders.map((order) => (
// //           <div
// //             key={order.id}
// //             className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
// //           >
// //             <div>
// //               <h2 className="text-xl font-semibold">{order.name}</h2>
// //               <p className="text-gray-500 text-sm">
// //                 Quantity: {order.quantity} | Price: ₹{order.price * order.quantity}
// //               </p>
// //               <p className="text-gray-400 text-xs">
// //                 Ordered on: {new Date(order.date).toLocaleString()}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// // import { useEffect, useState } from "react";
// // import { useAuth } from "../../context/authcontext";
// // import { Package, Calendar, Clock, ArrowUpRight, ShoppingBag } from "lucide-react";
// // import { motion } from "framer-motion";
// // import api from "../../api/api";

// // export default function OrdersPage() {
// //   const { user } = useAuth();
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (!user) {
// //       setLoading(false);
// //       return;
// //     }

// //     const fetchOrders = async () => {
// //       try {
// //         setLoading(true);
// //         const res = await api.get("/orders/my");
// //         setOrders(res.data.data);
// //       } catch (err) {
// //         console.error("Error fetching orders:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrders();
// //   }, [user]);

// //   if (loading) return (
// //     <div className="h-screen flex items-center justify-center bg-white">
// //       <div className="animate-pulse text-[10px] uppercase tracking-[0.5em] text-zinc-400">Authenticating Records...</div>
// //     </div>
// //   );

// //   if (!user) return (
// //     <div className="h-screen flex flex-col items-center justify-center bg-white space-y-6">
// //        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-light">Login required to access archives</p>
// //        <button onClick={() => window.location.href='/login'} className="border border-black px-8 py-4 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">Sign In</button>
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 pt-32 pb-20 px-6 md:px-12 lg:px-24">
// //       <div className="max-w-5xl mx-auto">
        
// //         {/* HEADER */}
// //         <header className="mb-20">
// //           <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 block mb-4">Account Archives</span>
// //           <h1 className="text-5xl md:text-6xl font-serif italic tracking-tighter">Your Orders</h1>
// //         </header>

// //         {orders.length === 0 ? (
// //           <div className="border-t border-zinc-100 py-20 text-center">
// //             <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-8">No transaction history found.</p>
// //             <button 
// //               onClick={() => window.location.href='/products'}
// //               className="bg-black text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold"
// //             >
// //               Start Your Collection
// //             </button>
// //           </div>
// //         ) : (
// //           <div className="space-y-6">
// //             {orders.map((order, idx) => (
// //               <motion.div
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 key={order.id}
// //                 className="group relative bg-white border border-zinc-100 p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-zinc-300 transition-all duration-500"
// //               >
// //                 {/* Left: Info */}
// //                 <div className="space-y-4 md:space-y-2">
// //                   <div className="flex items-center gap-3">
// //                     <span className="bg-zinc-100 text-[9px] font-bold uppercase tracking-widest px-2 py-1">Confirmed</span>
// //                     <span className="text-[10px] text-zinc-300 uppercase tracking-widest">ID: #{order.id.toString().slice(-6)}</span>
// //                   </div>
                  
// //                   <h2 className="text-xl md:text-2xl font-serif italic tracking-tight">{order.name}</h2>
                  
// //                   <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest text-zinc-400">
// //                     <span className="flex items-center gap-2"><Package size={12} /> Qty: {order.quantity}</span>
// //                     <span className="flex items-center gap-2"><Calendar size={12} /> {new Date(order.date).toLocaleDateString()}</span>
// //                     <span className="flex items-center gap-2"><Clock size={12} /> {new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
// //                   </div>
// //                 </div>

// //                 {/* Right: Price & Action */}
// //                 <div className="mt-8 md:mt-0 flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto border-t md:border-none pt-6 md:pt-0">
// //                   <div className="text-right">
// //                     <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Total Amount</p>
// //                     <p className="text-2xl font-light tracking-tighter">₹{(order.price * order.quantity).toLocaleString()}</p>
// //                   </div>
                  
// //                   <button className="md:mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-black transition-colors group">
// //                     Details <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
// //                   </button>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Support Footer */}
// //         <footer className="mt-24 border-t border-zinc-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
// //           <p className="text-[10px] uppercase tracking-widest text-zinc-400 text-center md:text-left">
// //             Need assistance with an order? Contact our concierge at support@daoratelier.com
// //           </p>
// //           <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
// //             <button className="hover:text-zinc-400 transition-colors">Shipping Policy</button>
// //             <button className="hover:text-zinc-400 transition-colors">Returns</button>
// //           </div>
// //         </footer>
// //       </div>
// //     </div>
// //   );
// // }






// // import { useEffect, useState } from "react";
// // import { useAuth } from "../../context/authcontext";
// // import { Package, Calendar, Clock, ArrowUpRight } from "lucide-react";
// // import { motion } from "framer-motion";
// // import api from "../../api/api";

// // export default function OrdersPage() {
// //   const { user } = useAuth();
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (!user) {
// //       setLoading(false);
// //       return;
// //     }

// //     const fetchOrders = async () => {
// //       try {
// //         setLoading(true);
// //         const res = await api.get("/orders/my");
// //         setOrders(res.data.data);
// //       } catch (err) {
// //         console.error("Error fetching orders:", err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrders();
// //   }, [user]);

// //   if (loading)
// //     return (
// //       <div className="h-screen flex items-center justify-center bg-white">
// //         <div className="animate-pulse text-[10px] uppercase tracking-[0.5em] text-zinc-400">
// //           Loading your orders...
// //         </div>
// //       </div>
// //     );

// //   if (!user)
// //     return (
// //       <div className="h-screen flex flex-col items-center justify-center bg-white space-y-6">
// //         <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-light">
// //           Login required to access orders
// //         </p>
// //         <button
// //           onClick={() => window.location.href = "/login"}
// //           className="border border-black px-8 py-4 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all"
// //         >
// //           Sign In
// //         </button>
// //       </div>
// //     );

// //   return (
// //     <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 pt-32 pb-20 px-6 md:px-12 lg:px-24">
// //       <div className="max-w-5xl mx-auto">
// //         {/* HEADER */}
// //         <header className="mb-20 text-center md:text-left">
// //           <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 block mb-4">
// //             Account Archives
// //           </span>
// //           <h1 className="text-5xl md:text-6xl font-serif italic tracking-tighter">
// //             Your Orders
// //           </h1>
// //         </header>

// //         {orders.length === 0 ? (
// //           <div className="border-t border-zinc-100 py-20 text-center">
// //             <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-8">
// //               No transaction history found.
// //             </p>
// //             <button
// //               onClick={() => window.location.href = '/products'}
// //               className="bg-black text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold"
// //             >
// //               Start Your Collection
// //             </button>
// //           </div>
// //         ) : (
// //           <div className="space-y-6">
// //             {orders.map((order, idx) => (
// //               <motion.div
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: idx * 0.1 }}
// //                 key={order.id}
// //                 className="group relative bg-white border border-zinc-100 p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-zinc-300 transition-all duration-500"
// //               >
// //                 {/* Left: Order Items */}
// //                 <div className="space-y-4 md:space-y-2 w-full md:w-2/3">
// //                   <div className="flex items-center gap-3">
// //                     <span className="bg-zinc-100 text-[9px] font-bold uppercase tracking-widest px-2 py-1">
// //                       {order.status}
// //                     </span>
// //                     <span className="text-[10px] text-zinc-300 uppercase tracking-widest">
// //                       ID: #{order.id.toString().slice(-6)}
// //                     </span>
// //                   </div>

// //                   {order.orderItems.map(item => (
// //                     <div key={item.productId} className="flex gap-4 items-center border-b border-zinc-100 py-2">
// //                       <img
// //                         src={item.imageUrl}
// //                         alt={item.name}
// //                         className="w-16 h-16 object-cover rounded"
// //                       />
// //                       <div className="flex flex-col">
// //                         <h2 className="text-sm md:text-base font-serif italic">{item.name}</h2>
// //                         <p className="text-[10px] uppercase tracking-widest text-zinc-400">
// //                           Qty: {item.quantity} × ₹{item.price.toLocaleString()}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   ))}

// //                   <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest text-zinc-400 mt-2">
// //                     <span className="flex items-center gap-2">
// //                       <Calendar size={12} /> {new Date(order.createdAt).toLocaleDateString()}
// //                     </span>
// //                     <span className="flex items-center gap-2">
// //                       <Clock size={12} /> {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
// //                     </span>
// //                   </div>
// //                 </div>

// //                 {/* Right: Total & Action */}
// //                 <div className="mt-6 md:mt-0 flex flex-col items-end justify-between w-full md:w-auto">
// //                   <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Total Amount</p>
// //                   <p className="text-2xl font-light tracking-tighter">
// //                     ₹{order.totalAmount.toLocaleString()}
// //                   </p>

// //                   <button className="md:mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-black transition-colors group">
// //                     Details <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
// //                   </button>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         )}

// //         {/* Support Footer */}
// //         <footer className="mt-24 border-t border-zinc-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
// //           <p className="text-[10px] uppercase tracking-widest text-zinc-400 text-center md:text-left">
// //             Need assistance with an order? Contact our concierge at support@daoratelier.com
// //           </p>
// //           <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
// //             <button className="hover:text-zinc-400 transition-colors">Shipping Policy</button>
// //             <button className="hover:text-zinc-400 transition-colors">Returns</button>
// //           </div>
// //         </footer>
// //       </div>
// //     </div>
// //   );
// // }








// import { useEffect, useState } from "react";
// import { useAuth } from "../../context/authcontext";
// import { Package, Calendar, Clock, ArrowUpRight, ShoppingBag } from "lucide-react";
// import { motion } from "framer-motion";
// import api from "../../api/api";

// export default function OrdersPage() {
//   const { user } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user) {
//       setLoading(false);
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         setLoading(true);
//         const res = await api.get("/orders/my");
//         setOrders(res.data.data || []);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//         setOrders([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [user]);

//   if (loading)
//     return (
//       <div className="h-screen flex items-center justify-center bg-white">
//         <div className="animate-pulse text-[10px] uppercase tracking-[0.5em] text-zinc-400">
//           Loading your orders...
//         </div>
//       </div>
//     );

//   if (!user)
//     return (
//       <div className="h-screen flex flex-col items-center justify-center bg-white space-y-6">
//         <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-light">
//           Login required to access your orders
//         </p>
//         <button
//           onClick={() => window.location.href = "/login"}
//           className="border border-black px-8 py-4 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all"
//         >
//           Sign In
//         </button>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 pt-32 pb-20 px-6 md:px-12 lg:px-24">
//       <div className="max-w-5xl mx-auto">

//         {/* HEADER */}
//         <header className="mb-20">
//           <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 block mb-4">Account Archives</span>
//           <h1 className="text-5xl md:text-6xl font-serif italic tracking-tighter">Your Orders</h1>
//         </header>

//         {orders.length === 0 ? (
//           <div className="border-t border-zinc-100 py-20 text-center">
//             <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-8">No transaction history found.</p>
//             <button 
//               onClick={() => window.location.href='/products'}
//               className="bg-black text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold"
//             >
//               Start Your Collection
//             </button>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {orders.map((order, idx) => (
//               <motion.div
//                 key={order.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group relative bg-white border border-zinc-100 p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-zinc-300 transition-all duration-500"
//               >
//                 {/* LEFT: ORDER INFO */}
//                 <div className="space-y-4 md:space-y-2">
//                   <div className="flex items-center gap-3">
//                     <span className="bg-zinc-100 text-[9px] font-bold uppercase tracking-widest px-2 py-1">
//                       {order.status || "Confirmed"}
//                     </span>
//                     <span className="text-[10px] text-zinc-300 uppercase tracking-widest">
//                       ID: #{order.id.toString().slice(-6)}
//                     </span>
//                   </div>

//                   <h2 className="text-xl md:text-2xl font-serif italic tracking-tight">{order.name || "Order"}</h2>

//                   {/* ORDER ITEMS */}
//                   <div className="flex flex-col gap-4 mt-2">
//                     {(order.orderItems || []).map(item => (
//                       <div key={item.productId} className="flex gap-4 items-center border-b border-zinc-100 py-2">
//                         <img
//                           src={item.imageUrl}
//                           alt={item.name}
//                           className="w-16 h-16 object-cover rounded"
//                         />
//                         <div className="flex flex-col">
//                           <h3 className="text-sm md:text-base font-serif italic">{item.name}</h3>
//                           <p className="text-[10px] uppercase tracking-widest text-zinc-400">
//                             Qty: {item.quantity} × ₹{item.price.toLocaleString()}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest text-zinc-400 mt-2">
//                     <span className="flex items-center gap-2"><Package size={12} /> Total Items: {order.orderItems?.length || 0}</span>
//                     <span className="flex items-center gap-2"><Calendar size={12} /> {new Date(order.date).toLocaleDateString()}</span>
//                     <span className="flex items-center gap-2"><Clock size={12} /> {new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
//                   </div>
//                 </div>

//                 {/* RIGHT: TOTAL & ACTION */}
//                 <div className="mt-8 md:mt-0 flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto border-t md:border-none pt-6 md:pt-0">
//                   <div className="text-right">
//                     <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Total Amount</p>
//                     <p className="text-2xl font-light tracking-tighter">
//                       ₹{(order.orderItems?.reduce((sum, i) => sum + i.price * i.quantity, 0) || 0).toLocaleString()}
//                     </p>
//                   </div>
//                   <button className="md:mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-black transition-colors group">
//                     Details <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {/* SUPPORT FOOTER */}
//         <footer className="mt-24 border-t border-zinc-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-[10px] uppercase tracking-widest text-zinc-400 text-center md:text-left">
//             Need assistance with an order? Contact our concierge at support@daoratelier.com
//           </p>
//           <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
//             <button className="hover:text-zinc-400 transition-colors">Shipping Policy</button>
//             <button className="hover:text-zinc-400 transition-colors">Returns</button>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }








import { useEffect, useState } from "react";
import { useAuth } from "../../context/authcontext";
import { Package, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import api from "../../api/api";

// Map status codes to readable text
const STATUS_MAP = {
  1: "Pending",
  2: "Processing",
  3: "Confirmed",
  4: "Shipped",
  5: "Delivered",
  6: "Cancelled",
  7: "Payment Completed",
  8: "COD Completed",
  9: "Refunded",
};

export default function OrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await api.get("/orders/my");
        setOrders(res.data.data || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse text-[10px] uppercase tracking-[0.5em] text-zinc-400">
          Loading your orders...
        </div>
      </div>
    );

  if (!user)
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white space-y-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-light">
          Login required to access your orders
        </p>
        <button
          onClick={() =>navigate("/login")}
          className="border border-black px-8 py-4 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all"
        >
          Sign In
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <header className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 block mb-4">Account Archives</span>
          <h1 className="text-5xl md:text-6xl font-serif italic tracking-tighter">Your Orders</h1>
        </header>

        {orders.length === 0 ? (
          <div className="border-t border-zinc-100 py-20 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-8">No transaction history found.</p>
            <button 
              onClick={() => navigate("/products")}
              className="bg-black text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold"
            >
              Start Your Collection
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, idx) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-white border border-zinc-100 p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-zinc-300 transition-all duration-500"
              >
                {/* LEFT: ORDER INFO */}
                <div className="space-y-4 md:space-y-2 w-full md:w-2/3">
                  <div className="flex items-center gap-3">
                    <span className="bg-zinc-100 text-[9px] font-bold uppercase tracking-widest px-2 py-1">
                      {STATUS_MAP[order.status] || "Confirmed"}
                    </span>
                    <span className="text-[10px] text-zinc-300 uppercase tracking-widest">
                      ID: #{order.id.toString().slice(-6)}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 mt-2">
                    {order.items?.map((item, i) => (
                      <div key={i} className="flex gap-4 items-center border-b border-zinc-100 py-2">
                        <img
                          src={item.imageUrl}
                          alt={item.productName}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex flex-col">
                          <h3 className="text-sm md:text-base font-serif italic">{item.productName}</h3>
                          <p className="text-[10px] uppercase tracking-widest text-zinc-400">
                            Qty: {item.quantity} × ₹{item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest text-zinc-400 mt-2">
                    <span className="flex items-center gap-2"><Package size={12} /> Total Items: {order.items?.length || 0}</span>
                    <span className="flex items-center gap-2"><Calendar size={12} /> {new Date(order.orderDate).toLocaleDateString()}</span>
                    <span className="flex items-center gap-2"><Clock size={12} /> {new Date(order.orderDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>

                {/* RIGHT: TOTAL & ACTION */}
                <div className="mt-8 md:mt-0 flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto border-t md:border-none pt-6 md:pt-0">
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Total Amount</p>
                    <p className="text-2xl font-light tracking-tighter">
                      ₹{order.totalAmount.toLocaleString()}
                    </p>
                  </div>
                  <button className="md:mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400 hover:text-black transition-colors group">
                    Details <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
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
