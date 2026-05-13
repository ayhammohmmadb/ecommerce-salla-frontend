import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Categories from "./pages/categories/Categories";
import Cart from "./pages/Cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
        <Toaster position="bottom-right"  toastOptions={{
          style:{
            background:'#cccccc',
            borderRadius:"5px",
            padding:"14px",
            color:"#333",
          }
        }}/>
        <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/:category" element={<Categories />} />
        <Route path="/:category/:id" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
     
    </>
  );
}

export default App;
