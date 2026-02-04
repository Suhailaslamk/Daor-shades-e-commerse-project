


// // import { useLocation, useNavigate } from "react-router-dom";

// // export default function OrderConfirmed() {
// //   const location = useLocation();
// //   const navigate = useNavigate();

 
// //   const { details, totalAmount } = location.state || {};

// //   if (!details) {
    
// //     navigate("/products");
// //     return null;
// //   }

// //   return (
// //     <div className="min-h-screen flex flex-col justify-center items-center bg-[#f5f5f0] px-4 py-16">
// //       <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
// //         <h1 className="text-3xl font-bold text-green-600 mb-4"> Order Confirmed!</h1>
// //         <p className="text-gray-700 mb-6">
// //           Thank you, <span className="font-semibold">{details.name}</span>, for your purchase.
// //         </p>

// //         <div className="text-left mb-6 space-y-2">
// //           <p><span className="font-semibold">Email:</span> {details.email}</p>
// //           <p><span className="font-semibold">Phone:</span> {details.phone}</p>
// //           <p><span className="font-semibold">Address:</span> {details.address}, {details.city} - {details.zip}</p>
// //           <p><span className="font-semibold">Total Paid:</span> ₹{totalAmount}</p>
// //         </div>

// //         <button
// //           onClick={() => navigate("/products")}
// //           className="mt-4 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
// //         >
// //           Continue Shopping
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }




// import { useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Check, ArrowRight, Printer, Mail } from "lucide-react";

// export default function OrderConfirmed() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { details, totalAmount } = location.state || {};

//   if (!details) {
//     navigate("/products");
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-center items-center px-6 py-24">
      
//       {/* SUCCESS ICON ANIMATION */}
//       <motion.div 
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-8 shadow-xl"
//       >
//         <Check className="text-white" size={32} strokeWidth={1.5} />
//       </motion.div>

//       <motion.div 
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="max-w-xl w-full text-center"
//       >
//         <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 block mb-4">Transaction Successful</span>
//         <h1 className="text-5xl md:text-6xl font-serif italic tracking-tighter mb-6">Gratitude, {details.name.split(' ')[0]}.</h1>
//         <p className="text-zinc-500 font-light leading-relaxed mb-12">
//           Your acquisition is being prepared in our atelier. A confirmation has been dispatched to your digital address.
//         </p>

//         {/* SHIPMENT CERTIFICATE CARD */}
//         <div className="bg-zinc-50 border border-zinc-100 p-8 md:p-12 text-left space-y-8 relative overflow-hidden">
//           {/* Subtle Background Watermark */}
//           <div className="absolute -right-4 -bottom-4 text-zinc-100 pointer-events-none select-none">
//              <h2 className="text-8xl font-serif italic opacity-40">Daor</h2>
//           </div>

//           <div className="grid grid-cols-2 gap-8 relative z-10">
//             <div>
//               <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Delivery Address</p>
//               <p className="text-[11px] uppercase tracking-wider leading-relaxed">
//                 {details.address}<br />
//                 {details.city}, {details.zip}
//               </p>
//             </div>
//             <div className="text-right">
//               <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Payment Total</p>
//               <p className="text-xl font-light tracking-tighter">₹{totalAmount.toLocaleString()}</p>
//             </div>
//             <div>
//               <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Contact</p>
//               <p className="text-[11px] uppercase tracking-wider">{details.email}</p>
//               <p className="text-[11px] uppercase tracking-wider text-zinc-400 mt-1">{details.phone}</p>
//             </div>
//             <div className="text-right flex flex-col justify-end">
//                <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Status</p>
//                <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Processing</p>
//             </div>
//           </div>
//         </div>

//         {/* ACTIONS */}
//         <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
//           <button
//             onClick={() => navigate("/products")}
//             className="flex-1 bg-black text-white py-5 px-8 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group"
//           >
//             Return to Collection
//             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//           </button>
          
//           <button
//             onClick={() => window.print()}
//             className="border border-zinc-200 py-5 px-8 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-50 transition-all flex items-center justify-center gap-3"
//           >
//             <Printer size={14} /> Print Receipt
//           </button>
//         </div>

//         <div className="mt-12 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.3em] text-zinc-300">
//            <Mail size={12} /> concierge@daor-atelier.com
//         </div>
//       </motion.div>
//     </div>
//   );
// }











// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Check, ArrowRight, Printer, Mail } from "lucide-react";

// export default function OrderConfirmed() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { details, totalAmount } = location.state || {};

//   useEffect(() => {
//     if (!details) {
//       navigate("/products");
//     }
//   }, [details, navigate]); // run this effect once on mount

//   // If details is missing, render nothing while redirecting
//   if (!details) return null;

//   return (
//     <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-center items-center px-6 py-24">
//       {/* SUCCESS ICON ANIMATION */}
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-8 shadow-xl"
//       >
//         <Check className="text-white" size={32} strokeWidth={1.5} />
//       </motion.div>

//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="max-w-xl w-full text-center"
//       >
//         <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 block mb-4">
//           Transaction Successful
//         </span>
//         <h1 className="text-5xl md:text-6xl font-serif italic tracking-tighter mb-6">
//           Gratitude, {details.name.split(" ")[0]}.
//         </h1>
//         <p className="text-zinc-500 font-light leading-relaxed mb-12">
//           Your acquisition is being prepared in our atelier. A confirmation has been dispatched to your digital address.
//         </p>

//         {/* SHIPMENT CERTIFICATE CARD */}
//         <div className="bg-zinc-50 border border-zinc-100 p-8 md:p-12 text-left space-y-8 relative overflow-hidden">
//           <div className="absolute -right-4 -bottom-4 text-zinc-100 pointer-events-none select-none">
//             <h2 className="text-8xl font-serif italic opacity-40">Daor</h2>
//           </div>

//           <div className="grid grid-cols-2 gap-8 relative z-10">
//             <div>
//               <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Delivery Address</p>
//               <p className="text-[11px] uppercase tracking-wider leading-relaxed">
//                 {details.address}<br />
//                 {details.city}, {details.zip}
//               </p>
//             </div>
//             <div className="text-right">
//               <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Payment Total</p>
//               <p className="text-xl font-light tracking-tighter">₹{totalAmount.toLocaleString()}</p>
//             </div>
//             <div>
//               <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Contact</p>
//               <p className="text-[11px] uppercase tracking-wider">{details.email}</p>
//               <p className="text-[11px] uppercase tracking-wider text-zinc-400 mt-1">{details.phone}</p>
//             </div>
//             <div className="text-right flex flex-col justify-end">
//               <p className="text-[9px] uppercase tracking-widest text-zinc-400 mb-2">Status</p>
//               <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Processing</p>
//             </div>
//           </div>
//         </div>

//         {/* ACTIONS */}
//         <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
//           <button
//             onClick={() => navigate("/products")}
//             className="flex-1 bg-black text-white py-5 px-8 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group"
//           >
//             Return to Collection
//             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//           </button>

//           <button
//             onClick={() => window.print()}
//             className="border border-zinc-200 py-5 px-8 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-50 transition-all flex items-center justify-center gap-3"
//           >
//             <Printer size={14} /> Print Receipt
//           </button>
//         </div>

//         <div className="mt-12 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.3em] text-zinc-300">
//           <Mail size={12} /> concierge@daor-atelier.com
//         </div>
//       </motion.div>
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Check, ArrowRight, Printer, Mail } from "lucide-react";
// import api from "../../api/api";

// export default function OrderConfirmed() {
//   const navigate = useNavigate();
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       const orderId = localStorage.getItem("orderId");
//       if (!orderId) {
//         navigate("/products");
//         return;
//       }

//       try {
//         const res = await api.get(`/orders/${orderId}`);
//         setOrder(res.data.data);
//       } catch (err) {
//         navigate("/products");
//       } finally {
//         setLoading(false);
//         localStorage.removeItem("orderId");
//       }
//     };

//     fetchOrder();
//   }, [navigate]);

//   if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
//   if (!order) return null;

//   const details = {
//     name: order.items[0]?.ProductName || "Customer",
//     address: order.addressLine,
//     city: order.city,
//     zip: order.postalCode,
//     email: order.email,
//     phone: order.phone
//   };

//   const totalAmount = order.totalAmount;

//   return (
//     <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-center items-center px-6 py-24">
//       {/* SUCCESS ICON ANIMATION */}
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-8 shadow-xl"
//       >
//         <Check className="text-white" size={32} strokeWidth={1.5} />
//       </motion.div>

//       <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-xl w-full text-center">
//         <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 block mb-4">Transaction Successful</span>
//         <h1 className="text-5xl md:text-6xl font-serif italic tracking-tighter mb-6">
//           Gratitude, {details.name.split(" ")[0]}.
//         </h1>
//         <p className="text-zinc-500 font-light leading-relaxed mb-12">
//           Your acquisition is being prepared in our atelier. A confirmation has been dispatched to your digital address.
//         </p>
//         {/* … rest of your order details card … */}
//       </motion.div>
//     </div>
//   );
// }




// OrderConfirmed.jsx
// import { useLocation, useNavigate } from "react-router-dom";

// export default function OrderConfirmed() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const orderData = location.state?.details;
//   const totalAmount = location.state?.totalAmount;

//   useEffect(() => {
//     if (!orderData) {
//       navigate("/products"); // fallback
//     }
//   }, [orderData, navigate]);

//   if (!orderData) return null;

//   return (
//     <div>
//       <h1>Thank you, {orderData.name.split(" ")[0]}</h1>
//       <p>Total: ₹{totalAmount}</p>
//       {/*  */}
//     </div>
//   );






// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/api";

// export default function OrderConfirmed() {
//   const navigate = useNavigate();
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     const orderId = localStorage.getItem("orderId");
//     if (!orderId) {
//       navigate("/products");
//       return;
//     }

//     api.get(`/orders/${orderId}`)
//       .then(res => setOrder(res.data.data))
//       .catch(() => navigate("/products"));
//   }, [navigate]);

//   if (!order) return <div className="h-screen flex items-center justify-center">Loading...</div>;

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-serif mb-4">Order Confirmed</h1>
//       <p>Total Amount: ₹{order.totalAmount}</p>
//       <p>Status: {order.status}</p>
//       <button
//   onClick={() => {
//     localStorage.removeItem("orderId");
//     navigate("/products");
//   }}
// >
//   Continue Shopping
// </button>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/api";

// export default function OrderConfirmed() {
//   const navigate = useNavigate();
//   const [order, setOrder] = useState(null);
//   const orderId = localStorage.getItem("orderId");

//   useEffect(() => {
//     if (!orderId) {
//       navigate("/orders");
//       return;
//     }

//     api.get(`/orders/${orderId}`)
//       .then(res => setOrder(res.data.data))
//       .catch(() => navigate("/orders"));
//   }, [orderId, navigate]);

//   if (!order) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         Loading order...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white px-6 py-20 flex flex-col items-center">
//       <h1 className="text-4xl font-serif mb-4">Order Confirmed</h1>

//       <p className="mb-2 text-gray-600">Order ID: {order.id}</p>
//       <p className="mb-2">Status: <strong>{order.status}</strong></p>
//       <p className="mb-6 text-lg">
//         Total: ₹{order.totalAmount.toLocaleString()}
//       </p>

//       <div className="w-full max-w-md border p-4 mb-6">
//         {order.items.map((item, i) => (
//           <div key={i} className="flex justify-between text-sm mb-2">
//             <span>{item.productName} × {item.quantity}</span>
//             <span>₹{item.price * item.quantity}</span>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={() => {
//           localStorage.removeItem("orderId");
//           navigate("/orders");
//         }}
//         className="bg-black text-white px-8 py-3"
//       >
//         View My Orders
//       </button>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";

export default function OrderConfirmed() {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const orderId = localStorage.getItem("orderId");

    if (!orderId) {
      navigate("/products");
      return;
    }

    api
      .get(`/orders/${orderId}`)
      .then((res) => setOrder(res.data.data))
      .catch(() => navigate("/products"))
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading order...
      </div>
    );
  }

  if (!order) return null;

  return (
    <div className="min-h-screen bg-white px-6 py-20 flex justify-center">
      <div className="max-w-xl w-full space-y-6 text-center">
        <h1 className="text-4xl font-serif">Order Confirmed 🎉</h1>

        <p className="text-gray-600">
          Order ID: <span className="font-mono">{order.id}</span>
        </p>

        <p className="text-xl">
          Total Amount: <strong>₹{order.totalAmount}</strong>
        </p>

        <p className="uppercase tracking-widest text-sm">
          Status: <strong>{order.status}</strong>
        </p>

        <div className="border-t pt-4 text-left">
          <h3 className="font-semibold mb-2">Items</h3>
          {order.items?.map((item, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span>
                {item.productName} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 space-y-3">
          <button
            onClick={() => {
              localStorage.removeItem("orderId");
              navigate("/orders-page");
            }}
            className="w-full bg-black text-white py-3"
          >
            View My Orders
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("orderId");
              navigate("/products");
            }}
            className="w-full border border-black py-3"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}




// export default function OrderConfirmed() {
//   const navigate = useNavigate();
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     const orderId = localStorage.getItem("orderId");
//     if (!orderId) return;

//     api.get(`/orders/${orderId}`)
//       .then(res => setOrder(res.data.data))
//       .catch(() => navigate("/products"));
//   }, [navigate]);

//   if (!order) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Order Confirmed</h1>
//       <p>Total: ₹{order.totalAmount}</p>
//       <p>Status: {order.status}</p>

//       <button
//         onClick={() => {
//           localStorage.removeItem("orderId");
//           navigate("/products");
//         }}
//       >
//         Continue Shopping
//       </button>
//     </div>
//   );
// }