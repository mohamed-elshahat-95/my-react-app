import Navbar from "./compoenents/Navbar";
import ProductsList from "./compoenents/ProductsList";
import Slider from "./compoenents/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./compoenents/About";
import ProductDetails from "./compoenents/ProductDetails";
import ContactUs from "./compoenents/ContactUs";
import SupportCenter from "./compoenents/SupportCenter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="support-center" element={<SupportCenter />} />
      </Routes>
    </div>
  );
}

export default App;
