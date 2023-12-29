import logo from "./logo.svg";
import "./App.css";
import Header from "./components/home/header/Header";
import HeaderBottom from "./components/home/header/HeaderBottom";
import SpecialCase from "./components/specialCase/SpecialCase";
import {
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Footer from "./components/home/footer/Footer";
import FooterBottom from "./components/home/footer/FooterBottom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/Contact/Contact";
import Journal from "./pages/journal/Journal";
import About from "./pages/about/About";
import Offer from "./pages/offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/productDetails/ProductDetails";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/offer" element={<Offer />} />
        <Route path="/paymentgateway" element={<Payment />} />
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Route>
    </Route>
  )
);
function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
