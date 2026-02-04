
// import { NavLink, useNavigate } from "react-router-dom";
// import { Heart, User, Menu, ShoppingCart } from "lucide-react";
// import { useState } from "react";
// import { useAuth } from "../../context/authcontext";
// import { useCart } from "../../context/cartcontext";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();
//   const { cartCount, wishlistCount,clearCart } = useCart();

//   const handleLogout = () => {
//     logout();
//     clearCart()
//     setDropdownOpen(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="w-full h-[70px] bg-gray-900 text-slate-200 flex items-center justify-between px-8 md:px-16 shadow-md fixed top-0 left-0 z-50">
      
//       <div className="hidden md:flex space-x-10 text-lg font-light tracking-wide">
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? "text-white font-medium" : "hover:text-gray-400"
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/products"
//           className={({ isActive }) =>
//             isActive ? "text-white font-medium" : "hover:text-gray-400"
//           }
//         >
//           Products
//         </NavLink>
//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             isActive ? "text-white font-medium" : "hover:text-gray-400"
//           }
//         >
//           About
//         </NavLink>
//       </div>

      
//       <div
//         className="text-4xl md:text-5xl font-[Cinzel] tracking-[0.25em] cursor-pointer"
//         onClick={() => navigate("/")}
//       >
//         Daor
//       </div>

      
//       <div className="hidden md:flex items-center space-x-6 relative">
        
//         <button
//           className="relative p-2 hover:scale-110 transition-transform"
//           onClick={() => navigate("/wishlist")}
//         >
//           <Heart className="w-6 h-6 text-white hover:text-red-500 transition" />
//           {wishlistCount > 0 && (
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//               {wishlistCount}
//             </span>
//           )}
//         </button>

       
//         <button
//           className="relative p-2 hover:scale-110 transition-transform"
//           onClick={() => navigate("/cart")}
//         >
//           <ShoppingCart className="w-6 h-6 text-white hover:text-gray-300 transition" />
//           {cartCount > 0 && (
//             <span className="absolute -top-1 -right-1 bg-white text-gray-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
//               {cartCount}
//             </span>
//           )}
//         </button>

        
//         {user ? (
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center gap-2 bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:scale-110 transition-all duration-300"
//             >
//               <User size={18} /> Hey {user.username}
//             </button>
//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-gray-900 border rounded shadow-lg z-50">
//                 <button
//                   className="w-full text-left px-4 py-2 text-white hover:bg-gray-600 "
//                   onClick={() => {
//                     setDropdownOpen(false);
//                     navigate("/user-details");
//                   }}
//                 >
//                   User Details
//                 </button>
//                 <button
//                   className="w-full text-left px-4 py-2 text-white hover:bg-gray-600 "
//                   onClick={() => {
//                     setDropdownOpen(false);
//                     navigate("/orders-page");
//                   }}
//                 >
//                   My Orders
//                 </button>
//                 <button
//                   className="w-full text-left px-4 py-2 text-white hover:bg-gray-600 "
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <button
//             className="flex items-center gap-2 bg-gray-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:scale-110 transition-all duration-300"
//             onClick={() => navigate("/login")}
//           >
//             <User size={18} /> Login
//           </button>
//         )}
//       </div>

      
//       <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
//         <Menu size={28} />
//       </button>

      
//       {isOpen && (
//         <div className="absolute top-[70px] left-0 w-full bg-gray-900 text-center flex flex-col space-y-4 py-6 text-lg font-light z-50">
//           <NavLink to="/" onClick={() => setIsOpen(false)}>
//             Home
//           </NavLink>
//           <NavLink to="/products" onClick={() => setIsOpen(false)}>
//             Products
//           </NavLink>
//           <NavLink to="/about" onClick={() => setIsOpen(false)}>
//             About
//           </NavLink>

//           <div className="flex justify-center gap-6 pt-4">
            
//             <button
//               onClick={() => {
//                 setIsOpen(false);
//                 navigate("/wishlist");
//               }}
//             >
//               <Heart className="w-6 h-6 text-white" />
//               {wishlistCount > 0 && (
//                 <span className="absolute bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center -mt-6 ml-3">
//                   {wishlistCount}
//                 </span>
//               )}
//             </button>

            
//             <button
//               onClick={() => {
//                 setIsOpen(false);
//                 navigate("/cart");
//               }}
//             >
//               <ShoppingCart className="w-6 h-6 text-white" />
//               {cartCount > 0 && (
//                 <span className="absolute bg-white text-gray-900 text-xs rounded-full w-5 h-5 flex items-center justify-center -mt-6 ml-3">
//                   {cartCount}
//                 </span>
//               )}
//             </button>

            
//             {user ? (
//               <button
//                 className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-100 transition-all duration-300"
//                 onClick={() => {
//                   setIsOpen(false);
//                   logout();
//                   navigate("/login");
//                 }}
//               >
//                 <User size={18} /> Logout
//               </button>
//             ) : (
//               <button
//                 className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-100 transition-all duration-300"
//                 onClick={() => {
//                   setIsOpen(false);
//                   navigate("/login");
//                 }}
//               >
//                 <User size={18} /> Login
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



// import { NavLink, useNavigate } from "react-router-dom";
// import { Heart, User, Menu, ShoppingCart, X } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useAuth } from "../../context/authcontext";
// import { useCart } from "../../context/cartcontext";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();
//   const { cartCount, wishlistCount, clearCart } = useCart();

//   // Scroll effect to handle transparency vs solid background
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     logout();
//     clearCart();
//     setDropdownOpen(false);
//     navigate("/login");
//   };

//   // Luxury Link Styling
//   const navLinkStyles = ({ isActive }) =>
//     `text-[11px] uppercase tracking-[0.3em] font-semibold transition-all duration-300 hover:text-white ${
//       isActive ? "text-white underline underline-offset-8" : "text-zinc-300"
//     }`;

//   return (
//     <nav
//       className={`w-full flex items-center justify-between px-6 md:px-16 fixed top-0 left-0 z-[100] transition-all duration-700 ${
//         isScrolled
//           ? "bg-zinc-950/95 backdrop-blur-md h-[70px] border-b border-zinc-800 shadow-2xl"
//           : "bg-gradient-to-b from-black/90 via-black/40 to-transparent h-[100px]"
//       }`}
//     >
//       {/* Left: Navigation Links */}
//       <div className="hidden md:flex items-center space-x-10">
//         <NavLink to="/" className={navLinkStyles}>
//           Home
//         </NavLink>
//         <NavLink to="/products" className={navLinkStyles}>
//           Collection
//         </NavLink>
//         <NavLink to="/about" className={navLinkStyles}>
//           Our Story
//         </NavLink>
//       </div>

//       {/* Center: Logo */}
//       <div
//         className="absolute left-1/2 -translate-x-1/2 text-3xl md:text-5xl font-serif italic tracking-[0.3em] cursor-pointer text-white drop-shadow-2xl"
//         onClick={() => navigate("/")}
//       >
//         DAOR
//       </div>

//       {/* Right: Actions */}
//       <div className="flex items-center space-x-3 md:space-x-6">
//         {/* Wishlist Icon */}
//         <button
//           className="relative p-2 text-white hover:scale-110 transition-transform"
//           onClick={() => navigate("/wishlist")}
//         >
//           <Heart size={22} strokeWidth={1.5} />
//           {wishlistCount > 0 && (
//             <span className="absolute top-1 right-0 bg-white text-zinc-950 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
//               {wishlistCount}
//             </span>
//           )}
//         </button>

//         {/* Cart Icon */}
//         <button
//           className="relative p-2 text-white hover:scale-110 transition-transform"
//           onClick={() => navigate("/cart")}
//         >
//           <ShoppingCart size={22} strokeWidth={1.5} />
//           {cartCount > 0 && (
//             <span className="absolute top-1 right-0 bg-white text-zinc-950 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
//               {cartCount}
//             </span>
//           )}
//         </button>

//         {/* User Account / Auth */}
//         <div className="relative hidden md:block">
//           {user ? (
//             <div className="relative">
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-zinc-950 transition-all duration-500"
//               >
//                 <User size={14} /> {user.username}
//               </button>
              
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-4 w-52 bg-zinc-900 border border-zinc-800 shadow-2xl py-2 animate-in fade-in slide-in-from-top-2">
//                   <button
//                     className="w-full text-left px-5 py-3 text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
//                     onClick={() => { setDropdownOpen(false); navigate("/user-details"); }}
//                   >
//                     User Details
//                   </button>
//                   <button
//                     className="w-full text-left px-5 py-3 text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
//                     onClick={() => { setDropdownOpen(false); navigate("/orders-page"); }}
//                   >
//                     My Orders
//                   </button>
//                   <hr className="border-zinc-800 my-1 mx-4" />
//                   <button
//                     className="w-full text-left px-5 py-3 text-[10px] uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <button
//               className="text-[10px] uppercase tracking-widest text-white border border-white/40 px-6 py-2 rounded-full hover:bg-white hover:text-zinc-950 transition-all duration-500"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </button>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Drawer Overlay */}
//       <div
//         className={`fixed inset-0 bg-zinc-950 z-[110] flex flex-col items-center justify-center space-y-10 transition-transform duration-700 ease-in-out ${
//           isOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <button
//           className="absolute top-8 right-8 text-white p-2"
//           onClick={() => setIsOpen(false)}
//         >
//           <X size={32} />
//         </button>

//         <NavLink to="/" onClick={() => setIsOpen(false)} className="text-3xl font-serif italic text-white tracking-widest">
//           Home
//         </NavLink>
//         <NavLink to="/products" onClick={() => setIsOpen(false)} className="text-3xl font-serif italic text-white tracking-widest">
//           Collection
//         </NavLink>
//         <NavLink to="/about" onClick={() => setIsOpen(false)} className="text-3xl font-serif italic text-white tracking-widest">
//           Our Story
//         </NavLink>

//         <div className="flex flex-col items-center gap-6 pt-10">
//           {user ? (
//             <button
//               onClick={handleLogout}
//               className="text-xs uppercase tracking-[0.3em] text-red-400 border border-red-400/30 px-10 py-4 rounded-full"
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               onClick={() => { setIsOpen(false); navigate("/login"); }}
//               className="text-xs uppercase tracking-[0.3em] text-white border border-zinc-700 px-10 py-4 rounded-full"
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }






// import { NavLink, useNavigate } from "react-router-dom";
// import { Heart, User, Menu, ShoppingCart, X } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useAuth } from "../../context/authcontext";
// import { useCart } from "../../context/cartcontext";
// import { useWishlist } from "../../context/wishlistcontext";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();
//   const { cartCount,clearCart } = useCart();
//   const { wishlist } = useWishlist();
// const wishlistCount = wishlist.length;

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = () => {
//     logout();
//     clearCart();
//     setDropdownOpen(false);
//     navigate("/login");
//   };

//   const navLinkStyles = ({ isActive }) =>
//     `text-[12px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:text-white ${
//       isActive ? "text-white border-b border-white pb-1" : "text-zinc-300"
//     }`;

//   return (
//     <nav
//       className={`w-full fixed top-0 left-0 z-[100] transition-all duration-700 ease-in-out ${
//         isScrolled
//           ? "bg-zinc-950/95 backdrop-blur-lg h-[80px] border-b border-zinc-800 shadow-2xl px-8 md:px-16"
//           : "bg-gradient-to-b from-black/90 via-black/50 to-transparent h-[120px] px-8 md:px-20 pt-4"
//       } flex items-center justify-between`}
//     >
//       {/* Left: Navigation Links */}
//       <div className="hidden lg:flex items-center space-x-12">
//         <NavLink to="/" className={navLinkStyles}>Home</NavLink>
//         <NavLink to="/products" className={navLinkStyles}>Collection</NavLink>
//         <NavLink to="/about" className={navLinkStyles}>Our Story</NavLink>
//       </div>

//       {/* Center: Logo */}
//       <div
//         className={`absolute left-1/2 -translate-x-1/2 font-serif italic tracking-[0.2em] cursor-pointer text-white transition-all duration-700 ${
//           isScrolled ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"
//         }`}
//         onClick={() => navigate("/")}
//       >
//         DAOR
//       </div>

//       {/* Right: Actions */}
//       <div className="flex items-center space-x-4 md:space-x-8">
//         <div className="flex items-center space-x-2">
//           {/* Wishlist */}
//           <button
//             className="relative p-2 text-white hover:scale-110 transition-transform"
//             onClick={() => navigate("/wishlist")}
//           >
//             <Heart size={24} strokeWidth={1.5} />
//             {wishlistCount > 0 && (
//               <span className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border border-black">
//                 {wishlistCount}
//               </span>
//             )}
//           </button>

//           {/* Cart */}
//           <button
//             className="relative p-2 text-white hover:scale-110 transition-transform"
//             onClick={() => navigate("/cart")}
//           >
//             <ShoppingCart size={24} strokeWidth={1.5} />
//             {cartCount > 0 && (
//               <span className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border border-black">
//                 {cartCount}
//               </span>
//             )}
//           </button>
//         </div>

//         {/* User Account */}
//         <div className="hidden md:block">
//           {user ? (
//             <div className="relative">
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-white border border-white/40 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-bold"
//               >
//                 <User size={16} /> {user.username}
//               </button>
              
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-4 w-56 bg-zinc-950 border border-zinc-800 shadow-2xl py-3 animate-in fade-in zoom-in-95 duration-300">
//                   <button
//                     className="w-full text-left px-6 py-3 text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
//                     onClick={() => { setDropdownOpen(false); navigate("/user-details"); }}
//                   >
//                     User Details
//                   </button>
//                   <button
//                     className="w-full text-left px-6 py-3 text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
//                     onClick={() => { setDropdownOpen(false); navigate("/orders-page"); }}
//                   >
//                     My Orders
//                   </button>
//                   <div className="h-[1px] bg-zinc-800 my-2 mx-6" />
//                   <button
//                     className="w-full text-left px-6 py-3 text-[11px] uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-all font-bold"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <button
//               className="text-[11px] uppercase tracking-widest text-white border border-white/50 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-bold"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </button>
//           )}
//         </div>

//         {/* Mobile Toggle */}
//         <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(true)}>
//           <Menu size={32} />
//         </button>
//       </div>

//       {/* Full Screen Mobile Menu */}
//       <div
//         className={`fixed inset-0 bg-black z-[200] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
//           isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
//         }`}
//       >
//         <button className="absolute top-10 right-10 text-white" onClick={() => setIsOpen(false)}>
//           <X size={40} strokeWidth={1.5} />
//         </button>
//         <div className="flex flex-col items-center space-y-10">
//           <NavLink to="/" onClick={() => setIsOpen(false)} className="text-4xl font-serif italic text-white tracking-widest">Home</NavLink>
//           <NavLink to="/products" onClick={() => setIsOpen(false)} className="text-4xl font-serif italic text-white tracking-widest">Collection</NavLink>
//           <NavLink to="/about" onClick={() => setIsOpen(false)} className="text-4xl font-serif italic text-white tracking-widest">Our Story</NavLink>
//           <div className="h-[1px] w-20 bg-zinc-800 my-4" />
//           {user ? (
//             <button onClick={handleLogout} className="text-sm uppercase tracking-[0.4em] text-red-500 font-bold">Logout</button>
//           ) : (
//             <button onClick={() => {setIsOpen(false); navigate("/login");}} className="text-sm uppercase tracking-[0.4em] text-white font-bold">Login</button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }



import { NavLink, useNavigate } from "react-router-dom";
import { Heart, User, Menu, ShoppingCart, X, Bell } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/authcontext";
import { useCart } from "../../context/cartcontext";
import { useWishlist } from "../../context/wishlistcontext";
import NotificationBell from "./NotificationBell";




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { cartCount, clearCart } = useCart();
  const { wishlist } = useWishlist();
  const wishlistCount = wishlist.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    clearCart();
    setDropdownOpen(false);
    setIsOpen(false); // Close mobile menu on logout
    navigate("/login");
  };

  const navLinkStyles = ({ isActive }) =>
    `text-[11px] lg:text-[12px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:text-white ${
      isActive ? "text-white border-b border-white pb-1" : "text-zinc-300"
    }`;

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-[100] transition-all duration-700 ease-in-out ${
        isScrolled
          ? "bg-zinc-950/95 backdrop-blur-lg h-[70px] md:h-[80px] border-b border-zinc-800 shadow-2xl px-4 md:px-16"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent h-[100px] md:h-[120px] px-4 md:px-20 pt-2 md:pt-4"
      } flex items-center justify-between`}
    >
      {/* Left: Navigation Links (Desktop Only) */}
      <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 flex-1">
        <NavLink to="/" className={navLinkStyles}>Home</NavLink>
        <NavLink to="/products" className={navLinkStyles}>Collection</NavLink>
        <NavLink to="/about" className={navLinkStyles}>Our Story</NavLink>
      </div>

      {/* Center: Logo - Adjusted sizes for mobile */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 font-serif italic tracking-[0.2em] cursor-pointer text-white transition-all duration-700 z-10 ${
          isScrolled ? "text-2xl md:text-4xl" : "text-3xl md:text-6xl"
        }`}
        onClick={() => navigate("/")}
      >
        DAOR
      </div>

      {/* Right: Actions */}
      <div className="flex items-center justify-end space-x-2 md:space-x-6 flex-1">
        <div className="flex items-center">
          {/* Wishlist */}
          <button
            className="relative p-2 text-white hover:scale-110 transition-transform"
            onClick={() => navigate("/wishlist")}
          >
            <Heart size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 bg-white text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-black">
                {wishlistCount}
              </span>
            )}
            </button>
          <NotificationBell />
           
          {/* Cart */}
          <button
            className="relative p-2 text-white hover:scale-110 transition-transform"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-white text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-black">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* User Account (Desktop) */}
        <div className="hidden md:block">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 text-[10px] lg:text-[11px] uppercase tracking-widest text-white border border-white/40 px-4 lg:px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-bold"
              >
                <User size={14} /> {user.username}
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-4 w-56 bg-zinc-950 border border-zinc-800 shadow-2xl py-3 animate-in fade-in zoom-in-95 duration-300">
                  <button
                    className="w-full text-left px-6 py-3 text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
                    onClick={() => { setDropdownOpen(false); navigate("/user-details"); }}
                  >
                    User Details
                  </button>
                  <button
                    className="w-full text-left px-6 py-3 text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
                    onClick={() => { setDropdownOpen(false); navigate("/orders-page"); }}
                  >
                    My Orders
                  </button>
                  <div className="h-[1px] bg-zinc-800 my-2 mx-6" />
                  <button
                    className="w-full text-left px-6 py-3 text-[11px] uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-all font-bold"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="text-[10px] lg:text-[11px] uppercase tracking-widest text-white border border-white/50 px-6 lg:px-8 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-bold"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-[200] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
          <X size={32} strokeWidth={1.5} />
        </button>
        <div className="flex flex-col items-center space-y-8 text-center">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="text-3xl font-serif italic text-white tracking-widest">Home</NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)} className="text-3xl font-serif italic text-white tracking-widest">Collection</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className="text-3xl font-serif italic text-white tracking-widest">Our Story</NavLink>
          
          <div className="h-[1px] w-20 bg-zinc-800 my-2" />
          
          {user ? (
            <div className="flex flex-col items-center space-y-6">
              <span className="text-zinc-500 text-[10px] uppercase tracking-[0.3em]">Logged in as {user.username}</span>
              <button onClick={() => {setIsOpen(false); navigate("/user-details");}} className="text-sm uppercase tracking-[0.3em] text-white">My Account</button>
              <button onClick={() => {setIsOpen(false); navigate("/orders-page");}} className="text-sm uppercase tracking-[0.3em] text-white">My Orders</button>
              <button onClick={handleLogout} className="text-sm uppercase tracking-[0.4em] text-red-500 font-bold pt-4">Logout</button>
            </div>
          ) : (
            <button onClick={() => {setIsOpen(false); navigate("/login");}} className="text-sm uppercase tracking-[0.4em] text-white font-bold">Login / Register</button>
          )}
        </div>
      </div>
    </nav>
  );
}