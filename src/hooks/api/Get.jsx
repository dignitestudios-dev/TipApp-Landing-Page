import { useState, useEffect } from "react";
import axios from "axios"; // 🔁 You can replace this with custom axios instance when ready

const useUsers = (url, token) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false); // optional manual refetch trigger

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://api.the-perksapp.com${url}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in the request header
        },
      });
      console.log("API Response:", res.data);
      setData(res.data?.data || res.data);
    } catch (err) {
      setError(err);
      console.error("API Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchData(); // Call fetch only if token is available
  }, [url, refetch, token]);

  return { loading, data, error, setRefetch };
};

export { useUsers };
