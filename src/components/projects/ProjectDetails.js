import React from "react";

export default function ProjectDetails(props) {
  const { id } = props.match.params;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'> Project title - {id}</span>
          <p>Lorem hey jjj lalda ldad ldadd ldadaf lfafa l/f kfa kffkf /ff</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by Mohamed</div>
          <div>2nd July, 8pm</div>
        </div>
      </div>
    </div>
  );
}
