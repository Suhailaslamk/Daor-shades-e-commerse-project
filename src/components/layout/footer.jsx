
// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-12">
//       <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-4">
       


//         <div>
//           <h2 className="text-white text-2xl font-bold mb-3">Daor</h2>
//           <p className="text-sm text-gray-400 leading-relaxed">
//             Redefining luxury eyewear through innovation, design, and timeless craftsmanship.
//           </p>
//         </div>

       


//         <div>
//           <h3 className="text-white font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="/" className="hover:text-white transition">Home</a></li>
//             <li><a href="/about" className="hover:text-white transition">About</a></li>
//             <li><a href="/products" className="hover:text-white transition">Collection</a></li>
//             <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
//           </ul>
//         </div>

        



//         <div>
//           <h3 className="text-white font-semibold mb-3">Support</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
//             <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
//             <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
//           </ul>
//         </div>

       


//         <div>
//           <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
//           <form className="flex gap-2 mb-4">
//             <input
//               type="email"
//               placeholder="Your email"
//               className="w-full px-3 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500"
//             />
//             <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
//               →
//             </button>
//           </form>
//           <div className="flex space-x-4 text-gray-400">
//             <a href="#" className="hover:text-white transition">Instagram</a>
//             <a href="#" className="hover:text-white transition">Twitter</a>
//             <a href="#" className="hover:text-white transition">LinkedIn</a>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
//         © 2025 Daor. All rights reserved.
//       </div>
//     </footer>
//   );
// }




import { NavLink } from "react-router-dom";
import { Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 border-t border-zinc-900">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 grid gap-16 md:grid-cols-4">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-serif italic tracking-tighter text-white">Daor</h2>
          <p className="text-[11px] leading-relaxed uppercase tracking-widest text-zinc-500 max-w-[200px]">
            Redefining luxury eyewear through innovation, design, and timeless craftsmanship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-[10px] uppercase tracking-[0.4em] mb-8">Navigation</h3>
          <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em]">
            <li><NavLink to="/" className="hover:text-white transition-colors">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-white transition-colors">About</NavLink></li>
            <li><NavLink to="/products" className="hover:text-white transition-colors">Collection</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact</NavLink></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white text-[10px] uppercase tracking-[0.4em] mb-8">Client Service</h3>
          <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em]">
            <li><NavLink to="/faq" className="hover:text-white transition-colors">FAQ</NavLink></li>
            <li><NavLink to="/terms" className="hover:text-white transition-colors">Terms & Conditions</NavLink></li>
            <li><NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-white text-[10px] uppercase tracking-[0.4em] mb-8">The Newsletter</h3>
          <form className="flex border-b border-zinc-800 pb-2 mb-8 group focus-within:border-white transition-colors">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="w-full bg-transparent text-[10px] tracking-[0.2em] outline-none text-white placeholder:text-zinc-600 uppercase"
            />
            <button className="text-zinc-500 hover:text-white transition-colors px-2">
              <ArrowRight size={16} />
            </button>
          </form>
          
          <div className="flex space-x-6 text-zinc-500">
            <a href="#" className="hover:text-white transition-transform hover:-translate-y-1 duration-300">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-white transition-transform hover:-translate-y-1 duration-300">
              <Twitter size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-white transition-transform hover:-translate-y-1 duration-300">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-20 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.5em] text-zinc-600 space-y-4 md:space-y-0">
        <p>© {currentYear} Daor Atelier. All rights reserved.</p>
        <p className="hidden md:block italic font-serif lowercase tracking-normal text-zinc-700">handcrafted with excellence</p>
      </div>
    </footer>
  );
}