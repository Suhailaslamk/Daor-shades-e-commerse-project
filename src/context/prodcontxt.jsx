import { createContext ,useContext,useState,useEffect} from "react";
import api from "../api/api";


const ProductContext=createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);
  const [sort, setSort] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 12;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();

      
        if (search) params.append("Search", search);
          params.append("Page", page);
          params.append("PageSize", pageSize);
       if (category !== null)
  params.append("CategoryId", category);
        
      if (sort) params.append("SortBy", "price");
      if (sort === "priceHighLow") params.append("Descending", "true");

      const res = await api.get(`/products/filter-sort?${params.toString()}`);
      setProducts(res.data.data);
            setLoading(false);

setTotalCount(res.data.totalCount);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  

  // const filteredProducts = products
  // .filter(p =>
  //   p.name.toLowerCase().includes(search.toLowerCase())
  // )

  useEffect(() => {
  fetchProducts();
}, [category, sort, search, page]); 

  

return (
    <ProductContext.Provider
    value={{
        // products : filteredProducts,
        products,
        loading,
        category,
        setCategory,
        setSort,
        search,
        setSearch ,
        setPage,
        page,
        totalCount,




    }}>
        {children}
    </ProductContext.Provider>
    
)


}

export const useProducts = () => useContext(ProductContext);
