import { useState, useEffect } from "react";
import axios from 'axios';

const OutPut = () => {
    const url = "https://pfhbdgndwphxqlzshzvu.supabase.co/storage/v1/object/public/Exercise%20Data//processed_routinepage1.json";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    console.log(data)
  );
}

export default OutPut;
