import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills"; // Assuming you have a Skills page
import Contact from "./Pages/Contact";
// import Certificates from "./Pages/Certificates";
import BlogDetail from "./Pages/BlogDetail";
import AdminBlogUploader from "./Pages/AdminBlogUploader";
import Blogs from "./Pages/Blogs";
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/certificate" element={<Certificates />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/admin/upload" element={<AdminBlogUploader />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </Router>
  );
}

export default App;
