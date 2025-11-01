import { createContext ,useContext,useState,useEffect} from "react";
import axios from "axios";


const ProductContext=createContext()

export const ProductProvider= ({children}) =>{

       const [products,setProducts]=useState([])
       const [category,setCategory]=useState("All")


  useEffect(()=> {
    axios.get("https://daor-shades-e-commerse-project.onrender.com/products")
    .then((res)=> setProducts(res.data))
    .catch((err)=> console.error("Error fetching products:", err.message))
  },[])


 const filteredProducts=category==="All"
 ? products
      : products.filter((p) =>  p.category  === category   ||  p.category1  === category );

return (
    <ProductContext.Provider
    value={{
        products,
        filteredProducts,
        category,
        setCategory,
    }}>
        {children}
    </ProductContext.Provider>
    
)

}


export const useProducts = () => useContext(ProductContext);