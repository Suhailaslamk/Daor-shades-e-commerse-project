// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../../context/authcontext";

// export default function ProtectedRoute({ adminOnly = false }) {
//   const { user, loading } = useAuth();

//   /* 1️⃣ Wait until auth is resolved */
//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center text-white">
//         Loading...
//       </div>
//     );
//   }

//   /* 2️⃣ Not logged in → login */
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   /* 3️⃣ Normalize role (handles string + enum) */
//   const role =
//     typeof user.role === "string"
//       ? user.role.toLowerCase()
//       : user.role === 2
//       ? "admin"
//       : "user";

//   /* 4️⃣ Admin-only protection */
//   if (adminOnly && role !== "admin") {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   /* 5️⃣ All good */
//   return <Outlet />;
// }



// import { Navigate, Outlet ,useLocation } from "react-router-dom";
// import { useAuth } from "../../context/authcontext";

// export default function ProtectedRoute({ adminOnly = false }) {
//   const { user, loading } = useAuth();
//     const location = useLocation();


//   /* 1️⃣ Wait until auth is fully resolved */
//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   /* 2️⃣ Not logged in */
//   if (!user) {
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }

//   /* 3️⃣ Normalize role */
//   const role =
//     typeof user.role === "string"
//       ? user.role.toLowerCase()
//       : user.role === 2
//       ? "admin"
//       : "user";

//   /* 4️⃣ Admin protection */
//   if (adminOnly && role !== "admin") {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   /* 5️⃣ Authorized */
//   return <Outlet />;
// }





import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authcontext";

export default function ProtectedRoute({ adminOnly = false }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }} // ✅ save attempted page
      />
    );
  }

  const role =
    typeof user.role === "string"
      ? user.role.toLowerCase()
      : user.role === 2
      ? "admin"
      : "user";

  if (adminOnly && role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
