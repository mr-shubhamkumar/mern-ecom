import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "@/components/admin/layout.jsx";
import AdminDashboard from "@/pages/admin/dachboard.jsx";
import AdminProducts from "@/pages/admin/products.jsx";
import AdminOrders from "@/pages/admin/orders.jsx";
import AdminFeatures from "@/pages/admin/features.jsx";
import ShoppingLayout from "@/components/shopping/layout.jsx";
import NotFound from "@/index.jsx";
import ShoppingHome from "@/pages/shopping/home.jsx";
import ShoppingListing from "@/pages/shopping/listing.jsx";
import ShoppingAccount from "@/pages/shopping/account.jsx";
import ShoppingCheckOut from "@/pages/shopping/checkout.jsx";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      
      {/* common components */}
      <h1>Header components</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
        <Route path="login" element={<AuthLogin/>}/>
        <Route path="register" element={<AuthRegister/>}/>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="products" element={<AdminProducts/>}/>
            <Route path="orders" element={<AdminOrders/>}/>
            <Route path="features" element={<AdminFeatures/>}/>
        </Route>
        <Route path='/shop' element={<ShoppingLayout/>}>
            <Route path="home" element={<ShoppingHome/>}/>
            <Route path="listing" element={<ShoppingListing/>}/>
            <Route path="account" element={<ShoppingAccount/>}/>
            <Route path="checkout" element={<ShoppingCheckOut/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App