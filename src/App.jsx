import { useState } from "react";

import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Protfolio from "./components/Protfolio/Protfolio";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";
import Testimonial from "./components/Testimonial/Testimonial";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Service />
        <Resume />
        <Protfolio />
        <Pricing />
        <Testimonial />
        <Blogs />
        <Contact />
      </main>
    </>
  );
}

export default App;
