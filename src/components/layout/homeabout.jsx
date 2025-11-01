import { useNavigate } from "react-router-dom"

export default function HomeAbout(){
    const navigate=useNavigate()

   

    return (

        <section className="w-100px py-16 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center" >




            <div className="cursor-pointer relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"  onClick={()=> {
                navigate('/about')
            }}>


            <img src={"https://id.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-match-sunglasses--Z1414W_PM1_Look%20view.jpg?wid=2400"} alt={" a man wearing classic sunglasses"}
             className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-500"/>


             <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
             <span className="text-white text-lg font-medium tracking-wide">
                Learn More →
             </span>
            </div>
            </div>






            <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">About Us</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Discover the essence of timeless design and refined craftsmanship.
            Our collections are built for those who value elegance, comfort,
            and authenticity — blending modern aesthetics with a classic touch.</p>

            <button onClick={() => navigate("/about")}
            className="mt-4 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition"
          > Read More</button>
            </div>
        </div>
        </section>
    )
}