import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './context/prodcontxt.jsx'
import { AuthProvider } from './context/authcontext.jsx'
import { CartProvider } from './context/cartcontext.jsx'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router-dom'
import { WishlistProvider } from './context/wishlistcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ProductProvider>
      <AuthProvider>
        <CartProvider>
           <WishlistProvider>
          {/* <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      <ToastContainer
  position="bottom-right"
  autoClose={4000}
  hideProgressBar
  newestOnTop
  closeOnClick
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light" // We will override this with CSS
  toastClassName="custom-toast"
/>
      
    <App />
</WishlistProvider>
    </CartProvider>
    
    </AuthProvider>
    </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
)
