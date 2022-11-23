import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <a href="./">
        {" "}
        <p className="text-white font-bold text-2xl sm:text-4xl pt-12">
          RICK AND MORTY WIKI
        </p>
      </a>
    </div>
  );
};

export default Navbar;
