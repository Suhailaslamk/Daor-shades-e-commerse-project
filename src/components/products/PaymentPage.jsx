
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../context/cartcontext";
// import { toast } from "react-toastify";


// export default function PaymentPage() {
//   const navigate = useNavigate();
//   const { cart, buyNow } = useCart();

//   const [details, setDetails] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     zip: "",
//     phone: "",
//   });

//   const totalAmount = cart.reduce(
//     (sum, item) => sum + item.price * (item.quantity || 1),
//     0
//   );

//   const handleChange = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

    
//     await buyNow(); 
//     navigate("/order-confirmed", { state: { details, totalAmount } });
//     toast.success("Placed Order Succsefully")
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-start bg-[#f5f5f0] py-16 px-4">
//       <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg">
//         <h1 className="text-2xl font-bold mb-6">Payment & Shipping</h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={details.name}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={details.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={details.address}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
//           />
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={details.city}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
//           />
//           <input
//             type="text"
//             name="zip"
//             placeholder="ZIP Code"
//             value={details.zip}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={details.phone}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
//           />

         
//           <div className="flex justify-between items-center mt-4 font-semibold text-lg">
//             <span>Total:</span>
//             <span>₹{totalAmount}</span>
//           </div>

//           <button
//             type="submit"
//             className="w-full mt-4 bg-black text-white py-3 rounded-md hover:bg-gray-800"
//           >
//             Confirm Order
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../context/cartcontext";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { ShieldCheck, ArrowRight, Lock } from "lucide-react";
// import api from "../../services/api";



// export default function PaymentPage() {
//   const navigate = useNavigate();
//   const { cart, buyNow } = useCart();

//   const [details, setDetails] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     zip: "",
//     phone: "",
//   });

//   const totalAmount = cart.reduce(
//     (sum, item) => sum + item.price * (item.quantity || 1),
//     0
//   );

//   const handleChange = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await buyNow();
//     navigate("/order-confirmed", { state: { details, totalAmount } });
//     toast.success("Transaction Verified");
//   };



//   const createOrder = async () => {
//   const res = await api.post("/orders", {
//     shippingAddressId: selectedAddressId,
//     cartItemIds: cart.map(i => i.cartItemId)
//   });

//   return res.data.data.id;
// };


// const createPayment = async (orderId) => {
//   const res = await api.post("/payments/create", { orderId });
//   return res.data.data;
// };




// await api.post("/orders/verify-payment", {
//   orderId,
//   paymentIntentId: response.razorpay_payment_id
// });




//   return (
//     <div className="min-h-screen bg-white text-zinc-900 pt-32 pb-20 px-6 md:px-12 lg:px-24">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
//         {/* LEFT: SHIPPING FORM */}
//         <div className="lg:w-3/5 space-y-12">
//           <header>
//             <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 block mb-2">Checkout</span>
//             <h1 className="text-5xl font-serif italic tracking-tighter">Shipping & Delivery</h1>
//           </header>

//           <form onSubmit={handleSubmit} className="space-y-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
//               <div className="relative group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="FULL NAME"
//                   value={details.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-zinc-200 py-3 text-[11px] tracking-widest outline-none focus:border-black transition-colors uppercase placeholder:text-zinc-300"
//                 />
//               </div>
//               <div className="relative group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="EMAIL ADDRESS"
//                   value={details.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-zinc-200 py-3 text-[11px] tracking-widest outline-none focus:border-black transition-colors uppercase placeholder:text-zinc-300"
//                 />
//               </div>
//               <div className="md:col-span-2 relative group">
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="STREET ADDRESS"
//                   value={details.address}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-zinc-200 py-3 text-[11px] tracking-widest outline-none focus:border-black transition-colors uppercase placeholder:text-zinc-300"
//                 />
//               </div>
//               <div className="relative group">
//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="CITY"
//                   value={details.city}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-zinc-200 py-3 text-[11px] tracking-widest outline-none focus:border-black transition-colors uppercase placeholder:text-zinc-300"
//                 />
//               </div>
//               <div className="relative group">
//                 <input
//                   type="text"
//                   name="zip"
//                   placeholder="POSTAL CODE"
//                   value={details.zip}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-zinc-200 py-3 text-[11px] tracking-widest outline-none focus:border-black transition-colors uppercase placeholder:text-zinc-300"
//                 />
//               </div>
//               <div className="md:col-span-2 relative group">
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="CONTACT NUMBER"
//                   value={details.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full bg-transparent border-b border-zinc-200 py-3 text-[11px] tracking-widest outline-none focus:border-black transition-colors uppercase placeholder:text-zinc-300"
//                 />
//               </div>
//             </div>

//             <div className="pt-10">
//                <div className="flex items-center gap-3 text-zinc-400 mb-8">
//                   <ShieldCheck size={18} strokeWidth={1} />
//                   <p className="text-[10px] uppercase tracking-widest">Secure encrypted transaction via Daor Gateway</p>
//                </div>
//                <button
//                   type="submit"
//                   className="w-full md:w-auto bg-black text-white px-16 py-6 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 group"
//                >
//                   Complete Acquisition
//                   <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                </button>
//             </div>
//           </form>
//         </div>

//         {/* RIGHT: ORDER SUMMARY CAPSULE */}
//         <aside className="lg:w-2/5">
//           <div className="bg-zinc-50 p-8 md:p-12 sticky top-32 border border-zinc-100">
//             <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-10 border-b border-zinc-200 pb-4">Bag Summary</h3>
            
//             <div className="space-y-6 max-h-[30vh] overflow-y-auto no-scrollbar mb-10">
//                {cart.map((item) => (
//                  <div key={item.id} className="flex justify-between items-center gap-4">
//                     <div className="flex items-center gap-4">
//                        <div className="w-12 h-16 bg-white overflow-hidden">
//                           <img src={item.imageUrl || item.image} alt="" className="w-full h-full object-cover grayscale" />
//                        </div>
//                        <div>
//                           <p className="text-[10px] uppercase tracking-wider font-medium">{item.name}</p>
//                           <p className="text-[9px] text-zinc-400 uppercase tracking-widest">QTY: {item.quantity}</p>
//                        </div>
//                     </div>
//                     <p className="text-xs font-light">₹{item.price * item.quantity}</p>
//                  </div>
//                ))}
//             </div>

//             <div className="space-y-4 pt-8 border-t border-zinc-200">
//               <div className="flex justify-between text-[10px] uppercase tracking-widest text-zinc-400">
//                 <span>Shipping</span>
//                 <span className="text-zinc-900 italic">Complimentary</span>
//               </div>
//               <div className="flex justify-between text-xs uppercase tracking-[0.2em] font-bold pt-2">
//                 <span>Total Amount</span>
//                 <span className="text-xl tracking-tighter">₹{totalAmount.toLocaleString()}</span>
//               </div>
//             </div>

//             <div className="mt-10 flex items-center justify-center gap-2 text-zinc-300 py-4 border-t border-dashed border-zinc-200">
//                <Lock size={12} />
//                <span className="text-[9px] uppercase tracking-widest font-medium">SSL Secure Checkout</span>
//             </div>
//           </div>
//         </aside>

//       </div>
//     </div>
//   );
// }





// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../context/cartcontext";
// import { toast } from "react-toastify";
// import { ShieldCheck, ArrowRight, Lock } from "lucide-react";
// import api from "../../api/api";

// export default function PaymentPage() {
//   const navigate = useNavigate();
//   const { cart } = useCart();

//   const [details, setDetails] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     zip: "",
//     phone: "",
//   });

//   const [shippingAddressId, setShippingAddressId] = useState(null);

//   // ----------------------------
//   // FETCH ACTIVE SHIPPING ADDRESS
//   // ----------------------------
//   useEffect(() => {
//     const loadAddress = async () => {
//       try {
//         const res = await api.get("/shipping-addresses/my");
//         const active = res.data.data.find(a => a.isActive);
//         if (!active) {
//           toast.error("Please add a shipping address");
//           navigate("/account/addresses");
//           return;
//         }
//         setShippingAddressId(active.id);
//       } catch {
//         toast.error("Failed to load address");
//       }
//     };

//     loadAddress();
//   }, [navigate]);

//   const totalAmount = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const handleChange = (e) => {
//     setDetails({ ...details, [e.target.name]: e.target.value });
//   };

//   // ----------------------------
//   // CREATE ORDER
//   // ----------------------------
//   const createOrder = async () => {
//     const res = await api.post("/orders", {
//       shippingAddressId,
//       cartItemIds: cart.map(i => i.cartItemId),
//     });
//     return res.data.data.id;
//   };

//   // ----------------------------
//   // CREATE PAYMENT (RAZORPAY)
//   // ----------------------------
//   const createPayment = async (orderId) => {
//     const res = await api.post("/payments/create", { orderId });
//     return res.data.data;
//   };

//   // ----------------------------
//   // OPEN RAZORPAY
//   // ----------------------------
//   const openRazorpay = (payment, orderId) => {
//     const options = {
//       key: payment.key,
//       amount: payment.amount * 100,
//       currency: payment.currency,
//       order_id: payment.razorpayOrderId,
//       name: "Daor Atelier",
//       description: "Order Payment",

//       handler: async function (response) {
//         await api.post("/orders/verify-payment", {
//           orderId,
//           paymentIntentId: response.razorpay_payment_id,
//         });

//         toast.success("Payment successful");
//         navigate("/order-confirmed");
//       },

//       theme: { color: "#000000" },
//     };

//     new window.Razorpay(options).open();
//   };

//   // ----------------------------
//   // SUBMIT
//   // ----------------------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const orderId = await createOrder();
//       const payment = await createPayment(orderId);
//       openRazorpay(payment, orderId);
//     } catch (err) {
//       console.error(err);
//       toast.error("Payment failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white pt-32 pb-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         <form onSubmit={handleSubmit} className="space-y-8">
//           <input name="name" placeholder="Name" onChange={handleChange} required />
//           <input name="email" placeholder="Email" onChange={handleChange} required />
//           <input name="address" placeholder="Address" onChange={handleChange} required />
//           <input name="city" placeholder="City" onChange={handleChange} required />
//           <input name="zip" placeholder="ZIP" onChange={handleChange} required />
//           <input name="phone" placeholder="Phone" onChange={handleChange} required />

//           <button type="submit" className="bg-black text-white px-10 py-4">
//             Pay ₹{totalAmount}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/api";
// import { toast } from "react-toastify";

// export default function PaymentPage() {
//   const navigate = useNavigate();
//   const [orderId, setOrderId] = useState(null);
//   const [orderData, setOrderData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 1️⃣ Get orderId from localStorage
//   useEffect(() => {
//     const id = localStorage.getItem("orderId");
//     if (!id) {
//       toast.error("Order not found. Please checkout again.");
//       navigate("/cart");
//       return;
//     }
//     setOrderId(id);
//   }, [navigate]);

//   // 2️⃣ Fetch order details
//   useEffect(() => {
//     if (!orderId) return;

//     const loadOrder = async () => {
//       try {
//         const res = await api.get(`/orders/${orderId}`);
//         setOrderData(res.data.data);
//       } catch (err) {
//         toast.error("Failed to fetch order details");
//         navigate("/cart");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadOrder();
//   }, [orderId, navigate]);

//   // 3️⃣ Create payment intent
//   const createPayment = async () => {
//     const res = await api.post("/payments/create", { orderId });
//     return res.data.data;
//   };

//   // 4️⃣ Open Razorpay
//   const openRazorpay = (payment) => {
//     const options = {
//       key: payment.key, // Razorpay key from backend
//       amount: payment.amount * 100,
//       currency: payment.currency,
//       order_id: payment.razorpayOrderId,
//       name: "Daor Atelier",
//       description: "Order Payment",
//       handler: async (response) => {
//         try {
//           await api.post("/orders/verify-payment", {
//             orderId,
//             paymentIntentId: response.razorpay_payment_id,
//           });

//           toast.success("Payment successful");
//           navigate("/order-confirmed");
//         } catch {
//           toast.error("Payment verification failed");
//         }
//       },
//       theme: { color: "#000000" },
//     };

//     new window.Razorpay(options).open();
//   };

//   const handlePayment = async () => {
//     try {
//       const payment = await createPayment();
//       openRazorpay(payment);
//     } catch {
//       toast.error("Payment failed");
//     }
//   };

//   if (loading) return <div className="h-screen flex items-center justify-center">Loading order...</div>;

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
//       <h1 className="text-3xl font-serif mb-6">Complete Payment</h1>
//       <p className="text-gray-700 mb-6">
//         Total Amount: ₹{orderData?.totalAmount.toLocaleString()}
//       </p>
//       <button
//         onClick={handlePayment}
//         className="bg-black text-white px-10 py-4"
//       >
//         Pay ₹{orderData?.totalAmount.toLocaleString()}
//       </button>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { toast } from "react-toastify";
import { useCart } from "../../context/cartcontext";
import { useWishlist } from "../../context/wishlistcontext";

export default function PaymentPage() {
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
   const {getCart } = useCart()
   const {getWishlist} = useWishlist()

  // 1️⃣ Read orderId (created in Cart, address selected already)
  useEffect(() => {
    const id = localStorage.getItem("orderId");

    if (!id) {
      toast.error("Order not found. Please checkout again.");
      navigate("/cart");
      return;
    }

    setOrderId(id);
  }, [navigate]);

  // 2️⃣ Fetch order details (safe amount from backend)
  useEffect(() => {
    if (!orderId) return;

    const fetchOrder = async () => {
      try {
        const res = await api.get(`/orders/${orderId}`);
        setOrderData(res.data.data);
      } catch (err) {
        toast.error("Failed to load order");
        navigate("/cart");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, navigate]);


  useEffect(() => {
  if (!orderData) return;

  if (orderData.status !== "PaymentPending") {
    navigate("/order-confirmed");
  }
}, [orderData, navigate]);

  // 3️⃣ Create Razorpay order (backend)
  const createPayment = async () => {
    const res = await api.post("/payments/create", { orderId });
    return res.data.data;
  };

  // 4️⃣ Open Razorpay Checkout
  const openRazorpay = (payment) => {
  if (!window.Razorpay) {
    toast.error("Razorpay SDK not loaded");
    return;
  }

  const options = {
    key: payment.key,
    amount: payment.amount * 100,
    currency: payment.currency,
    order_id: payment.razorpayOrderId,
    name: "Daor Atelier",
    description: "Order Payment",

    handler: async function (response) {
      try {
        await api.post("/orders/verify-payment", {
          orderId,
          paymentIntentId: response.razorpay_payment_id,
        });

        
       

        toast.success("Payment successful");
        await getCart();
        await getWishlist();
        navigate("/order-confirmed");
      } catch (err) {
        toast.error("Payment verification failed");
      }
    },

    modal: {
      ondismiss: function () {
        toast.info("Payment cancelled");
      },
    },

    theme: { color: "#000000" },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
  // 5️⃣ Pay button handler
  const handlePayment = async () => {
    try {
      const payment = await createPayment();
      openRazorpay(payment);
    } catch (err) {
      toast.error("Unable to initiate payment");
    }
  };

  // UI states
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading order...
      </div>
    );
  }


  const handleCOD = async () => {
  try {
    const res = await api.post(`/orders/cod?orderId=${orderId}`);

    if (res.data.statusCode !== 200) {
      toast.error(res.data.message || "Failed to place COD");
      return;
    }

    toast.success("Order placed (Cash on Delivery)");
    await getCart();
    await getWishlist();
    navigate("/order-confirmed");
  } catch (err) {
    console.error(err);
    toast.error("Network error. Please try again.");
  }
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-white">
      <h1 className="text-3xl font-serif mb-4">Complete Payment</h1>

      <p className="text-gray-600 mb-6">
        Order ID: <span className="font-mono">{orderId}</span>
      </p>

      <p className="text-xl mb-8">
        Total Amount:{" "}
        <strong>₹{orderData?.totalAmount.toLocaleString()}</strong>
      </p>

      <button
        onClick={handlePayment}
        className="bg-black text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-gray-800 transition"
      >
        Pay ₹{orderData?.totalAmount.toLocaleString()}
      </button>
      <button
  onClick={handleCOD}
  className="bg-black text-white px-4 py-4 m-2 uppercase tracking-widest text-sm hover:bg-gray-800 transition"
>
  Cash on Delivery
</button>
    </div>
  );
}
