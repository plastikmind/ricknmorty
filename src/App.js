import { useState, useEffect } from "react";

import axios from "axios";
import Card from "./components/Card/Card";
import CardDetails from "./components/Card/CardDetails";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  const apiEndPoint = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  const loadData = async () => {
    try {
      const response = await axios.get(apiEndPoint);
      setFetchedData(response.data);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    loadData();
  }, [apiEndPoint]);

  // const errorView = () => {
  //   return (
  //     <div>
  //       Oh no! Something went wrong. {error?.message}
  //       <button onClick={() => loadData()}>Try again</button>
  //     </div>
  //   );
  // };
  let handleError;
  if (error) {
    handleError = (
      <div className="flex items-center justify-center pt-5 text-white">
        Sorry, information not found.
      </div>
    );
  } else {
    handleError = "";
  }

  const listData = () => {
    if (results?.length > 0) {
      return (
        <div className="bg-[#000E03] min-h-screen">
          <Navbar />
          <Search setSearch={setSearch} setPageNumber={setPageNumber} />
          {handleError}
          {/* {hatadegiskeni} true ise block false ise hidden  */}
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 pt-20">
            <Card results={results} />
          </div>
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            info={info}
          />
        </div>
      );
    } else {
      return (
        <div className="flex min-h-screen bg-[#000E03] items-center justify-center">
          <div
            className="spinner-border animate-spin inline-block w-40 h-40 border-4 border-[#6FE843] rounded-full text-black"
            role="status"
          >
            <span className="">.as</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="">
      {/* <div>{error ? errorView() : listData()}</div> */}
      <div>{listData()}</div>
    </div>
  );
};

export default App;
