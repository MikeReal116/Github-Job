import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import useJobs from '../../hooks/useJob';
import JobItem from '../JobItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

const JobList = () => {
  const [jobs, error] = useJobs();
  const [pageNumber, setPageNumber] = useState(1);

  const jobsPerPage = 5;
  const numberOfPages = Math.ceil(jobs.length / jobsPerPage);
  const firstIndexOfCurentItemsShowing = pageNumber * jobsPerPage;

  const handleChange = (event, page) => {
    setPageNumber(page);
  };

  const classes = useStyles();

  const joblisting = jobs
    .slice(
      firstIndexOfCurentItemsShowing,
      firstIndexOfCurentItemsShowing + jobsPerPage
    )
    .map((job) => (
      <JobItem
        key={job.id}
        company_logo={job.company_logo}
        company={job.company}
        job={job.title}
        type={job.type}
        createdAt={job.created_at}
        location={job.location}
      />
    ));

  return (
    <div className={classes.root}>
      {error && <p>{error}</p>}
      {joblisting}
      <Pagination
        count={numberOfPages}
        variant='outlined'
        shape='rounded'
        onChange={handleChange}
      />
    </div>
  );
};

export default JobList;
