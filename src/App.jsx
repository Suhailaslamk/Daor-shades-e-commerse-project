
import {  Routes, Route, useLocation  } from "react-router-dom";
import Home from './components/home.jsx'
import Products from "./components/products/products.jsx";
import Signup from "./components/authentication/signup.jsx";
import Login from './components/authentication/Login.jsx'
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/footer.jsx";
import About from "./components/about.jsx";
import ProductDetails from "./components/products/productdetails.jsx";
import WishlistPage from "./components/products/WishlistPage.jsx";
import CartPage from "./components/products/CartPage.jsx";
import PaymentPage from "./components/products/PaymentPage.jsx";
import OrderConfirmed from "./components/products/OrderConfirmed.jsx";
import UserDetails from "./components/UserDetails.jsx";
import OrdersPage from "./components/products/OrderPage.jsx";

import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AdminDashboard from "./components/admin/AdminDashBoard.jsx";
import AdminProducts from "./components/admin/AdminProducts.jsx";
import AdminUsers from "./components/admin/AdminUsers.jsx";
import AdminUserDetails from "./components/admin/AdminUserDetails.jsx";
import { AdminProvider } from "./components/admin/AdminContext/AdminContext.jsx";
import AdminHome from "./components/admin/AdminHome.jsx";
import AdminOrders from "./components/admin/AdminOrders.jsx";
import NotFound from "./components/layout/NotFound.jsx";
import ProtectedRoute from "./components/authentication/ProtectedRoute.jsx";
import Unauthorized from "./components/layout/unAuthorised.jsx";
import ShippingAddressPage from "./components/products/ShippingAddressPage.jsx";
import AdminOrderDetails from "./components/admin/AdminOrderDetails.jsx";
import PublicRoute from "./components/authentication/PublicRoute.jsx";
import Blocked from "./components/authentication/Blocked.jsx";
import NotificationBell from "./components/layout/NotificationBell.jsx";
import AdminCategories from "./components/admin/categories/AdminCategories.jsx";

export default function App(){
const location=useLocation()

const hideNavbarRoutes=['/login','/signup','/admin']
const shouldHideNavbar = hideNavbarRoutes.some((route)=> location.pathname.startsWith(route))
  return (
<>
   {! shouldHideNavbar && <Navbar />}

<ScrollToTop />
<AdminProvider>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/blocked" element={<Blocked />} />
<Route path="/products" element={<Products />} />
<Route element={<PublicRoute />}>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
</Route>
<Route path="/about" element={<About />} />
<Route path="/products/:id" element={<ProductDetails />} />
<Route element={<ProtectedRoute />}>
  <Route path="/cart" element={<CartPage />} />
    <Route path="/notification" element={<NotificationBell />} />
  <Route path="/wishlist" element={<WishlistPage />} />
  <Route path="/orders-page" element={<OrdersPage />} />
  <Route path="/shipping-address" element={<ShippingAddressPage />} />
  <Route path="/payment" element={<PaymentPage />} />
  <Route path="/order-confirmed" element={<OrderConfirmed />} />
  <Route path="/user-details" element={<UserDetails />} />
</Route>
<Route element={<ProtectedRoute adminOnly={true} />}>
<Route path="/admin/categories" element={<AdminCategories />} />
<Route path="/admin" element={<AdminDashboard />} >
<Route path="products" element={ <AdminProducts /> } />
<Route path="users" element={ <AdminUsers />} />
<Route path="users/:id" element={<AdminUserDetails />} />
<Route index element={ <AdminHome /> } />
<Route path="orders" element={<AdminOrders />} />
<Route path="orders/:id" element={<AdminOrderDetails />} />
</Route>
</Route>
<Route path="/unauthorized" element={<Unauthorized />} />
<Route path="*" element={<NotFound />} />
</Routes>  
</AdminProvider> 
{! shouldHideNavbar && <Footer /> } 

 </>
  )
}