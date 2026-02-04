// import HomeAbout from "./layout/homeabout";
// import ShopByCategory from "./layout/shopbycategory";
// import Carousal from "./transitions/carousal";




// export default function Home() {
//   return (
//     <div className="pt-16">
//        <Carousal />
//        <ShopByCategory />

       
// <div className="relative w-full h-screen overflow-hidden bg-black">
      
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source
//           src="https://www.prada.com/content/dam/pradaspa/ecommerce/2025/09/Sunglasses/Man/loop_DT.mp4#t=0.001"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>

      
//       <div className="absolute inset-0 bg-black/40"></div>

      
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
//         <h1 className="text-6xl md:text-8xl font-[Cinzel] tracking-[0.3em] mb-4">
//           DAOR
//         </h1>
//         <p className="text-lg md:text-2xl text-slate-300 max-w-2xl">
//           Elegance in motion — welcome to our world.
//         </p>
//       </div>
//     </div>
  

  


// <HomeAbout />

//     </div>
//   )
// }

 
import HomeAbout from "./layout/homeabout";
import ShopByCategory from "./layout/shopbycategory";
import Carousal from "./transitions/carousal";

export default function Home() {
  return (
    <div className="bg-[#fafafa]">
      {/* Hero Swiper */}
      <section className="pt-16">
        <Carousal />
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <ShopByCategory />
      </section>

      {/* Video Branding Section */}
      <div className="relative w-full h-[80vh] overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        >
          <source
            src="https://www.prada.com/content/dam/pradaspa/ecommerce/2025/09/Sunglasses/Man/loop_DT.mp4#t=0.001"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <span className="text-xs uppercase tracking-[1em] mb-4 text-zinc-300">Heritage & Vision</span>
          <h1 className="text-6xl md:text-9xl font-serif italic tracking-tighter mb-6">
            DAOR
          </h1>
          <div className="w-12 h-[1px] bg-white/50 mb-6"></div>
          <p className="text-sm md:text-lg uppercase tracking-[0.3em] font-light max-w-2xl text-zinc-200">
            Elegance in motion
          </p>
        </div>
      </div>

      {/* About Section */}
      <HomeAbout />
    </div>
  );
}