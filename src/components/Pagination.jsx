// Pagination.jsx
import React from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr'; // Import the GrNext and GrPrev icons

const Pagination = ({ currentPage, totalItems, itemsPerPage, prevPage, nextPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center items-center gap-4 py-4">
      <div
        onClick={prevPage}
        className={`p-2 border text-black rounded-full cursor-pointer ${currentPage === 1 ? 'opacity-50' : ''}`}
      >
        <GrPrevious size={24} />
      </div>
      <span className="text-lg text-black">{`Page ${currentPage} of ${totalPages}`}</span>
      <div
        onClick={nextPage}
        className={`p-2 border text-black rounded-full cursor-pointer ${currentPage === totalPages ? 'opacity-50' : ''}`}
      >
        <GrNext size={24} />
      </div>
    </div>
  );
};

export default Pagination;
