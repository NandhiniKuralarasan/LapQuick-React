import { useState, useRef } from 'react';

const useLaptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const requestRef = useRef(null);

  const fetchLaptops = () => {
    if (hasFetched) {
      return Promise.resolve(laptops);
    }

    if (requestRef.current) {
      return requestRef.current;
    }

    setLoading(true);
    setError(null);

    requestRef.current = (async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await fetch(`${import.meta.env.BASE_URL}LaptopData.json`);

        if (!response.ok) {
          throw new Error("Couldn't retrieve data");
        }

        const data = await response.json();

        setLaptops(data.Laptops);
        setHasFetched(true);
        return data.Laptops;
      } 
      catch (error) {
        setError(error.message);
        throw error;
      } 
      finally {
        setLoading(false);
        requestRef.current = null;
      }
    })();

    return requestRef.current;
  };

  return {
    laptops,
    error,
    loading,
    hasFetched,
    fetchLaptops
  };
};

export default useLaptops;
