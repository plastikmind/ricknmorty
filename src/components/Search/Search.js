import React from "react";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <div className="flex items-center justify-center pt-10">
      <form className="flex">
        <input
          onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search for Characters"
          type="text"
          className="px-4 py-2 rounded-lg opacity-50 text-center"
        />
      </form>
    </div>
  );
};

export default Search;
