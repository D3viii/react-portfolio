import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className="container">
      <main className="container rounded">
        <section className="row" id="bigbox">
          <div className="col-md-8">
            <article className="block">
              <h1 className="block-header" id="logo">
                Devin Carr
              </h1>
              <hr />
              <img
                src="/assets/img/devinprofilepic.png"
                alt="Profile pic of me"
                id="about-image"
              />
              <Card className="text-center" border="primary" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Resume</Card.Title>
                  <Card.Text>
                    View my resume here!
                  </Card.Text>
                  <Button variant="outline-primary">Resume</Button>
                </Card.Body>
              </Card>
              <hr />
              <Card className="text-center" border="primary" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Portfolio</Card.Title>
                  <Card.Text>
                    View projects I have worked on!
                  </Card.Text>
                  <Button variant="outline-primary">Portfolio</Button>
                </Card.Body>
              </Card>
              <hr />
              <Card className="text-center" border="primary" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Blog</Card.Title>
                  <Card.Text>
                    Read about what I am currently working on and what I want to pursue!
                  </Card.Text>
                  <Button variant="outline-primary">Blog</Button>
                </Card.Body>
              </Card>
              <hr />
              <Card className="text-center" border="primary" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>About Me</Card.Title>
                  <Card.Text>
                    Read about my story
                  </Card.Text>
                  <Button variant="outline-primary">About Me</Button>
                </Card.Body>
              </Card>
              <h1 className="block-header" id="info">
                Interested? Here's my Contact Info!
              </h1>
              <p>
                <a href="devinsdevs@gmail.com">Email: devinsdevs@gmail.com</a>
              </p>
              <p>
                <a href="https://docs.google.com/document/d/1MQoOd4kBRyLshQ2Rc31V2e_6U1ma3bjvPgjzIhyy3CM/edit?usp=sharing">
                  Resume
                </a>
              </p>
              <p>
                <a href="https://github.com/d3viii">Github</a>{" "}
              </p>
              <p>
                <a href="https://www.linkedin.com/in/d3viiii/">LinkedIn</a>
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
