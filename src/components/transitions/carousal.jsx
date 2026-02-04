



// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import "swiper/css/effect-fade";

// // export default function Carousel() {
// //   const slides = [
// //     {
// //       id: 1,
// //       img: "https://images.ctfassets.net/brzb6u29244a/11NPeQef1taVMI5MKMbvxy/3a7c64552176ca5f6404ca6ae4072e47/HeroCategory-Desktop_Gucci-FW25-JULY25-250604-19-064-2-w1_001_Default.png?w=4000&fm=avif&q=50",
// //       title: "Luxury screams",
// //       desc: "Discover the elegance of Daor — where design meets timeless craftsmanship.",
// //     },
// //     {
// //       id: 2,
// //       img: "https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/07_Sunglasses_Page_Hero_Banner_Desktop_-_1920x800px.jpg",
// //       title: "Shades of life",
// //       desc: "Immerse yourself in our exclusive new collection.",
// //     },
// //     {
// //       id: 3,
// //       img: "https://static.zara.net/assets/public/45fd/c6eb/ea804bb4b737/a568225f3d37/02750300808-a3/02750300808-a3.jpg?ts=1752751272175&w=750",
// //       title: "Where man spends",
// //       desc: "Luxury that speaks your story — only at Daor.",
// //     },
// //   ];

// //   return (
// //     <div className="w-full h-[90vh] md:h-[85vh] sm:h-[70vh] relative overflow-hidden">
// //       <Swiper
// //         modules={[Navigation, Pagination, Autoplay, EffectFade]}
// //         slidesPerView={1}
// //         loop
// //         autoplay={{ delay: 3500, disableOnInteraction: false }}
// //         pagination={{ clickable: true }}
// //         navigation
// //         effect="fade"
// //         className="w-full h-full"
// //       >
// //         {slides.map((slide) => (
// //           <SwiperSlide key={slide.id}>
// //             <div className="relative w-full h-full flex items-center justify-center text-center text-white">
              
              
// //               <img
// //                 src={slide.img}
// //                 alt={slide.title}
// //                 className="absolute inset-0 w-full h-full object-cover"
// //               />

              
// //               <div className="absolute inset-0 bg-black/60" />

              
// //               <div className="relative z-10 px-6 sm:px-4">
// //                 <h2 className="text-5xl md:text-4xl sm:text-2xl font-[Cinzel] tracking-[0.2em] mb-4 drop-shadow-lg">
// //                   {slide.title}
// //                 </h2>
// //                 <p className="max-w-2xl mx-auto text-lg sm:text-sm text-slate-300 drop-shadow-md">
// //                   {slide.desc}
// //                 </p>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // }



// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// export default function Carousel() {
//   const slides = [
//     {
//       id: 1,
//       img: "https://images.ctfassets.net/brzb6u29244a/11NPeQef1taVMI5MKMbvxy/3a7c64552176ca5f6404ca6ae4072e47/HeroCategory-Desktop_Gucci-FW25-JULY25-250604-19-064-2-w1_001_Default.png?w=4000&fm=avif&q=50",
//       title: "Luxury Screams",
//       subtitle: "The FW26 Collection",
//     },
//     {
//       id: 2,
//       img: "https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/07_Sunglasses_Page_Hero_Banner_Desktop_-_1920x800px.jpg",
//       title: "Shades of Life",
//       subtitle: "Iconic Frames",
//     },
//     {
//       id: 3,
//       img: "https://static.zara.net/assets/public/45fd/c6eb/ea804bb4b737/a568225f3d37/02750300808-a3/02750300808-a3.jpg?ts=1752751272175&w=750",
//       title: "The Modern Man",
//       subtitle: "Exclusive Designs",
//     },
//   ];

//   return (
//     <div className="w-full h-[85vh] relative group">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectFade]}
//         slidesPerView={1}
//         loop
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation
//         effect="fade"
//         className="w-full h-full premium-swiper"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative w-full h-full">
//               <img
//                 src={slide.img}
//                 alt={slide.title}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/30" />
              
//               <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
//                 <span className="text-xs uppercase tracking-[0.5em] mb-4 animate-fadeIn">
//                   {slide.subtitle}
//                 </span>
//                 <h2 className="text-5xl md:text-8xl font-serif italic tracking-tight mb-8">
//                   {slide.title}
//                 </h2>
//                 <button className="px-8 py-3 border border-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
//                   Explore Now
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
      
//       {/* Custom Global CSS for Swiper dots if needed */}
//       <style hover>{`
//         .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
//         .swiper-pagination-bullet-active { opacity: 1; transform: scale(1.2); }
//         .swiper-button-next, .swiper-button-prev { color: white !important; transform: scale(0.7); opacity: 0; transition: 0.3s; }
//         .group:hover .swiper-button-next, .group:hover .swiper-button-prev { opacity: 0.5; }
//       `}</style>
//     </div>
//   );
// }




import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Carousel() {
  const slides = [
    {
      id: 1,
      img: "https://images.ctfassets.net/brzb6u29244a/11NPeQef1taVMI5MKMbvxy/3a7c64552176ca5f6404ca6ae4072e47/HeroCategory-Desktop_Gucci-FW25-JULY25-250604-19-064-2-w1_001_Default.png?w=4000&fm=avif&q=50",
      title: "Luxury Screams",
      subtitle: "The FW26 Collection",
    },
    {
      id: 2,
      img: "https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/07_Sunglasses_Page_Hero_Banner_Desktop_-_1920x800px.jpg",
      title: "Shades of Life",
      subtitle: "Iconic Frames",
    },
    {
      id: 3,
      img: "https://static.zara.net/assets/public/45fd/c6eb/ea804bb4b737/a568225f3d37/02750300808-a3/02750300808-a3.jpg?ts=1752751272175&w=750",
      title: "The Modern Man",
      subtitle: "Exclusive Designs",
    },
  ];

  return (
    <div className="w-full h-[90vh] md:h-screen relative overflow-hidden bg-black group selection:bg-white selection:text-black">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">0${index + 1}</span>`;
          }
        }}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        effect="fade"
        speed={1500}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative w-full h-full">
                {/* Background Image with Ken Burns Effect */}
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: isActive ? 1 : 1.1 }}
                  transition={{ duration: 6, ease: "linear" }}
                  src={slide.img}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.1]"
                />
                
                {/* Dramatic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
                
                {/* Content Alignment: Left-Justified for Editorial Feel */}
                <div className="relative z-10 flex flex-col justify-end h-full px-8 pb-24 md:px-20 md:pb-32 max-w-7xl">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isActive ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="space-y-6"
                  >
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-white/70 block">
                      {slide.subtitle}
                    </span>
                    <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-serif italic text-white leading-[0.85] tracking-tighter">
                      {slide.title}
                    </h2>
                    
                    <div className="pt-8 flex items-center gap-10">
                      <button className="group relative overflow-hidden bg-white px-10 py-4 transition-all duration-500 hover:px-14">
                        <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-black text-black">
                          View Archive
                        </span>
                        <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </button>
                      
                      <div className="hidden md:block h-[1px] w-24 bg-white/30" />
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Minimalist Navigation */}
      <div className="absolute right-10 bottom-10 z-20 hidden md:flex items-center gap-6">
        <button className="swiper-prev text-white/40 hover:text-white transition-colors duration-500">
          <span className="text-[10px] uppercase tracking-widest font-bold">Prev</span>
        </button>
        <div className="h-4 w-[1px] bg-white/20" />
        <button className="swiper-next text-white/40 hover:text-white transition-colors duration-500">
          <span className="text-[10px] uppercase tracking-widest font-bold">Next</span>
        </button>
      </div>

      <style>{`
        /* CUSTOM PAGINATION - NUMBERS */
        .swiper-pagination {
          display: flex;
          flex-direction: column;
          left: auto !important;
          right: 3rem !important;
          top: 50% !important;
          transform: translateY(-50%);
          width: auto !important;
          gap: 1.5rem;
        }
        .swiper-pagination-bullet {
          background: transparent !important;
          color: rgba(255,255,255,0.3);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.2em;
          opacity: 1 !important;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: 0.5s !important;
          width: auto !important;
          height: auto !important;
          border-radius: 0 !important;
        }
        .swiper-pagination-bullet::before {
          content: '';
          height: 1px;
          width: 0px;
          background: white;
          transition: 0.5s;
        }
        .swiper-pagination-bullet-active {
          color: white !important;
          transform: translateX(-10px);
        }
        .swiper-pagination-bullet-active::before {
          width: 30px;
        }
        /* HIDE DEFAULT NAV */
        .swiper-button-next, .swiper-button-prev { display: none !important; }
      `}</style>
    </div>
  );
}