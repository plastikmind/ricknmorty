import React from "react";
import { Link } from "react-router-dom";

const Card = ({ results }) => {
  let deadOrAlive;
  let display;

  if (results) {
    display = results.map((result) => {
      const { id, name, image, location, status } = result;

      if (status === "Alive") {
        deadOrAlive = (
          <p className="text-white bg-green-500 text-center rounded-lg font-light px-3 uppercase">
            {status}
          </p>
        );
      } else if (status === "Dead") {
        deadOrAlive = (
          <p className="text-white bg-red-600 text-center rounded-lg font-light px-3 uppercase">
            {status}
          </p>
        );
      } else {
        deadOrAlive = (
          <p className="text-white bg-gray-600 text-center rounded-lg font-light px-3 uppercase">
            {status}
          </p>
        );
      }

      return (
        <Link
          to={`${id}`}
          key={id}
          className="flex flex-col px-[5%] sm:px-[10%] border-x border-[#6FE843] text-[#6FE843] relative"
        >
          <img
            src={image}
            className="w-full shadow-lg rounded-lg shadow-[#6FE843]"
          />
          <div className="absolute rounded-lg z-2">{deadOrAlive}</div>
          <p className="font-[600] pt-5 pb-3 text-[16px] leading-4">{name}</p>
          <div className="pb-10">
            <div className="text-[11px]">Last Known Location</div>
            <div className="text-clip text-[13px] font-medium">
              {location.name}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Characters Found";
  }
  return <>{display}</>;
};

export default Card;

// import React from "react";

// const Card = ({ results }) => {
//   const { id, name, image, location } = results;
//   return (
//     <div>
//       {results.map((results) => {
//         <div>{results.name}</div>;
//       })}
//     </div>
//   );
// };
// export default Card;
