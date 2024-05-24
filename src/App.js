import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import About from "./components/About/About";
import Read from "./components/Read/Read";

// import AppContext from './utils/context'
function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/read" element={<Read />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
