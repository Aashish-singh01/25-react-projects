import { useState, useEffect } from "react";

export default function useFetch(url, option = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);

    try {
      const response = await fetch(url, option);

      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();

      setData(result);
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, pending, error };
}
