






// import { createContext, useContext, useEffect, useState } from "react";
// import api from "../api/api";

// const AuthContext = createContext();
// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [accessToken, setAccessToken] = useState(
//     localStorage.getItem("accessToken")
//   );
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   const fetchMe = async () => {
//     try {
//       const res = await api.get("/auth/me");
//       setUser(res.data.data);
//     } catch {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const signup = async (fullName, email, password) => {
//     try {
//       setError(null);
//       await api.post("/auth/register", { fullName, email, password });
//       return true;
//     } catch (err) {
//       setError(err.response?.data?.message || "Signup failed");
//       return false;
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       setError(null);
//       const res = await api.post("/auth/login", { email, password });

//       const token = res.data.data.accessToken;
//       localStorage.setItem("accessToken", token);
//       setAccessToken(token);

//       return true;
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid email or password");
//       return false;
//     }
//   };

//   const logout = async () => {
//     try {
//       await api.post("/auth/logout");
//     } catch {}
//     setUser(null);
//     setAccessToken(null);
//     localStorage.removeItem("accessToken");
//   };

//   useEffect(() => {
//     if (accessToken) {
//       fetchMe();
//     } else {
//       setLoading(false);
//     }
//   }, [accessToken]);

//   return (
//     <AuthContext.Provider
//       value={{ user, login, logout, signup, loading, error }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };





import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/api";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [loading, setLoading] = useState(true); // 🔑 auth-resolve flag
  const [error, setError] = useState(null);

  // 🔥 ONLY place loading is handled
// const fetchMe = async () => {
//   try {
//     const res = await api.get("/auth/me");
//     setUser(res.data.data);
//   } catch {
//      const status = err.response?.status;
//     setUser(null);
//     localStorage.removeItem("accessToken");
//     setAccessToken(null);

//     if (status === 403) {
//       // 👇 MARK BLOCKED STATE
//       setUser({ blocked: true });
//     }
//   } finally {
//     setLoading(false); // ✅ ALWAYS ends loading
//   }
// };



const fetchMe = async () => {
  try {
    const res = await api.get("/auth/me");
    setUser(res.data.data);
  } catch {
    setUser(null);
    localStorage.removeItem("accessToken");
    setAccessToken(null);
  } finally {
    setLoading(false);
  }
};


  const signup = async (fullName, email, password) => {
    try {
      setError(null);
      await api.post("/auth/register", { fullName, email, password });
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      return false;
    }
  };



const login = async (email, password) => {
  try {
    setError(null);
    const res = await api.post("/auth/login", { email, password });

    const token = res.data.data.accessToken;
    localStorage.setItem("accessToken", token);
    setAccessToken(token);

    return { success: true };
  } catch (err) {

    const status = err.response?.status;

     if (status === 403) {
      // 🚫 BLOCKED USER
      return {
        success: false,
        blocked: true,
        message: err.response?.data?.message || "Your account has been blocked",
      };
  }
  if (status === 401) {
      return {
        success: false,
        blocked: false,
        message: "Invalid email or password",
      };
    }
    return {
      success: false,
      blocked: false,
      message: "Login failed",
    };
  }
};
  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch {}
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("accessToken");
  };

  useEffect(() => {
  if (accessToken) {
    fetchMe();
  } else {
    setLoading(false); // ✅ no token → no loading
  }
}, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        loading,     // ✅ DO NOT rename (used by your code)
        login,
        logout,
        signup,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};










