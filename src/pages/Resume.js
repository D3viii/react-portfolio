import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Portfolio from "./Portfolio";
import DCResume from "../components/ResumePDF/DCResume2023.pdf";

const Resume = () => {
  return (
    <div className="container">
      <main className="container rounded">
        <section className="row" id="bigbox">
          <div className="col-md-8">
            <article className="block">
              <Card
                className="text-center"
                border="primary"
                style={{ width: "100%" }}
              >
                <Card.Body>
                  <Card.Title>Resume</Card.Title>
                  <Card.Img
                    varient=
                  ></Card.Img>
                </Card.Body>
              </Card>
              <hr />
              <Card
                className="text-center"
                border="primary"
                style={{ width: "100%" }}
              >
                <Card.Body>
                  
                    Download
                  </Button>
                </Card.Body>
              </Card>
              <hr />
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
