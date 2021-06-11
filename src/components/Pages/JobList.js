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
  const [pageNumber, setPageNumber] = useState(0);

  const jobsPerPage = 5;
  const numberOfPages = Math.ceil(jobs.jobs?.length / jobsPerPage);
  const firstIndexOfCurentItemsShowing = pageNumber * jobsPerPage;

  const handleChange = (event, page) => {
    setPageNumber(page);
  };

  const classes = useStyles();

  const joblisting = jobs?.jobs
    ?.slice(
      firstIndexOfCurentItemsShowing,
      firstIndexOfCurentItemsShowing + jobsPerPage
    )
    .map((job) => (
      <JobItem
        key={job.id}
        company_logo={job.company_logo_url}
        company={job.company_name}
        job={job.title}
        type={job.job_type}
        createdAt={job.publication_date}
        location={job.candidate_required_location}
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
