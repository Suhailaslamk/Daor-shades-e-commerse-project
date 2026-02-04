// import React, { useState ,useEffect} from 'react'
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from '../../context/authcontext';



// export default function Signup() {
//     const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [localError, setLocalError] = useState("");

//   const { signup, error,user } = useAuth();
//   const navigate = useNavigate();
    

//   const handleSignup = async (e) => {
//     e.preventDefault();


//      if (!username || !email || !password || !confirmPassword) {
//       setLocalError("All fields are required.");
//       return;
//     }


//      if (password !== confirmPassword) {
//       setLocalError("Passwords do not match.");
//       return;
//     }

// setLocalError("");
//     const success = await signup(username, email, password);
//     if (success) navigate("/login");
//   };

   
//   useEffect(()=> {
//     if(user)
//       navigate('/')
//   },[user,navigate])


//    return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4  ">
//         <motion.div
//         initial={{opacity: 0, y: 40}}
//         animate={{opacity: 1, y: 0}}
//         transition={{ duration: 0.8 }}
//         className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-[0_0_40px_rgba(255,255,255,0.05)]">

           



//           <h2 className="text-5xl text-center font-[Cinzel] tracking-[0.3em] text-slate-100 mb-8">
//           Daor
//         </h2> 
//          <form onSubmit={handleSignup} className="space-y-6">
           
//            <div>
//             <label className="block text-slate-300 text-sm mb-2">Full Name</label>
//             <input 
//             type="text"
            
//             value={username}
//             onChange={(e)=>setUsername(e.target.value)}
//             className="w-full px-4 py-3 bg-gray-800 text-slate-100 rounded-lg focus:outline-none border border-gray-700 focus:border-slate-400 transition-all duration-300" />
//             </div>


          
//           <div>
//             <label className="block text-slate-300 text-sm mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 bg-gray-800 text-slate-100 rounded-lg focus:outline-none border border-gray-700 focus:border-slate-400 transition-all duration-300"
//             />
//             </div>

 

// <div>
//     <label  className="block text-slate-300 text-sm mb-2" >Password</label>
//     <input 
//     type="password"
    
//     value={password}
//     onChange={(e)=> setPassword(e.target.value)}
//     className="w-full px-4 py-3 bg-gray-800 text-slate-100 rounded-lg focus:outline-none border border-gray-700 focus:border-slate-400 transition-all duration-300" />
// </div>






//           <div>
//             <label className="block text-slate-300 text-sm mb-2">Confirm Password</label>
//             <input
//               type="password"
             
//               value={confirmPassword}
//               onChange={(e)=> setConfirmPassword(e.target.value)}
//               placeholder="••••••••"
//               className="w-full px-4 py-3 bg-gray-800 text-slate-100 rounded-lg focus:outline-none border border-gray-700 focus:border-slate-400 transition-all duration-300"
//             />
//           </div>


//           {(localError || error) && (
//             <p className="text-red-400 text-sm text-center">{localError || error}</p>
//           )}






//           <motion.button
//   whileHover={{ scale: 1.03 }}
//   whileTap={{ scale: 0.97 }}
//   type="submit"
//   className="w-full mt-4 bg-white text-gray-900 py-3 rounded-full font-semibold tracking-wide hover:bg-slate-100 transition-colors duration-300"
// >
//   Sign Up
// </motion.button>
//         </form>


         
//         <div className="text-center mt-6 text-slate-400 text-sm">
//           <p>
//             Already have an account?{" "}
//             <Link to="/login" className="text-white hover:underline">
//               Login
//             </Link>
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// } 



// "use client";
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from '../../context/authcontext';

// export default function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [localError, setLocalError] = useState("");

//   const { signup, error, user } = useAuth();
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (!username || !email || !password || !confirmPassword) {
//       setLocalError("All fields are required.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setLocalError("Passwords do not match.");
//       return;
//     }

//     setLocalError("");
//     const success = await signup(username, email, password);
//     if (success) navigate("/login");
//   };

//   useEffect(() => {
//     if (user) navigate('/');
//   }, [user, navigate]);

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-12">
//       {/* CINEMATIC BACKGROUND */}
//       <motion.div 
//         initial={{ scale: 1.15 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
//         className="absolute inset-0 z-0"
//       >
//         <img 
//           src="https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRA06/E16KFE08Z/SPRA06_E16K_FE08Z_C_050_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg" 
//           alt="Luxury background" 
//           className="w-full h-full object-cover opacity-50 grayscale-[0.4]"
//         />
//       </motion.div>

//       {/* OVERLAY GRADIENT */}
//       <div className="absolute inset-0 bg-black/50 z-[1]" />

//       {/* SIGNUP CONTAINER */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//         className="relative z-10 w-[90%] max-w-[420px]"
//       >
//         <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[20px] px-8 py-10 md:px-12 md:py-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]">
          
//           {/* HEADER */}
//           <div className="text-center mb-10">
//             <h2 
//               className="text-5xl md:text-6xl font-serif italic tracking-tighter text-white mb-4 cursor-pointer"
//               onClick={() => navigate("/")}
//             >
//               Daor
//             </h2>
//             <div className="flex items-center justify-center gap-4">
//               <div className="h-[1px] w-6 bg-white/20"></div>
//               <span className="text-[9px] uppercase tracking-[0.6em] text-white/50">Registration</span>
//               <div className="h-[1px] w-6 bg-white/20"></div>
//             </div>
//           </div>

//           <form onSubmit={handleSignup} className="space-y-6">
//             {/* FULL NAME */}
//             <div className="relative border-b border-white/20 focus-within:border-white transition-all duration-500">
//               <input 
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="FULL NAME"
//                 className="w-full bg-transparent py-2 text-[11px] tracking-[0.2em] text-white outline-none placeholder:text-white/20 uppercase"
//               />
//             </div>

//             {/* EMAIL */}
//             <div className="relative border-b border-white/20 focus-within:border-white transition-all duration-500">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="EMAIL ADDRESS"
//                 className="w-full bg-transparent py-2 text-[11px] tracking-[0.2em] text-white outline-none placeholder:text-white/20 uppercase"
//               />
//             </div>

//             {/* PASSWORD */}
//             <div className="relative border-b border-white/20 focus-within:border-white transition-all duration-500">
//               <input 
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="PASSWORD"
//                 className="w-full bg-transparent py-2 text-[11px] tracking-[0.2em] text-white outline-none placeholder:text-white/20 uppercase"
//               />
//             </div>

//             {/* CONFIRM PASSWORD */}
//             <div className="relative border-b border-white/20 focus-within:border-white transition-all duration-500">
//               <input 
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="CONFIRM PASSWORD"
//                 className="w-full bg-transparent py-2 text-[11px] tracking-[0.2em] text-white outline-none placeholder:text-white/20 uppercase"
//               />
//             </div>

//             {/* ERROR */}
//             <AnimatePresence>
//               {(localError || error) && (
//                 <motion.p 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-red-400 text-[10px] tracking-[0.2em] uppercase text-center font-semibold"
//                 >
//                   {localError || error}
//                 </motion.p>
//               )}
//             </AnimatePresence>

//             {/* BUTTON */}
//             <motion.button
//               whileHover={{ backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               className="w-full py-4 mt-4 bg-white/10 border border-white/30 text-white text-[11px] font-bold uppercase tracking-[0.4em] transition-all duration-500 rounded-sm shadow-lg"
//             >
//               Create Account
//             </motion.button>
//           </form>

//           {/* FOOTER */}
//           <div className="mt-10 text-center">
//             <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
//               Already a member?{" "}
//               <Link to="/login" className="text-white hover:text-white/80 transition-colors underline underline-offset-4">
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/authcontext';

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const { signup, error, user } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setLocalError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }

    setLocalError("");
    const success = await signup(username, email, password);
    if (success) navigate("/login");
  };

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-12">
      {/* CINEMATIC BACKGROUND */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRA06/E16KFE08Z/SPRA06_E16K_FE08Z_C_050_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg" 
          alt="Luxury background" 
          className="w-full h-full object-cover opacity-50 grayscale-[0.4]"
        />
      </motion.div>

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* SIGNUP CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-[90%] max-w-[490px]"
      >
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[20px] px-8 py-10 md:px-12 md:py-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]">
          
          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 
              className="text-5xl md:text-6xl font-serif italic tracking-tighter text-white mb-4 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Daor
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-6 bg-white/20"></div>
              <span className="text-[9px] uppercase tracking-[0.6em] text-white/50">Registration</span>
              <div className="h-[1px] w-6 bg-white/20"></div>
            </div>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            {/* FULL NAME */}
            <div className="relative border-b border-white/20 focus-within:border-white transition-all duration-500">
              <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="FULL NAME"
                className="w-full bg-transparent py-2 text-[13px] text-white outline-none placeholder:text-[10px] placeholder:tracking-[0.3em] placeholder:text-white/30"
              />
            </div>

            {/* EMAIL */}
            <div className="relative border-b border-white/20 focus-within:border-white transition-all duration-500">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent py-2 text-[13px] text-white outline-none placeholder:text-[10px] placeholder:tracking-[0.3em] placeholder:text-white/30"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative border-b border-white/20 focus-within:border-white transition-all duration-500">
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
                className="w-full bg-transparent py-2 text-[13px] text-white outline-none placeholder:text-[10px] placeholder:tracking-[0.3em] placeholder:text-white/30"
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative border-b border-white/20 focus-within:border-white transition-all duration-500">
              <input 
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="CONFIRM PASSWORD"
                className="w-full bg-transparent py-2 text-[13px] text-white outline-none placeholder:text-[10px] placeholder:tracking-[0.3em] placeholder:text-white/30"
              />
            </div>

            {/* ERROR */}
            <AnimatePresence>
              {(localError || error) && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-[10px] tracking-[0.2em] uppercase text-center font-semibold"
                >
                  {localError || error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* BUTTON */}
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 mt-4 bg-white/10 border border-white/30 text-white text-[11px] font-bold uppercase tracking-[0.4em] transition-all duration-500 rounded-sm shadow-lg"
            >
              Create Account
            </motion.button>
          </form>

          {/* FOOTER */}
          <div className="mt-10 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Already a member?{" "}
              <Link to="/login" className="text-white hover:text-white/80 transition-colors underline underline-offset-4">
                Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}