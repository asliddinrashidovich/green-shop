import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/main-layout"
import Homepage from "./pages/homepage"
import ProfilePage from "./pages/profile"
import { AccountDetails, Address, BlogDetails, MyProducts, TrackOrder, Wishlist } from "./components"
import NotFound from "./pages/not-found"
import PropTypes from "prop-types"
import BlogsPage from "./pages/blog"
import ProductDetailsPage from "./pages/product-details-page"
import ProductCard from "./pages/product-card"
import Checkout from "./pages/checkout"

App.propTypes  = {
  children: PropTypes.node.isRequired
}

function App() {
  const isAuth = () => {
    return localStorage.getItem('user')
  }
  function ProtectedRoute({children}) {
    if(isAuth()) {
      return children
    } else {
      return <NotFound/>
    }
  }
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="blog" element={<BlogsPage/>}></Route>
        <Route path="product-card" element={<ProductCard/>}/>
        <Route path="product-checkout" element={<Checkout/>}/>
        <Route path="blog/:id" element={<BlogDetails/>}/>
        <Route path="shop/:category/:id" element={<ProductDetailsPage/>}/>
        <Route path="profile/" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}>
          <Route index element={<ProtectedRoute><AccountDetails/></ProtectedRoute>}/>
          <Route path="my-products" element={<ProtectedRoute><MyProducts/></ProtectedRoute>}/>
          <Route path="address" element={<ProtectedRoute><Address/></ProtectedRoute>}/>
          <Route path="wishlist" element={<Wishlist><Wishlist/></Wishlist>}/>
          <Route path="track-order" element={<ProtectedRoute><TrackOrder/></ProtectedRoute>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App