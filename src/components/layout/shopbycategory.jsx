import {useNavigate} from "react-router-dom";
import { useProducts } from "../../context/prodcontxt.jsx";

export default function ShopByCategory() {
  const navigate = useNavigate();
  const { setCategory } = useProducts();

  const categories=[
    {
      name: "Tommy Hilfigher", image: "https://www.louisvuitton.com/images/is/image/lv/MEN_BC_PREFALL%20DL1_25_04_DII.jpg?wid=2400"
    },
    { name: "Prada", image: "https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRB19/E24FFE80S/SPRB19_E24F_FE80S_C_052_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg" },
    { name: "Louis Vuitton", image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-clash-large-square-sunglasses--Z2707W_PM1_Worn%20view.png?wid=1090&hei=1090" },
    
  ];

   const handleCategoryClick = (cat) => {
    setCategory(cat);
    navigate("/products");
  };
  
  return (
<div className="min-h-screen bg-[#f5f5f0] text-gray-900 px-8 py-12">
  <h1 className="text-3xl font-[Cinzel] tracking-[0.25em] text-center mb-8"> Explore Categories</h1>


<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name )}
            className="cursor-pointer relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-142 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-semibold">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
