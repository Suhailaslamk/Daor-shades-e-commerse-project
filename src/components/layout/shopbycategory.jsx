// // import {useNavigate} from "react-router-dom";
// // import { useProducts } from "../../context/prodcontxt.jsx";

// // export default function ShopByCategory() {
// //   const navigate = useNavigate();
// //   const { setCategory } = useProducts();

// //   const categories=[
// //     {
// //       name: "Tommy Hilfigher", image: "https://www.louisvuitton.com/images/is/image/lv/MEN_BC_PREFALL%20DL1_25_04_DII.jpg?wid=2400"
// //     },
// //     { name: "Prada", image: "https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRB19/E24FFE80S/SPRB19_E24F_FE80S_C_052_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg" },
// //     { name: "Louis Vuitton", image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-clash-large-square-sunglasses--Z2707W_PM1_Worn%20view.png?wid=1090&hei=1090" },
    
// //   ];

// //    const handleCategoryClick = (cat) => {
// //     setCategory(cat);
// //     navigate("/products");
// //   };
  
// //   return (
// // <div className="min-h-screen bg-[#f5f5f0] text-gray-900 px-8 py-12">
// //   <h1 className="text-3xl font-[Cinzel] tracking-[0.25em] text-center mb-8"> Explore Categories</h1>


// // <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
// //         {categories.map((cat) => (
// //           <div
// //             key={cat.name}
// //             onClick={() => handleCategoryClick(cat.name )}
// //             className="cursor-pointer relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
// //           >
// //             <img
// //               src={cat.image}
// //               alt={cat.name}
// //               className="w-full h-142 object-cover group-hover:scale-105 transition-transform duration-500"
// //             />
// //             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //               <h3 className="text-white text-2xl font-semibold">{cat.name}</h3>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// import { useNavigate } from "react-router-dom";
// import { useProducts } from "../../context/prodcontxt.jsx";

// export default function ShopByCategory() {
//   const navigate = useNavigate();
//   const { setCategory } = useProducts();

//   const categories = [
//     { name: "Tommy Hilfigher", image: "https://www.louisvuitton.com/images/is/image/lv/MEN_BC_PREFALL%20DL1_25_04_DII.jpg?wid=2400" },
//     { name: "Prada", image: "https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRB19/E24FFE80S/SPRB19_E24F_FE80S_C_052_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg" },
//     { name: "Louis Vuitton", image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-clash-large-square-sunglasses--Z2707W_PM1_Worn%20view.png?wid=1090&hei=1090" },
//   ];

//   const handleCategoryClick = (cat) => {
//     setCategory(cat);
//     navigate("/products");
//   };

//   return (
//     <div className="max-w-[1400px] mx-auto px-6">
//       <div className="flex flex-col items-center mb-16">
//         <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-2">Selection</span>
//         <h2 className="text-3xl md:text-4xl font-serif italic text-zinc-900">Shop by Designer</h2>
//       </div>

//       <div className="grid gap-6 md:grid-cols-3">
//         {categories.map((cat) => (
//           <div
//             key={cat.name}
//             onClick={() => handleCategoryClick(cat.name)}
//             className="group cursor-pointer relative overflow-hidden bg-zinc-100 aspect-[3/4]"
//           >
//             <img
//               src={cat.image}
//               alt={cat.name}
//               className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
//             />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
//               <h3 className="text-xl uppercase tracking-[0.2em] font-light mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                 {cat.name}
//               </h3>
//               <div className="w-0 group-hover:w-12 h-[1px] bg-white transition-all duration-500" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/prodcontxt.jsx";
import { motion } from "framer-motion";

export default function ShopByCategory() {
  const navigate = useNavigate();
  const { setCategory } = useProducts();

  const categories = [
    { name: "Tommy Hilfiger", code: "TH-01", image: "https://www.louisvuitton.com/images/is/image/lv/MEN_BC_PREFALL%20DL1_25_04_DII.jpg?wid=2400" },
    { name: "Prada", code: "PR-24", image: "https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRB19/E24FFE80S/SPRB19_E24F_FE80S_C_052_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg" },
    { name: "Louis Vuitton", code: "LV-Archive", image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-clash-large-square-sunglasses--Z2707W_PM1_Worn%20view.png?wid=1090&hei=1090" },
  ];

  const handleCategoryClick = (cat) => {
    setCategory(cat);
    navigate("/products");
  };

  return (
    <div className="bg-white py-32 px-6 overflow-hidden">
      {/* SECTION HEADER */}
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 font-bold block">
            The Atelier Selection
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter text-zinc-900">
            Curated <span className="text-zinc-300">Designers</span>
          </h2>
        </div>
        <p className="max-w-xs text-[11px] uppercase tracking-widest text-zinc-500 leading-relaxed text-left md:text-right">
          A selection of limited archival pieces and contemporary silhouettes from the world's leading houses.
        </p>
      </div>

      {/* DESIGNER GRID */}
      <div className="grid gap-12 md:grid-cols-3 max-w-[1800px] mx-auto">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            onClick={() => handleCategoryClick(cat.name)}
            className="group cursor-pointer relative"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-50 border border-zinc-100/50">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-[1.5s] cubic-bezier(0.16, 1, 0.3, 1)"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Designer Code (Technical detail) */}
              <div className="absolute top-6 left-6">
                <span className="text-[8px] font-mono tracking-[0.4em] text-white/40 uppercase">
                  {cat.code}
                </span>
              </div>

              {/* Large Vertical Designer Name (Faint background effect) */}
              <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 rotate-90 origin-center pointer-events-none">
                <span className="text-[5rem] font-serif italic text-white/5 whitespace-nowrap leading-none select-none group-hover:text-white/10 transition-colors">
                  {cat.name}
                </span>
              </div>
            </div>

            {/* Bottom Info Area */}
            <div className="mt-6 flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-[12px] uppercase tracking-[0.4em] font-black text-zinc-900 group-hover:pl-2 transition-all duration-500">
                  {cat.name}
                </h3>
                <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                  View Collection
                </span>
              </div>
              
              {/* Animated Arrow */}
              <div className="w-10 h-10 border border-zinc-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}