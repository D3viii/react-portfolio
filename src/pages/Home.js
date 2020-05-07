import React from 'react';

const Home = () => {
    return (
        <div>
        <main className="container rounded">
    <section className="row">
      <div className="col-md-8">
        <article className="block">
          <h1 className="block-header">Devin Carr</h1>
          <hr />
          <img src="/assets/img/PIC.png" alt="Profile pic of me" id="about-image" />
          <p>  iOS and Full-Stack Dev from Atlanta, GA.
          </p>
          <br />
          <p> I like to travel and game.
          </p>
          <h1 className="block-header">
            Contact Information:
           </h1>
           <p><a href="devinsdevs@gmail.com">Email</a></p>
           <p><a href="/assets/img/dcresume.pdf">Resume</a></p>
            <p><a href="https://github.com/d3viii">Github</a> </p>
            <p><a href="https://www.linkedin.com/in/d3viiii/">LinkedIn</a></p>
        </article>
      </div>
    </section>
  </main>
        </div>
    );
};

export default Home;