// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/authcontext";


// export default function UserDetails() {
//   const { user } = useAuth();
//   const navigate = useNavigate();

  
//   if (!user) {
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-[#f5f5f0] flex justify-center items-center px-4 py-16 mt-16">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-3xl font-bold mb-6">User Details</h1>
//         <div className="space-y-3 text-gray-700">
//           <p>
//             <span className="font-semibold">Username:</span> {user.username}
//           </p>
//           <p>
//             <span className="font-semibold">Name:</span> {user.name || "-"}
//           </p>
//           <p>
//             <span className="font-semibold">Email:</span> {user.email}
//           </p>
//           <p>
//             <span className="font-semibold">Phone:</span> {user.phone || "-"}
//           </p>
//           <p>
//             <span className="font-semibold">Address:</span> {user.address || "-"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { useCart } from "../context/cartcontext";

export default function UserDetails() {
  const { user,logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

    const handleLogout = () => {
    logout();
     // Close mobile menu on logout
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-white flex justify-center items-center px-6 py-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[40vh] bg-zinc-50 -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 block mb-4">Account Overview</span>
          <h1 className="text-5xl md:text-6xl font-serif italic tracking-tighter text-zinc-900">
            Welcome, {user.username}
          </h1>
        </div>

        <div className="bg-white border border-zinc-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* Sidebar / Member Card */}
          <div className="bg-zinc-950 p-10 text-white md:w-1/3 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <User size={32} strokeWidth={1} className="text-white" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 mb-1">Membership Status</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm tracking-widest uppercase">Privilege Member</span>
                  <ShieldCheck size={14} className="text-zinc-400" />
                </div>
              </div>
            </div>
            
            <div className="mt-12 md:mt-0">
              <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 mb-1">Joined Atelier</p>
              <p className="text-xs tracking-widest uppercase italic">Winter 2025</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-10 md:p-16 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
              
              <DetailItem 
                label="Full Identity" 
                value={user.name || user.username} 
                icon={<User size={16}/>} 
              />
              <DetailItem 
                label="Digital Address" 
                value={user.email} 
                icon={<Mail size={16}/>} 
              />
              <DetailItem 
                label="Contact Line" 
                value={user.phone || "Not provided"} 
                icon={<Phone size={16}/>} 
              />
              <DetailItem 
                label="Shipping Residence" 
                value={user.address || "No address on file"} 
                icon={<MapPin size={16}/>} 
              />

            </div>

            {/* Action Buttons */}
            <div className="mt-16 pt-10 border-t border-zinc-100 flex flex-wrap gap-6">
              <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-zinc-900 pb-1 hover:text-zinc-500 transition-colors">
                Edit Profile
              </button>
              <button onClick={handleLogout} className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-red-500 transition-colors">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DetailItem({ label, value, icon }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-zinc-400">
        {icon}
        <p className="text-[9px] uppercase tracking-[0.4em] font-medium">{label}</p>
      </div>
      <p className="text-sm text-zinc-800 tracking-wide">{value}</p>
    </div>
  );
}