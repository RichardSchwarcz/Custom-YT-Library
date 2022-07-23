import useFetch from "../hooks/useFetch";
import { useState } from "react";

function useHandleModalSubmit(e, data, endPoint) {
  const [data, setData] = useState([]);
  e.preventDefault();

  function postToDB() {
    return fetch("http://localhost:8000" + endPoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  function jsonResponse(res) {
    return res.json();
  }

  async function fetchData() {
    const fetchedData = await fetch("http://localhost:8000" + endPoint);
    const json = await jsonResponse(fetchedData);
    console.log(json);
    setData(json);
  }
}
