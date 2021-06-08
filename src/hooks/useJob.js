import { useState, useEffect } from 'react';

const useJob = (id) => {
  const [job, setJobs] = useState([]);
  const [error, setError] = useState('');

  let baseUrl = id
    ? `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
    : `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error('Resource was not found');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [baseUrl]);

  return [job, error];
};

export default useJob;
