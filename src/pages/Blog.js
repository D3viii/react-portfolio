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
                  <Card.Title>Tranforming my drone service business into a drone pilot platform. (02/24/2023)</Card.Title>
                  <Card.Text>
                    I have recently decided to transform my drone service business "UpDrone Co." into a platform for drone pilots to share their content and build a portfolio of their work. I decided to do this for couple of reasons. I am a Software Developer and my passion is Software Development, not drones. Don't get me wrong, I love drones and I am very talented with a drone but trying to turn it into a profession didn't fuel that hunger inside me the way software development does. I did however come to a conclusion that if you want to turn flying drones into a job you have two choices, building your own small business or joining a company that doesn't let you be creative with your work. Creating a small business is challenging and can take a lot of time to find clients and can be expensive to advertise or build a website to show people your work. At the time, my girlfriend and I were signing up for all of these side hustle apps such as Rover, Doordash and Instacart to make extra money while we are both in college. Ater doing Rover for a while, it dawned on me that this business model could work for amateur drone pilots who want to make extra money by offering their services to people wanting drone content. It would make sense to hire someone for an event or a video shoot instead of spending thousands on a drone and potentially flying it into a tree after taking off, just to realize you didn't opt in for the protection plan. After doing hours of research, I came to the conclusion that there isn't a platform like this and it could potentially change the drone industry forever. Think about it, it seems everyone has a few side hustles these days and why not choose one that could let you be creative and help you build a portfolio of your work. I am excited to start this journey and to continue building my React skills along the way!
                  </Card.Text>
                </Card.Body>
              </Card>
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
