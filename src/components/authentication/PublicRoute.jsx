import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authcontext";

export default function PublicRoute() {
  const { user } = useAuth();

  // 🚀 If user already logged in, NEVER show login/signup
  if (user) {
    const role =
      typeof user.role === "string"
        ? user.role.toLowerCase()
        : user.role === 2
        ? "admin"
        : "user";

    return <Navigate to={role === "admin" ? "/admin" : "/"} replace />;
  }

  // Otherwise allow login/signup
  return <Outlet />;
}
