import React from "react";

export default function ProjectSummary({ project }) {
  return (
    <div>
      <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>{project.title}</span>
          <p>Posted by Mohamed</p>
          <p className='grey-text'>3rt september 5am</p>
        </div>
      </div>
    </div>
  );
}
