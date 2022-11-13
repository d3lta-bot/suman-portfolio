import React from "react";
import Cube from "../Cube";

export default function Home() {
  return (
    <section className="min-h-screen" id="top">
      <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl">NAYAN</h1>
        <ul className="flex items-center">
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href="#About"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Nayan Dey
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Developer and designer.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Freelancer providing services for programming and design content
          needs. Join me down below and let's get cracking!
        </p>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 sm:mr-auto relative overflow-hidden mt-20 md:h-96 md:w-96 md:mx-auto">
          <Cube />
        </div>
      </div>
    </section>
  );
}
