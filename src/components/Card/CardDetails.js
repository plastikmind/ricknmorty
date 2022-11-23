import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

import axios from "axios";

const CardDetails = () => {
  let { id } = useParams();

  const [fetchedData, setFetchedData] = useState([]);

  let { name, location, origin, gender, image, status, species } = fetchedData;

  const apiEndPoint = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async () => {
      const response = await axios.get(apiEndPoint);
      setFetchedData(response.data);
    })();
  }, [apiEndPoint]);

  let deadOrAlive;

  if (status === "Alive") {
    deadOrAlive = (
      <div className="text-white bg-green-500 text-center rounded-lg uppercase">
        {status}
      </div>
    );
  } else if (status === "Dead") {
    deadOrAlive = (
      <div className="text-white bg-red-600 text-center rounded-lg uppercase">
        {"Died"}
      </div>
    );
  } else {
    deadOrAlive = (
      <div className="text-black bg-[#AECEB3] text-center rounded-lg w-full uppercase">
        {status}
      </div>
    );
  }
  return (
    <div className="flex bg-[#000E03] flex-col min-h-screen items-center">
      <Navbar />
      <div className="flex flex-col bg-[#000E03] text-[#6FE843]">
        <div className="text-2xl sm:text-3xl font-semibold uppercase pt-20 pb-10 text-center">
          {name}
        </div>

        <div className="flex flex-col">
          {" "}
          <div className="flex items-center justify-center">
            <img src={image} className="w-[300px]" />
          </div>
        </div>

        <div className="text-center px-4 pb-10">
          <div className="pt-16">{deadOrAlive} </div>
          <div className="pt-2">&nbsp;IN {location?.name}</div>
          <div className="uppercase pt-8 border-b border-[#F5EE75] m-0">
            Origin
          </div>
          <div className="">{origin?.name}</div>
          <div className="uppercase pt-8 border-b border-[#F5EE75] m-0">
            Species
          </div>
          <div>{species}</div>
          <div className="uppercase pt-8 border-b border-[#F5EE75] m-0">
            Gender
          </div>
          <div>{gender}</div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
