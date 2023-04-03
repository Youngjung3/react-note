import { useEffect, useState } from "react";

export function useFetch(url, initType) {
  const [data, setData] = useState(null);
  const fetchUrl = (type) => {
    fetch(url + "/" + type)
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  useEffect(() => {
    fetchUrl(initType);
  }, []);
  return { data, fetchUrl };
}
