import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 p-4 bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-white sm:text-center text-400">
        Footer
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-400 sm:mt-0">
        <li>
          <a href="https://www.youtube.com/" className="text-white mr-4 hover:underline md:mr-6 ">
            Youtube
          </a>
        </li>
        <li>
          <a href="https://github.com/" className="text-white mr-4 hover:underline md:mr-6">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv/" className="text-white mr-4 hover:underline md:mr-6">
            Twitch
          </a>
        </li>
        <li>
          <a href="/page/contact" className="text-white hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
