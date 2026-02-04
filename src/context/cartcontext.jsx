



import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";
import { toast } from "react-toastify";
import { useAuth } from "./authcontext";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  // GET CART
  const getCart = async () => {
    try {
      setLoading(true);
      const res = await api.get("/cart");
      const normalizedCart = res.data.data.map(item => ({
  cartItemId: item.cartItemId,
  productId: item.productId,
  name: item.name,
  price: item.price,
  quantity: item.quantity,
  imageUrl: item.imageUrl,
  total: item.total,
}));

setCart(normalizedCart); // backend returns { data: [...] }
    } catch (err) {
      console.error("Error fetching cart:", err);
      // toast.error("Failed to load cart. Make sure you're logged in.");
    } finally {
      setLoading(false);
    }
  };

  // ADD TO CART
  const addToCart = async (productId, quantity = 1) => {
  try {
    await api.post("/cart/add", { productId, quantity });
    await getCart();
  } catch (err) {
  }
};

// UPDATE
const updateCart = async (productId, quantity) => {
  try {
    await api.put("/cart/update", { productId, quantity });
    await getCart();
  } catch {
  }
};

// REMOVE
const removeFromCart = async (productId) => {
  try {
    await api.delete(`/cart/remove/${productId}`);
    await getCart();
  } catch {
  }
};

useEffect(() => {
  if (user) {
    getCart();
  } else {
    setCart([]); 
  }
}, [user]); 

  const cartCount = Array.isArray(cart)
  ? cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
  : 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateCart,
        removeFromCart,
        cartCount,
        getCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
