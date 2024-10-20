import { useEffect, useState } from "react";
import constant from "./constant";

const useApiCall = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(constant.API);
    const jsonData = await response.json();
    setData(jsonData);
  };

  return data;
};

export default useApiCall;
