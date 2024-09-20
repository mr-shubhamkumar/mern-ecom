import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
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
import UnauthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import CheckAuth from "./components/common/check-auth";
import { Skeleton } from "@/components/ui/skeleton"


function App() {

  const {user, isAuthenticated , isLoading} = useSelector(state=>state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if(isLoading) return <Skeleton className="w-[800px] h-[600px]  bg-black" />

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>

        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>


        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>


        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckOut />} />
        </Route>


        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<UnauthPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
