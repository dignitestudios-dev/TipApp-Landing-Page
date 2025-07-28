import { useState, useEffect } from "react";
import axios from "axios"; // 🔁 You can replace this with custom axios instance when ready

const useApi = (url, token, method = "GET", body = null) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in the request header
        },
      };

      let res;
      if (method === "POST") {
        // For POST request, send data in the body
        res = await axios.post(`https://api.the-perksapp.com${url}`, body, config);
      } else {
        // Default GET request
        res = await axios.get(`https://api.the-perksapp.com${url}`, config);
      }

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
  }, [url, token, body]);

  return { loading, data, error };
};

export { useApi };
