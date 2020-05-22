import React, { useState, useEffect } from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumber.map(number => (
            <li className="page-item" key={number}>
              <a onClick={()=>paginate(number)} href="!#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
