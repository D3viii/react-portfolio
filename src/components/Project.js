import React from 'react';

const Project = (props) => {
    return (
        <div className="col-sm-6 col-md-12 col-lg-6">
        <img className="img-fluid port-image" src={props.src} alt={props.alt}/>
        <p>
        <a href={props.deployURL}target="_blank">{props.name}</a></p>
        <p><a href={props.repoURL} target="_blank">{props.name} Repository</a></p>
      </div>
      );
    };

export default Project;