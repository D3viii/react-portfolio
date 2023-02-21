import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Project = (props) => {
    return (
        <div className="col-sm-6 col-md-12 col-lg-6">
          <Card className="text-center" border="primary" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Img className="img-fluid port-image" src={props.src}></Card.Img>
                  <Card.Text>
                    {props.description}
                  </Card.Text>
                  <Button variant="outline-primary" href={props.deployURL}>Visit</Button>
                  <Button variant="outline-primary" href={props.repoURL}>GitHub Repo</Button>
                </Card.Body>
              </Card>
              <hr />
        {/* <img className="img-fluid port-image" src={props.src} alt={props.alt}/>
        <p>
        <a href={props.deployURL}target="">{props.name}</a></p>
        <p><a href={props.repoURL} target="">{props.name} Repository</a></p> */}
      </div>
      );
    };

export default Project;