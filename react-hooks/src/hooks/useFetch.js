import { useEffect, useState } from 'react';

export function useFetch(url, method = 'get') {
  const [response, setResponse] = useState({ data: null, loading: true });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url, { method });
      setResponse({ data: await data.json(), loading: false });
    };
    fetchData();
  }, [url, method]);

  return response;
}
