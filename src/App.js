import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./layout";

import Home from "routes";
import FallbackLoading from "components/utils/FallBackLoading";
// import About from "routes/about";
// import Menu from "routes/menu";
// import Blogs from "routes/blogs";
// import BlogDetails from "routes/blog-detail";
// import Gallery from "routes/gallery";
// import Products from "routes/products";
// import ProductDetail from "routes/product-detail";
// import Cart from "routes/cart";
// import Receipes from "routes/receipes";
// import ReceipeDetail from "routes/receipes-details";
// import Contact from "routes/contact";


const AboutPreloaded = import("routes/about");
const MenuPreloaded = import("routes/menu");
const BlogsPreloaded = import ("routes/blogs");
const BlogDetailsPreloaded = import("routes/blog-detail");
const GalleryPreloaded = import("routes/gallery");
const ProductsPreloaded = import('routes/products');
const ProductDetailPreloaded = import("routes/product-detail");
const CartPreloaded = import("routes/cart");
const ReceipesPreloaded = import("routes/receipes");
const ReceipeDetailPreloaded = import("routes/receipes-details");
const ContactPreloaded = import("routes/contact");

const About = lazy(() => AboutPreloaded);
const Menu = lazy(() => MenuPreloaded);
const Blogs = lazy(() => BlogsPreloaded);
const BlogDetails = lazy(() => BlogDetailsPreloaded);
const Gallery = lazy(() => GalleryPreloaded);
const Products = lazy(() => ProductsPreloaded);
const ProductDetail = lazy(() => ProductDetailPreloaded);
const Cart = lazy(() => CartPreloaded);
const Receipes = lazy(() => ReceipesPreloaded);
const ReceipeDetail = lazy(() => ReceipeDetailPreloaded);
const Contact = lazy(() => ContactPreloaded);

const App = () => (
  <Router>
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Suspense fallback={<FallbackLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/receipes" element={<Receipes />} />
            <Route path="/receipes/:id" element={<ReceipeDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<div>Sorry... we have nothing to serve you :)</div>}
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Layout>
  </Router>
);

export default App;
