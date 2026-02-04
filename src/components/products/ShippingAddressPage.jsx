
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/api";
// import { toast } from "react-toastify";
// import { useCart } from "../../context/cartcontext";

// export default function ShippingAddressPage() {
//   const navigate = useNavigate();
//   const { cart } = useCart();

//   const [addresses, setAddresses] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     addressLine: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "India",
//   });

//   const loadAddresses = async () => {
//     try {
//       const res = await api.get("/shipping-address/my");
//       setAddresses(res.data.data || []);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load addresses");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadAddresses();
//   }, []);

//   const handleAddAddress = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post("/shipping-address/add", form);
//       toast.success("Address added");
//       setShowForm(false);
//       loadAddresses();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Add address failed");
//     }
//   };

//   const handleSelectAddress = async (addressId) => {
//     if (cart.length === 0) {
//       toast.error("Cart is empty");
//       return navigate("/cart");
//     }

//     try {
//       const res = await api.post("/orders", {
//         cartItemIds: cart.map(i => i.cartItemId),
//         shippingAddressId: addressId,
//       });

//       localStorage.setItem("orderId", res.data.data.id);
//       navigate("/payment");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Order creation failed");
//     }
//   };

//   if (loading) {
//     return <div className="h-screen flex items-center justify-center">Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen px-6 py-20 bg-white max-w-3xl mx-auto">
//       <h1 className="text-3xl font-serif mb-6">Shipping Address</h1>

//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="bg-black text-white px-6 py-3 mb-6"
//       >
//         {showForm ? "Cancel" : "Add New Address"}
//       </button>

//       {addresses.map(addr => (
//         <div
//           key={addr.id}
//           onClick={() => handleSelectAddress(addr.id)}
//           className="border p-4 mb-4 cursor-pointer hover:border-black"
//         >
//           <p className="font-semibold">{addr.fullName}</p>
//           <p>{addr.addressLine}, {addr.city}</p>
//           <p>{addr.state}, {addr.postalCode}</p>
//           <p>{addr.country}</p>
//           <p>📞 {addr.phone}</p>
//         </div>
//       ))}

//       {showForm && (
//         <form onSubmit={handleAddAddress} className="border p-6 space-y-4">
//           {Object.keys(form).map(key => (
//             <input
//               key={key}
//               placeholder={key}
//               value={form[key]}
//               onChange={e => setForm({ ...form, [key]: e.target.value })}
//               required
//             />
//           ))}
//           <button className="bg-black text-white px-6 py-3">
//             Save Address
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }



























import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { toast } from "react-toastify";
import { useCart } from "../../context/cartcontext";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MapPin, Phone, ArrowRight, X } from "lucide-react";

export default function ShippingAddressPage() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
  });

  const loadAddresses = async () => {
    try {
      const res = await api.get("/shipping-address/my");
      setAddresses(res.data.data || []);
    } catch (err) {
      toast.error("Authentication required or failed to load");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadAddresses(); }, []);

  const handleAddAddress = async (e) => {
    e.preventDefault();
    try {
      await api.post("/shipping-address/add", form);
      toast.success("Address archived successfully");
      setShowForm(false);
      loadAddresses();
    } catch (err) {
      toast.error(err.response?.data?.message || "Entry failed");
    }
  };

  const handleSelectAddress = async (addressId) => {
    if (cart.length === 0) {
      toast.error("Cart is empty");
      return navigate("/cart");
    }
    try {
      const res = await api.post("/orders", {
        cartItemIds: cart.map(i => i.cartItemId),
        shippingAddressId: addressId,
      });
      localStorage.setItem("orderId", res.data.data.id);
      navigate("/payment");
    } catch (err) {
      toast.error("Order creation failed");
    }
  };

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="w-12 h-[1px] bg-zinc-200 animate-pulse" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 selection:bg-black selection:text-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <header className="mb-16 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold">Checkout Phase 01</span>
            <div className="h-[1px] w-20 bg-zinc-100" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif italic text-zinc-900 tracking-tighter">
            Shipping <span className="text-zinc-300">Destination</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* LEFT: ADDRESS SELECTION (8 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex justify-between items-end border-b border-zinc-100 pb-6">
              <h2 className="text-[11px] uppercase tracking-[0.3em] font-black text-zinc-900">Saved Addresses</h2>
              <button
                onClick={() => setShowForm(!showForm)}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-black transition-colors"
              >
                {showForm ? <X size={14} /> : <Plus size={14} />}
                {showForm ? "Close Form" : "Add New Profile"}
              </button>
            </div>

            <div className="grid gap-6">
              {addresses.map((addr, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={addr.id}
                  onClick={() => handleSelectAddress(addr.id)}
                  className="group relative border border-zinc-100 p-8 cursor-pointer hover:border-black transition-all duration-500 bg-[#FAFAFA] hover:bg-white"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-4">
                      <p className="text-[13px] uppercase tracking-[0.2em] font-black text-black">{addr.fullName}</p>
                      <div className="space-y-1 text-zinc-500 text-[12px] font-light leading-relaxed">
                        <p>{addr.addressLine}</p>
                        <p>{addr.city}, {addr.state} {addr.postalCode}</p>
                        <p className="tracking-[0.2em] text-[10px] uppercase pt-2">{addr.country}</p>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400 pt-2">
                        <Phone size={12} strokeWidth={1} />
                        <span className="text-[11px] font-mono">{addr.phone}</span>
                      </div>
                    </div>
                    <ArrowRight size={20} className="text-zinc-200 group-hover:text-black group-hover:translate-x-2 transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
              
              {addresses.length === 0 && !showForm && (
                <div className="py-20 text-center border border-dashed border-zinc-200">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">No addresses on file</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: ADDRESS FORM (5 Cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence>
              {showForm && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="sticky top-32"
                >
                  <div className="bg-zinc-950 p-10 text-white shadow-2xl">
                    <h3 className="text-[11px] uppercase tracking-[0.4em] font-black mb-10 text-zinc-400">New Dispatch Profile</h3>
                    
                    <form onSubmit={handleAddAddress} className="space-y-8">
                      <div className="grid gap-6">
                        {Object.keys(form).map((key) => (
                          <div key={key} className="relative group">
                            <input
                              type="text"
                              value={form[key]}
                              onChange={e => setForm({ ...form, [key]: e.target.value })}
                              className="w-full bg-transparent border-b border-zinc-800 py-3 text-[12px] uppercase tracking-[0.1em] focus:border-white outline-none transition-colors placeholder:text-zinc-700"
                              placeholder={key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                              required
                            />
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-white text-black py-5 text-[10px] uppercase tracking-[0.4em] font-black hover:bg-zinc-200 transition-colors flex items-center justify-center gap-4 group">
                        Save Archive
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}