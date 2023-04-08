import React from 'react';
import Duties from './Duties';
import { v4 as uuidv4 } from 'uuid';

function JobInfo({ jobs, currentItem }) {
  const { company, dates, duties, title } = jobs[currentItem];
  const id = uuidv4();

  return (
    <article className="job-info">
      <div key={id}>
        <h3>{title}</h3>
        <span className="job-company">{company}</span>
        <p className="job-date">{dates}</p>
        <Duties duties={duties} />
      </div>
    </article>
  );
}

export default JobInfo;
