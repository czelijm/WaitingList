import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = (url:string) : { data?:{}, loading:boolean, error:boolean} => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(url);
        setData(response);
      } catch (er) {
        setError(true)
        console.error(er)
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;