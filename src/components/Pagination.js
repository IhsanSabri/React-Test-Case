import React from "react";

const Pagination = ({ pageNumbers, changePageNumber, currentPage }) => {
  return (
    <nav>
      <ul className="mb-5 mt-5 justify-center flex items-center space-x-1">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPage === number
                ? "cursor-pointer px-4 py-2 bg-gray-200 rounded-md text-white bg-blue-400"
                : "cursor-pointer px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
            }
          >
            <a onClick={() => changePageNumber(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
