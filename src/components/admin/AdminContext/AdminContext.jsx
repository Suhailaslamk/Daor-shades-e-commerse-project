// // import axios from "axios";
// // import { createContext, useContext, useEffect, useState } from "react";
// // import { toast } from "react-toastify";

// // const AdminContext = createContext()
// // export const useAdmin =()=> useContext(AdminContext)

// // export const AdminProvider = ({children}) => {
// //     const [products,setProducts] =useState([])
// //     const [users,setUsers]=useState([])
// //     const [orders,setOrders]=useState([])

// //     const apiURL = "https://daor-shades-e-commerse-project.onrender.com"

// //     const fetchProducts = async ()=> {
// //         try {
// //             const res = await axios.get(`${apiURL}/products`)
// //             setProducts(res.data)
            
            
           
            
// //         } catch (err){
// //             console.log(err)
// //         }
    
// //     }



// //     const fetchUsers = async ()=>{
// //         try{
// //         const res=await axios.get(`${apiURL}/users`)
// //         setUsers(res.data)
// //     }catch(err){
// //         console.log(err);
        
// //     }
// // }

// // const addProduct = async (product) =>{
// //     try {
// //         const res = await axios.post(`${apiURL}/products`,product)
// //         setProducts((prev)=> {[...prev,res.data]})

       
// //         toast.success("Product added!")
// //     }catch (err){
// //         toast.error("Failed to add product")
// //     }
// //     }

// //     const deleteProduct= async (id)=> {
// //         try {

// //             await axios.delete(`${apiURL}/products/${id}`)
// //             setProducts((prev)=> prev.filter((p)=> p.id !== id))
// //             toast.info("Product deleted")
// //         }catch(err){
// //             toast.error("failed to delete product")
// //         }
// //         }
 
       
// //         const editProduct=async (id,updatedData)=>{
// //           try{
// //             const res = await axios.patch(`${apiURL}/products/${id}`,updatedData);
// //             setProducts((prev)=> 
// //             prev.map((p) => (p.id === id ? res.data : p)))
// //             toast.success("Product updated")
// //           }catch(err){
// //             console.log(err);
// //             toast.error("Failed to update product")
    
// //           }
   
// //           }

// //           const fetchOrders= async ()=>{
// //              try{
// //                 const res=await axios.get(`${apiURL}/orders`)
// //              setOrders(res.data)
             
             
// //              }catch(err){
// //                 console.log(err);
                
// //              }
// //           }
// //           const deleteOrders=async (id)=> {
// //             try{
// //                  await axios.delete(`${apiURL}/orders/${id}`)
// //                  setOrders((prev)=>  prev.filter((o)=> o.id !== id))
// //                  toast.info("order deleted")
// //             }catch(err){
// //                 console.log(err);
// //                 toast.error("failed to delete order")
// //             }
// //           }

// //           const updateOrderStatus=async (id,status)=>{
// //                try{
// //                 const res= await axios.patch(`${apiURL}/orders/${id}`,{status})
// //                 setOrders((prev)=> prev.map((o)=> (o.id === id ? {...o,status : res.data.status} : o)))

// //                toast.success("Order status updated!");
// //     } catch (err) {
// //       console.log(err);
// //       toast.error("Failed to update order status");
// //     }
// //   };






// //         useEffect(()=> {
// //             fetchProducts()
// //             fetchUsers()
// //             fetchOrders()
// //         },[])

// //         return (
// //             <AdminContext.Provider 
// //             value={{
// //                 products,
// //                 users,
// //                 fetchProducts,
// //                 fetchUsers,
// //                 addProduct,
// //                 deleteProduct,
// //                 editProduct,
// //                 orders,
// //                 deleteOrders,
// //                 updateOrderStatus,

// //             }}>{children}
// //             </AdminContext.Provider>
// //         )
// //     }







// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const AdminContext = createContext(null);
// export const useAdmin = () => useContext(AdminContext);

// export const AdminProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [orders, setOrders] = useState([]);

//   const apiURL = "https://daor-shades-e-commerse-project.onrender.com";

//   // PRODUCTS
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`${apiURL}/products`);
//       setProducts(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const addProduct = async (product) => {
//     try {
//       const res = await axios.post(`${apiURL}/products`, product);
//       setProducts((prev) => [...prev, res.data]);
//       toast.success("Product added!");
//     } catch {
//       toast.error("Failed to add product");
//     }
//   };

//   const deleteProduct = async (id) => {
//     try {
//       await axios.delete(`${apiURL}/products/${id}`);
//       setProducts((prev) => prev.filter((p) => p.id !== id));
//       toast.info("Product deleted");
//     } catch {
//       toast.error("Failed to delete product");
//     }
//   };

//   const editProduct = async (id, updatedData) => {
//     try {
//       const res = await axios.patch(`${apiURL}/products/${id}`, updatedData);
//       setProducts((prev) =>
//         prev.map((p) => (p.id === id ? res.data : p))
//       );
//       toast.success("Product updated");
//     } catch {
//       toast.error("Failed to update product");
//     }
//   };

//   // ORDERS
//   const fetchOrders = async () => {
//   try {
//     const res = await api.get("/admin/orders");
//     setOrders(res.data.data || []);
//   } catch (err) {
//     console.log(err);
//     toast.error("Failed to fetch orders");
//   }
// };

// const deleteOrders = async (id) => {
//   try {
//     await api.delete(`/admin/orders/${id}`);
//     setOrders((prev) => prev.filter((o) => o.id !== id));
//     toast.info("Order deleted");
//   } catch (err) {
//     console.log(err);
//     toast.error("Failed to delete order");
//   }
// };

// const updateOrderStatus = async (id, status) => {
//   try {
//     await api.put("/admin/orders/status", { id, status });
//     await fetchOrders(); // refresh after update
//     toast.success("Order status updated!");
//   } catch (err) {
//     console.log(err);
//     toast.error("Failed to update order status");
//   }
// };

//   useEffect(() => {
//     fetchProducts();
//     fetchOrders();
//   }, []);

//   return (
//     <AdminContext.Provider
//       value={{
//         products,
//         orders,
//         fetchProducts,
//         addProduct,
//         deleteProduct,
//         editProduct,
//         fetchOrders,
//         deleteOrders,
//         updateOrderStatus,
//       }}
//     >
//       {children}
//     </AdminContext.Provider>
//   );
// };



import { createContext, useContext, useEffect, useState } from "react";
import api from "../../../api/api";
import { toast } from "react-toastify";

const AdminContext = createContext(null);
export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  // -------- PRODUCTS --------
  const fetchProducts = async (page = 1, pageSize = 100) => {
    try {
      const res = await api.get(`/admin/products?page=${page}&pageSize=${pageSize}`);
      setProducts(res.data.data?.data || []);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch products");
    }
  };

  const addProduct = async (product) => {
    try {
      const formData = new FormData();
      for (const key in product) {
        formData.append(key, product[key]);
      }
      const res = await api.post("/admin/products", formData);
      setProducts((prev) => [...prev, res.data.data]);
      toast.success("Product added!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add product");
    }
  };

  const editProduct = async (id, updatedData) => {
    try {
      const formData = new FormData();
      for (const key in updatedData) {
        formData.append(key, updatedData[key]);
      }
      await api.patch(`/admin/products/${id}`, formData);
      await fetchProducts();
      toast.success("Product updated!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update product");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/admin/products/${id}`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.info("Product deleted");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete product");
    }
  };

  const toggleProductStatus = async (id) => {
    try {
      await api.put(`/admin/products/${id}/toggle-status`);
      await fetchProducts();
      toast.success("Product status updated");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update status");
    }
  };

  // -------- ORDERS --------
  const fetchOrders = async () => {
    try {
      const res = await api.get("/admin/orders");
      setOrders(res.data.data || []);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch orders");
    }
  };

  const deleteOrders = async (id) => {
    try {
      await api.delete(`/admin/orders/${id}`);
      setOrders((prev) => prev.filter((o) => o.id !== id));
      toast.info("Order deleted");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete order");
    }
  };

  const updateOrderStatus = async (id, status) => {
    try {
      await api.put("/admin/orders/status", { id, status });
      await fetchOrders();
      toast.success("Order status updated!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update order status");
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        products,
        orders,
        fetchProducts,
        addProduct,
        editProduct,
        deleteProduct,
        toggleProductStatus,
        fetchOrders,
        deleteOrders,
        updateOrderStatus,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
