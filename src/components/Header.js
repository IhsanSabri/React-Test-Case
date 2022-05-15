import React, { useState } from "react";

const Header = () => {
  const [themeName, setThemName] = useState("");

  const changeTheme = () => {
    if (
      document.documentElement.classList.value !== "dark" &&
      localStorage.getItem("theme") === "light"
    ) {
      document.documentElement.classList.add("dark");
      setThemName("White Theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setThemName("Black Theme");
      localStorage.setItem("theme", "light");
    }
  };

  const changeThemeOnLoad = () => {
    if (
      localStorage.getItem("theme") === "dark"
    ) {
      document.documentElement.classList.add("dark");
      setThemName("White Theme");
    } else {
      document.documentElement.classList.remove("dark");
      setThemName("Black Theme");
    }
  };

  return (
    <header
      onLoad={() => changeThemeOnLoad()}
      className="header relative bg-white lg:border-b dark:bg-black"
    >
      <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <img
              className="w-10 h-10 ml-20"
              src="https://banner2.cleanpng.com/20180328/roq/kisspng-circle-logo-symbol-font-templates-5abbf957bfda53.1977074015222685037859.jpg"
              alt="logo"
            />
          </a>
        </div>
        <nav className="md:flex space-x-10">
          <a href="/page/blog-page">
            <div className="relative dark:text-white">Blog Page</div>
          </a>
          <a href="/page/contact">
            <div className="relative dark:text-white">Contact</div>
          </a>
        </nav>
        <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
          <button
            onClick={(event) => changeTheme(event)}
            className="relative w-18 mr-20 text-xs h-10 flex whitespace-nowrap items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {themeName}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
