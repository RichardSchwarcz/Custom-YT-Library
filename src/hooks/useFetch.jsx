import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(endPoint) {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:8000" + endPoint).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function refetch() {
    console.log("pass");
    fetchData();
  }

  return { data, refetch };
}

export default useFetch;

// import { useEffect, useState } from "react";

// function useFetch(endPoint) {
//   const [data, setData] = useState([]);

//   function jsonResponse(res) {
//     return res.json();
//   }

//   async function fetchData() {
//     const fetchedData = await fetch("http://localhost:8000" + endPoint);
//     const json = await jsonResponse(fetchedData);
//     console.log(json);
//     setData(json);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function refetch() {
//     fetchData();
//   }

//   return { data, refetch };
// }

// export default useFetch;
