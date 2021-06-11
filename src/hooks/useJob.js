import { useState, useEffect } from 'react';

const useJob = (name) => {
  const [job, setJobs] = useState([]);
  const [error, setError] = useState('');

  let baseUrl = name
    ? `https://remotive.io/api/remote-jobs?company_name=${name}`
    : `https://remotive.io/api/remote-jobs?category=software-dev&limit=30`;
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
