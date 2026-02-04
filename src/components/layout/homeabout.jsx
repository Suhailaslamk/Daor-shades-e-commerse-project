// // import { useNavigate } from "react-router-dom"

// // export default function HomeAbout(){
// //     const navigate=useNavigate()

   

// //     return (

// //         <section className="w-100px py-16 bg-gray-50 dark:bg-neutral-900">
// //         <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center" >




// //             <div className="cursor-pointer relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"  onClick={()=> {
// //                 navigate('/about')
// //             }}>


// //             <img src={"https://id.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-match-sunglasses--Z1414W_PM1_Look%20view.jpg?wid=2400"} alt={" a man wearing classic sunglasses"}
// //              className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-500"/>


// //              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
// //              <span className="text-white text-lg font-medium tracking-wide">
// //                 Learn More →
// //              </span>
// //             </div>
// //             </div>






// //             <div className="space-y-4">
// //                 <h3 className="text-3xl font-bold text-gray-900 dark:text-white">About Us</h3>
// //                 <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Discover the essence of timeless design and refined craftsmanship.
// //             Our collections are built for those who value elegance, comfort,
// //             and authenticity — blending modern aesthetics with a classic touch.</p>

// //             <button onClick={() => navigate("/about")}
// //             className="mt-4 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition"
// //           > Read More</button>
// //             </div>
// //         </div>
// //         </section>
// //     )
// // }




// import { useNavigate } from "react-router-dom"

// export default function HomeAbout() {
//   const navigate = useNavigate()

//   return (
//     <section className="py-24 bg-[#fafafa]">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
//         {/* Image Side */}
//         <div 
//           className="w-full md:w-1/2 cursor-pointer group relative overflow-hidden bg-zinc-200 aspect-[4/5]"
//           onClick={() => navigate('/about')}
//         >
//           <img 
//             src="https://id.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-match-sunglasses--Z1414W_PM1_Look%20view.jpg?wid=2400" 
//             alt="Classic sunglasses"
//             className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
//             <span className="opacity-0 group-hover:opacity-100 text-white text-xs uppercase tracking-[0.3em] border-b border-white pb-1 transition-all duration-500">
//               The Studio →
//             </span>
//           </div>
//         </div>

//         {/* Text Side */}
//         <div className="w-full md:w-1/2 space-y-8">
//           <div className="space-y-4">
//             <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold block">Our Story</span>
//             <h2 className="text-4xl md:text-5xl font-serif italic text-zinc-900 leading-tight">
//               Crafting a New <br /> Perspective
//             </h2>
//           </div>
          
//           <p className="text-zinc-600 leading-relaxed font-light text-lg">
//             Discover the essence of timeless design and refined craftsmanship. 
//             Our collections are built for those who value elegance, comfort, 
//             and authenticity — blending modern aesthetics with a classic touch.
//           </p>

//           <button 
//             onClick={() => navigate("/about")}
//             className="group flex items-center gap-4 text-xs uppercase tracking-[0.4em] font-bold text-zinc-900"
//           >
//             <span>Read Our Philosophy</span>
//             <div className="w-8 h-[1px] bg-zinc-900 group-hover:w-16 transition-all duration-500"></div>
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }





import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomeAbout() {
  const navigate = useNavigate();

  return (
    <section className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative">
        
        {/* BACKGROUND WATERMARK - Abstract Text */}
        <div className="absolute top-0 right-[-5%] pointer-events-none select-none hidden lg:block">
          <span className="text-[15rem] font-serif italic text-zinc-50/80 leading-none">
            Perspective
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* IMAGE SIDE - Overlapping Composition */}
          <div className="w-full lg:w-1/2 relative">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative z-20 aspect-[3/4] overflow-hidden bg-zinc-100 group shadow-2xl"
              onClick={() => navigate('/about')}
            >
              <img 
                src="https://id.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-match-sunglasses--Z1414W_PM1_Look%20view.jpg?wid=2400" 
                alt="Studio Craftsmanship"
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-700" />
            </motion.div>

            {/* Floating Decorative Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-6 lg:-right-16 z-30 bg-black text-white p-8 md:p-12 hidden sm:block max-w-[280px]"
            >
              <span className="text-[8px] uppercase tracking-[0.5em] text-zinc-500 block mb-4 italic">Est. 2026</span>
              <p className="text-[11px] leading-relaxed tracking-widest uppercase font-light">
                Every piece is a testament to the quiet power of authenticity.
              </p>
            </motion.div>
          </div>

          {/* TEXT SIDE - Editorial Alignment */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="max-w-xl space-y-12">
              <header className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="h-[1px] w-12 bg-zinc-200" />
                  <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 font-black">
                    Our Philosophy
                  </span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-serif italic text-zinc-900 leading-[1.1] tracking-tighter"
                >
                  Crafting a New <br /> 
                  <span className="text-zinc-300">Perspective</span>
                </motion.h2>
              </header>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <p className="text-zinc-500 leading-relaxed font-light text-lg italic font-serif">
                  "Architecture is a visual art, and the buildings speak for themselves." 
                  We apply this architectural rigor to every frame and fabric we curate.
                </p>
                
                <p className="text-zinc-400 leading-relaxed font-light text-base max-w-md">
                  Discover the essence of timeless design and refined craftsmanship. 
                  Our collections are built for those who value elegance, comfort, 
                  and authenticity — blending modern aesthetics with a classic touch.
                </p>

                <div className="pt-6">
                  <button 
                    onClick={() => navigate("/about")}
                    className="group relative inline-flex flex-col items-start"
                  >
                    <div className="flex items-center gap-6 mb-2">
                      <span className="text-[11px] uppercase tracking-[0.5em] font-black text-zinc-900 transition-all duration-500 group-hover:tracking-[0.7em]">
                        Explore the Studio
                      </span>
                      <div className="w-12 h-[1px] bg-zinc-200 group-hover:bg-zinc-900 group-hover:w-20 transition-all duration-700" />
                    </div>
                    {/* Visual Progress Bar UI */}
                    <div className="h-[1px] w-0 bg-zinc-900 transition-all duration-700 group-hover:w-full" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}