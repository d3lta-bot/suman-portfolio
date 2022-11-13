import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineVerticalAlignTop,
} from "react-icons/ai";

export default function About() {
  return (
    <div id="About">
      <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
      <hr class="my-4 mx-auto w-96 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <div className="w-full md:w-1/2 text-base md:text-lg text-center md:text-left">
          <h2 className="text-primary font-bold text-2xl md:text-3xl mb-3  dark:text-white">
            Hi, I'm Nayan
          </h2>
          <p className="mb-3  opacity-70  dark:text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            impedit architecto a, repellat sint repellendus velit recusandae
            libero beatae facilis! Vero ex labore amet voluptas similique
            dignissimos accusantium, provident facilis pariatur libero aperiam
            quod?
          </p>
          <p className="mb-3  opacity-70  dark:text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            impedit architecto a, repellat sint repellendus velit recusandae
            libero beatae facilis! Vero ex labore amet voluptas similique
            dignissimos accusantium, provident facilis pariatur libero aperiam
            quod?
          </p>
          <p className="mb-3  opacity-70  dark:text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            impedit architecto a, repellat sint repellendus velit recusandae
            libero beatae facilis! Vero ex labore amet voluptas similique
            dignissimos accusantium, provident facilis pariatur libero aperiam
            quod?
          </p>
          <p className="mb-3  opacity-70  dark:text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            impedit architecto a, repellat sint repellendus velit recusandae
            libero beatae facilis! Vero ex labore amet voluptas similique
            dignissimos accusantium, provident facilis pariatur libero aperiam
            quod?
          </p>
        </div>
      </div>
      <hr class="my-4 mx-auto w-96 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a href="#top">
          <AiOutlineVerticalAlignTop />
        </a>
      </div>
      <footer>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a
            href="https://www.youtube.com/watch?v=bmpI252DmiI&t=49s"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="https://www.youtube.com/watch?v=bmpI252DmiI&t=49s"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.youtube.com/watch?v=bmpI252DmiI&t=49s"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillYoutube />
          </a>
        </div>
        <div className="text-center p-4 dark:text-white">
          © 2021 Copyright:
          <a class="text-whitehite" href="https://tailwind-elements.com/">
            Tailwind Elements
          </a>
        </div>
      </footer>
    </div>
  );
}
