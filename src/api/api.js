// // import axios from "axios";
// // import { getToken } from "./auth"; // or however you store JWT

// // const api = axios.create({
// //   baseURL: "https://localhost:7222/api",
// //    headers: {
// //     "Content-Type": "application/json"}, // change port
// // });


// // api.interceptors.request.use((config) => {
// //   const token = localStorage.getItem("token");
// //   if (token) {
// //     config.headers.Authorization = `Bearer ${token}`;
// //   }
// //   return config;
// // });


// // export default api;



// import axios from "axios";

// // Create axios instance
// const api = axios.create({
//   baseURL: "https://localhost:7222/api", // your backend
//   withCredentials: true, // allow cookies (refresh token)
// });

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

    
//     if (
//       error.response?.status === 401 && 
//       !originalRequest._retry && 
//       !originalRequest.url.includes("/auth/refresh-token") &&
//       !originalRequest.url.includes("/auth/login")
//     ) {
//       originalRequest._retry = true;

//       try {
//         const res = await api.post("/auth/refresh-token");
//         const token = res.data.data.accessToken;

//         localStorage.setItem("accessToken", token);
        
//         originalRequest.headers["Authorization"] = `Bearer ${token}`;
        
//         return api(originalRequest);
//       } catch (refreshError) {
//         localStorage.removeItem("accessToken");
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
// export default api;






import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7222/api",
  withCredentials: true,
});

// ADD TOKEN TO EVERY REQUEST
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isLoggingOut = false;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;
    const url = originalRequest?.url || "";

    // 🚫 DO NOT INTERCEPT LOGIN ERRORS
    if (url.includes("/auth/login")) {
      return Promise.reject(error);
    }

    // 🚫 BLOCKED USER (403)
    if (status === 403) {
      if (!isLoggingOut) {
        isLoggingOut = true;
        localStorage.removeItem("accessToken");

        return Promise.reject(error); // 👈 blocked page
      }
      return Promise.reject(error);
    }

    // 🔄 TOKEN EXPIRED
    if (
      status === 401 &&
      !originalRequest._retry &&
      !url.includes("/auth/refresh-token")
    ) {
      originalRequest._retry = true;

      try {
        const res = await api.post("/auth/refresh-token");
        const token = res.data.data.accessToken;

        localStorage.setItem("accessToken", token);
        originalRequest.headers.Authorization = `Bearer ${token}`;

        return api(originalRequest);
      } catch (err) {
       
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
