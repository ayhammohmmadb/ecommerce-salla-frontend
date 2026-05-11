import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Categories from "./pages/categories/Categories";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
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
