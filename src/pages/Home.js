import React from "react";
import Card from 'react-bootstrap/Card';

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
              <Card border="warning" style={{ width: "18rem" }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Warning Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
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
