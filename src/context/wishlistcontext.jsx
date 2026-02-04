import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";
import { toast } from "react-toastify";
import { useAuth } from "./authcontext";

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const {user} = useAuth();
  // GET wishlist
  const getWishlist = async () => {
    try {
      setLoading(true);
      const res = await api.get("/wishlist");
      setWishlist(res.data.data ?? []);
    } catch (err) {
      console.error("Fetch wishlist failed", err);
    } finally {
      setLoading(false);
    }
  };

  // TOGGLE wishlist
  const toggleWishlist = async (productId) => {
    try {
      await api.post(`/wishlist/toggle/${productId}`);
      await getWishlist();
    } catch (err) {
      toast.error("Wishlist action failed");
    }
  };

  // REMOVE explicitly (optional helper)
  const removeFromWishlist = async (productId) => {
    await toggleWishlist(productId);
  };

  // CHECK if product is in wishlist
  const isInWishlist = (productId) =>
    wishlist.some((item) => item.id === productId);

  useEffect(() => {
  if (user) {
    getWishlist();
  } else {
    setWishlist([]);
  }
}, [user]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist,
        getWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
