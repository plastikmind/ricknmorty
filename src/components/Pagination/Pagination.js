import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  return (
    <div className="flex items-center justify-center py-10">
      <ReactPaginate
        pageCount={info?.pages}
        className="text-white flex gap-1 sm:gap-2"
        nextClassName="border-[#A1D0CA] border-2 text-[14px] sm:text-[16px] px-2 py-1 font-semibold hover:bg-[#A1D0CA]"
        previousClassName="border-[#A1D0CA] border-2 text-[14px] sm:text-[16px] px-2 py-1 font-semibold hover:bg-[#A1D0CA]"
        pageClassName="border-b border-[#F5EE75] h-6 w-6 sm:h-8 sm:w-8 text-center hover:bg-[#F5EE75] hover:text-black"
        activeClassName="bg-[#F5EE75] text-black"
        previousLabel="Prev"
        onPageChange={(x) => {
          setPageNumber(x.selected + 1); // we add 1 because response start with 0
        }}
      />
    </div>
  );
};

export default Pagination;
