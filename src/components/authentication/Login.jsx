// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { NavLink,useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/authcontext";





//  export default function Login() {
  
//   const[email,setEmail]=useState("")
//    const [password, setPassword] = useState("");
//   const [localError, setLocalError] = useState("");
    
//    const { login, error,user } = useAuth();
// const navigate = useNavigate();

  
  
// const handleLogin = async (e) => {
//   e.preventDefault();
//   setLocalError("")
    
   

//  if (!email || !password) {
//       setLocalError("Please fill in all fields.");
//       return;
//     }

//     const success = await login(email, password);
//     if (success) {
//       if(user.role === "admin"){
//       navigate("/admin"); 
//     } else {
//       navigate('/');
//     }
//   }else{
//       setLocalError("Invalid email or password.")
//     }
//   };

//    useEffect(()=> {
//   if(user){
//     if(user.role === "admin"){
//        navigate("/admin");
//     }else{
//        navigate("/");
//     }
//   }
// },[user,navigate])





//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
//        <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-[0_0_40px_rgba(255,255,255,0.05)]">




          


// <h2 className="text-5xl text-center font-[Cinzel] tracking-[0.3em] text-slate-100 mb-8">
//           Daor
//         </h2>

        


//        <form onSubmit={handleLogin} className="space-y-6">


         


//        <div>
//         <label className="block text-slate-300 text-sm mb-2">Email</label>
//         <input 

//         type="email"
       
//         value={email}
//         onChange={(e)=> setEmail(e.target.value)}
//         className="w-full px-4 py-3 bg-gray-800 text-slate-100 rounded-lg focus:outline-none border border-gray-700 focus:border-slate-400 transition-all duration-300"
//             />
//        </div>

       
//        <div> 
//        <label className="block text-slate-300 text-sm mb-2">Password</label>
//        <input 
//        type="password"
      
//        value={password}
//        onChange={(e)=> setPassword(e.target.value)}
//        className="w-full px-4 py-3 bg-gray-800 text-slate-100 rounded-lg focus:outline-none border border-gray-700 focus:border-slate-400 transition-all duration-300"
//        />
// </div>


       
//           {(localError || error) && (
//             <p className="text-red-400 text-sm text-center">
//               {localError || error}
//             </p>
//           )}

       

        



//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             className="w-full mt-4 bg-white text-gray-900 py-3 rounded-full font-semibold tracking-wide hover:bg-slate-100 transition-colors duration-300"
//           >Login
//           </motion.button>
//         </form>

        
        
        
        

//         <div className="text-center mt-6 text-slate-400 text-sm space-y-2">
//           <p>
//             Don't have an account?{" "}
//             <NavLink to="/signup"  className="text-white hover:underline">
//             Sign up</NavLink>
//           </p>

//           <NavLink to="#" className="text-slate-400 hover:text-white text-sm">Forgot Password?</NavLink>

//         </div>
//         </motion.div>
      

//     </div>
//   )
// }




// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/authcontext";
// import { ArrowRight } from "lucide-react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [localError, setLocalError] = useState("");

//   const { login, error, user } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLocalError("");
//     if (!email || !password) {
//       setLocalError("Please fill in all fields.");
//       return;
//     }
//     const success = await login(email, password);
//     if (success) {
//       if (user.role === "admin") navigate("/admin");
//       else navigate("/");
//     } else {
//       setLocalError("Invalid email or password.");
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       if (user.role === "admin") navigate("/admin");
//       else navigate("/");
//     }
//   }, [user, navigate]);

//   return (
//     <div className="min-h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      
//       {/* Left Side: Editorial Image/Video Mood */}
//       <div className="hidden md:block md:w-1/2 relative bg-zinc-100">
//         <img 
//           src="https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRC02/E16KFE08Z/SPRC02_E16K_FE08Z_C_057_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg" 
//           alt="Luxury Mood" 
//           className="absolute inset-0 w-full h-full object-cover grayscale"
//         />
//         <div className="absolute inset-0 bg-black/10" />
//         <div className="absolute bottom-12 left-12 text-white z-10">
//           <p className="text-[10px] uppercase tracking-[0.8em] mb-2 text-zinc-300">New Perspective</p>
//           <h1 className="text-4xl font-serif italic tracking-tighter">The Winter Collection</h1>
//         </div>
//       </div>

//       {/* Right Side: Minimalist Login Form */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 bg-white">
//         <motion.div 
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="w-full max-w-sm"
//         >
//           {/* Brand Header */}
//           <header className="mb-16 text-center md:text-left">
//             <h2 
//               className="text-6xl md:text-7xl font-serif italic tracking-tighter text-zinc-900 mb-4 cursor-pointer"
//               onClick={() => navigate("/")}
//             >
//               Daor
//             </h2>
//             <div className="w-12 h-[1px] bg-zinc-900 mb-6 mx-auto md:mx-0" />
//             <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">Sign in to your account</p>
//           </header>

//           <form onSubmit={handleLogin} className="space-y-12">
            
//             {/* Input Group: Email */}
//             <div className="relative group">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder=" "
//                 className="peer w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-zinc-900 transition-colors text-sm tracking-widest uppercase"
//               />
//               <label className="absolute left-0 top-3 text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-zinc-900 peer-[:not(:placeholder-shown)]:-top-4">
//                 Email
//               </label>
//             </div>

//             {/* Input Group: Password */}
//             <div className="relative group">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder=" "
//                 className="peer w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-zinc-900 transition-colors text-sm tracking-widest"
//               />
//               <label className="absolute left-0 top-3 text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-zinc-900 peer-[:not(:placeholder-shown)]:-top-4">
//                 Password
//               </label>
//             </div>

//             {/* Error Message */}
//             <AnimatePresence>
//               {(localError || error) && (
//                 <motion.p 
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="text-red-500 text-[10px] uppercase tracking-widest font-bold"
//                 >
//                   {localError || error}
//                 </motion.p>
//               )}
//             </AnimatePresence>

//             {/* Submit Button */}
//             <div className="pt-4">
//               <motion.button
//                 whileHover={{ gap: "1.5rem" }}
//                 type="submit"
//                 className="w-full flex items-center justify-between border-b-2 border-zinc-900 py-4 text-[11px] uppercase tracking-[0.5em] font-bold group transition-all"
//               >
//                 Sign In
//                 <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
//               </motion.button>
//             </div>
//           </form>

//           {/* Footer Links */}
//           <footer className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6">
//             <NavLink to="/signup" className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors border-b border-transparent hover:border-zinc-950 pb-1">
//               Create Account
//             </NavLink>
//             <NavLink to="#" className="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors">
//               Forgot Password?
//             </NavLink>
//           </footer>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/authcontext";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [localError, setLocalError] = useState("");

//   const { login, error, user } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLocalError("");
//     if (!email || !password) {
//       setLocalError("Please fill in all fields.");
//       return;
//     }
//     const success = await login(email, password);
//     if (success) {
//       if (user.role === "admin") navigate("/admin");
//       else navigate("/");
//     } else {
//       setLocalError("Invalid email or password.");
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       if (user.role === "admin") navigate("/admin");
//       else navigate("/");
//     }
//   }, [user, navigate]);

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
//       {/* FULL SCREEN BACKGROUND IMAGE */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src="https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRC02/E16KFE08Z/SPRC02_E16K_FE08Z_C_057_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg" 
//           alt="Luxury Background" 
//           className="w-full h-full object-cover grayscale-[0.3]"
//         />
//         {/* VIGNETTE OVERLAY FOR READABILITY */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
//       </div>

//       {/* LOGIN CARD */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//         className="relative z-10 w-full max-w-[450px] px-6"
//       >
//         <div className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
//           {/* BRANDING */}
//           <header className="text-center mb-12">
//             <h2 
//               className="text-6xl md:text-7xl font-serif italic tracking-tighter text-white mb-2 cursor-pointer drop-shadow-lg"
//               onClick={() => navigate("/")}
//             >
//               Daor
//             </h2>
//             <p className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 font-light">
//               Private Atelier
//             </p>
//           </header>

//           <form onSubmit={handleLogin} className="space-y-10">
            
//             {/* EMAIL */}
//             <div className="relative group">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder=" "
//                 className="peer w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-all duration-500 text-white text-sm tracking-widest"
//               />
//               <label className="absolute left-0 top-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4">
//                 Identity / Email
//               </label>
//             </div>

//             {/* PASSWORD */}
//             <div className="relative group">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder=" "
//                 className="peer w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-all duration-500 text-white text-sm tracking-widest"
//               />
//               <label className="absolute left-0 top-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4">
//                 Access Code
//               </label>
//             </div>

//             {/* ERRORS */}
//             <AnimatePresence>
//               {(localError || error) && (
//                 <motion.p 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-red-400 text-[10px] uppercase tracking-widest text-center font-bold"
//                 >
//                   {localError || error}
//                 </motion.p>
//               )}
//             </AnimatePresence>

//             {/* BUTTON */}
//             <motion.button
//               whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#000000" }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               className="w-full py-4 border border-white/50 text-white text-[11px] uppercase tracking-[0.4em] font-bold rounded-full transition-all duration-500"
//             >
//               Enter the House
//             </motion.button>
//           </form>

//           {/* FOOTER */}
//           <footer className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
//             <NavLink to="/signup" className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
//               Request Membership
//             </NavLink>
//             <NavLink to="#" className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 hover:text-zinc-400">
//               Recovery Access
//             </NavLink>
//           </footer>
//         </div>
//       </motion.div>
//     </div>
//   );
// }












// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/authcontext";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [localError, setLocalError] = useState("");
//     const location = useLocation();


//   const { login, error, user } = useAuth();
//   const navigate = useNavigate();

//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   setLocalError("");
//   //   if (!email || !password) {
//   //     setLocalError("Please fill in all fields.");
//   //     return;
//   //   }


//   const handleLogin = async (e) => {
//   e.preventDefault();
//   setLocalError("");

//   if (!email || !password) {
//     setLocalError("Please fill in all fields.");
//     return;
//   }

//   const success = await login(email, password);
//   if (!success) {
//     setLocalError("Invalid email or password.");
//     return;
//   }

//   // ✅ REDIRECT LOGIC (ONLY PLACE)
//   const from = location.state?.from?.pathname;

//   // admin always goes to admin
//   if (success.role === "admin") {
//     navigate("/admin", { replace: true });
//   } else {
//     navigate(from || "/", { replace: true });
//   }
// };
//     const handleLoginSuccess = () => {
//   // Check if a "from" path exists, otherwise go to home "/"
//   const destination = location.state?.from || "/";
//   navigate(destination, { replace: true });
// };

// const from = location.state?.from?.pathname || "/";

//     const success = await login(email, password);
//     if (success) {
//       if (user.role === "admin") navigate("/admin");
//       else navigate(from ,  { replace: true });
//     } else {
//       setLocalError("Invalid email or password.");
//     }
// }

  
//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
//       {/* CINEMATIC BACKGROUND */}
//       <motion.div 
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
//         className="absolute inset-0 z-0"
//       >
//         <img 
//           src="https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRC02/E16KFE08Z/SPRC02_E16K_FE08Z_C_057_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg" 
//           alt="Luxury background" 
//           className="w-full h-full object-cover opacity-60 grayscale-[0.5]"
//         />
//       </motion.div>

//       {/* OVERLAY GRADIENT */}
//       <div className="absolute inset-0 bg-black/40 z-[1]" />

//       {/* LOGIN CONTAINER */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//         className="relative z-10 w-[90%] max-w-[490px]"
//       >
//         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[20px] px-8 py-12 md:px-12 md:py-16 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
          
//           {/* HEADER */}
//           <div className="text-center mb-12">
//             <h2 
//               className="text-5xl md:text-6xl font-serif italic tracking-tighter text-white mb-4 cursor-pointer"
//               onClick={() => navigate("/")}
//             >
//               Daor
//             </h2>
//             <div className="flex items-center justify-center gap-4">
//               <div className="h-[1px] w-8 bg-white/30"></div>
//               <span className="text-[10px] uppercase tracking-[0.5em] text-white/60">The Atelier</span>
//               <div className="h-[1px] w-8 bg-white/30"></div>
//             </div>
//           </div>

//           <form onSubmit={handleLogin} className="space-y-8">
//             {/* EMAIL */}
//             <div className="relative border-b border-white/20 focus-within:border-white transition-all duration-500">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="EMAIL"
//                 className="w-full bg-transparent py-3 text-[12px] tracking-[0.2em] text-white outline-none placeholder:text-white/20 uppercase"
//               />
//             </div>

//             {/* PASSWORD */}
//             <div className="relative border-b border-white/20 focus-within:border-white transition-all duration-500">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="PASSWORD"
//                 className="w-full bg-transparent py-3 text-[12px] tracking-[0.2em] text-white outline-none placeholder:text-white/20 uppercase"
//               />
//             </div>

//             {/* ERROR */}
//             <AnimatePresence>
//               {(localError || error) && (
//                 <motion.p 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-red-400 text-[10px] tracking-[0.2em] uppercase text-center"
//                 >
//                   {localError || error}
//                 </motion.p>
//               )}
//             </AnimatePresence>

//             {/* BUTTON */}
//             <motion.button
//               whileHover={{ backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
//               type="submit"
//               className="w-full py-4 bg-white/10 border border-white/30 text-white text-[11px] font-bold uppercase tracking-[0.4em] transition-all duration-500 rounded-sm"
//             >
//               Sign In
//             </motion.button>
//           </form>

//           {/* FOOTER */}
//           <div className="mt-12 text-center flex flex-col gap-4">
//             <NavLink to="/signup" className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors underline underline-offset-4">
//               Create Account
//             </NavLink>
//             <NavLink to="#" className="text-[9px] uppercase tracking-[0.3em] text-white/30">
//               Forgot Access?
//             </NavLink>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }






// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/authcontext";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [localError, setLocalError] = useState("");

//   const { login, error } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLocalError("");

//     if (!email || !password) {
//       setLocalError("Please fill in all fields.");
//       return;
//     }

//     // login MUST return the logged-in user object
//     const loggedInUser = await login(email, password);

//     if (!loggedInUser) {
//       setLocalError("Invalid email or password.");
//       return;
//     }

//     // where user tried to go before login
//     const from = location.state?.from?.pathname || "/";

//     // admin override
//     const role =
//       typeof loggedInUser.role === "string"
//         ? loggedInUser.role.toLowerCase()
//         : loggedInUser.role === 2
//         ? "admin"
//         : "user";

//     if (role === "admin") {
//       navigate("/admin", { replace: true });
//     } else {
//       navigate(from, { replace: true });
//     }
//   };

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
//       {/* BACKGROUND */}
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
//         className="absolute inset-0 z-0"
//       >
//         <img
//           src="https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRC02/E16KFE08Z/SPRC02_E16K_FE08Z_C_057_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
//           alt="Luxury background"
//           className="w-full h-full object-cover opacity-60 grayscale-[0.5]"
//         />
//       </motion.div>

//       <div className="absolute inset-0 bg-black/40 z-[1]" />

//       {/* LOGIN CARD */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//         className="relative z-10 w-[90%] max-w-[490px]"
//       >
//         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[20px] px-8 py-12 md:px-12 md:py-16 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
//           {/* HEADER */}
//           <div className="text-center mb-12">
//             <h2
//               className="text-5xl md:text-6xl font-serif italic tracking-tighter text-white mb-4 cursor-pointer"
//               onClick={() => navigate("/")}
//             >
//               Daor
//             </h2>
//             <div className="flex items-center justify-center gap-4">
//               <div className="h-[1px] w-8 bg-white/30" />
//               <span className="text-[10px] uppercase tracking-[0.5em] text-white/60">
//                 The Atelier
//               </span>
//               <div className="h-[1px] w-8 bg-white/30" />
//             </div>
//           </div>

//           {/* FORM */}
//           <form onSubmit={handleLogin} className="space-y-8">
//             <div className="border-b border-white/20 focus-within:border-white transition">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="EMAIL"
//                 className="w-full bg-transparent py-3 text-[12px] tracking-[0.2em] text-white outline-none placeholder:text-white/20 uppercase"
//               />
//             </div>

//             <div className="border-b border-white/20 focus-within:border-white transition">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="PASSWORD"
//                 className="w-full bg-transparent py-3 text-[12px] tracking-[0.2em] text-white outline-none placeholder:text-white/20 uppercase"
//               />
//             </div>

//             <AnimatePresence>
//               {(localError || error) && (
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-red-400 text-[10px] tracking-[0.2em] uppercase text-center"
//                 >
//                   {localError || error}
//                 </motion.p>
//               )}
//             </AnimatePresence>

//             <motion.button
//               whileHover={{ backgroundColor: "#fff", color: "#000" }}
//               type="submit"
//               className="w-full py-4 bg-white/10 border border-white/30 text-white text-[11px] font-bold uppercase tracking-[0.4em] transition rounded-sm"
//             >
//               Sign In
//             </motion.button>
//           </form>

//           {/* FOOTER */}
//           <div className="mt-12 text-center flex flex-col gap-4">
//             <NavLink
//               to="/signup"
//               className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-white underline underline-offset-4"
//             >
//               Create Account
//             </NavLink>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }






"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");
  const { login, error, user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLocalError("");

    if (!email || !password) {
      setLocalError("Please fill in all fields.");
      return;
    }

    const result = await login(email, password);
     if (!result.success) {
    if (result.blocked) {
      navigate("/blocked")
    } else {
      setLocalError(result.message);
    }
  }
  };

  // ✅ ONLY REDIRECT AFTER USER IS READY
  // useEffect(() => {
  //   if (loading || !user) return;

  //   const from = location.state?.from?.pathname || "/";

  //   if (user.role === "admin") {
  //     navigate("/admin", { replace: true });
  //   } else {
  //     navigate(from, { replace: true });
  //   }
  // }, [user, loading, navigate, location]);


  useEffect(() => {
  if (loading) return;
  if (!user) return; // ⛔ do nothing if not logged in

  if (user.role === "admin") {
    navigate("/admin", { replace: true });
  } else {
    navigate("/", { replace: true });
  }
}, [user, loading, navigate]);
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* CINEMATIC BACKGROUND */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRC02/E16KFE08Z/SPRC02_E16K_FE08Z_C_057_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg" 
          alt="Luxury background" 
          className="w-full h-full object-cover opacity-60 grayscale-[0.5]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-[90%] max-w-[490px]"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[20px] px-8 py-12 shadow-lg">
          <form onSubmit={handleLogin} className="space-y-8">

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL"
              className="w-full bg-transparent text-white outline-none"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
              className="w-full bg-transparent text-white outline-none"
            />

            <AnimatePresence>
              {(localError || error) && (
                <motion.p className="text-red-400 text-xs text-center">
                  {localError || error}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ backgroundColor: "white", color: "black" }}
              type="submit"
              className="w-full py-4 bg-white/10 text-white"
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <NavLink to="/signup" className="text-white/60 text-xs">
              Create Account
            </NavLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
