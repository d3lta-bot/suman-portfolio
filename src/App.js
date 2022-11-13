import React from "react";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

export default function App() {
  return (
    <div className=" px-10 lg:bg-black md:bg-black sm:bg-black md:px-20 lg:px-20">
      <Home />
      <Portfolio />
      <About />
    </div>
  );
}
