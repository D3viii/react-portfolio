import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Portfolio from "./Portfolio";

const Blog = () => {
  return (
    <div className="container">
      <main className="container rounded">
        <section className="row" id="bigbox">
          <div className="col-md-8">
            <article className="block">
              <h1 className="block-header" id="logo">
                Devin's Developer Journey
              </h1>
              <br/>
              <Card className="text-center" border="primary" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Starting my new blog to share my developer journey!</Card.Title>
                  <Card.Text>
                    I have started this blog to help me share what I am currently working on and ideas I have for the future.
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
