import React from 'react';

const Home = () => {
    return (
        <div>
        <main className="container rounded">
    <section className="row" id="bigbox">
      <div className="col-md-8">
        <article className="block" >
          <h1 className="block-header" id="logo">Devin Carr</h1>
          <hr />
          <img src="/assets/img/PIC.png" alt="Profile pic of me" id="about-image" />
          <p id="pp">  iOS and Full-Stack Developer from Atlanta, GA. I am a Young and Creative developer. At 21 I have had a app on the app store named "Brav0" and 4 websites for companies I have built in the past. I have a Certificate from "Big Nerd Ranch" for iOS Development and a Certificate from Georgia Tech for "Full Stack Development". I have a good sense of humor and I am very easy to work with. I want to eventually keep going down the Mobile route by learning React Native. I also have the ability to see projects from both perspectives. 
          </p>
          <br />
          <p> As of now, I spend time i'm not coding on Modern Warfare. I really enjoy gaming and being able to connect with people. I also am a big Apple Fanboy, Owning a total of 2 Macbook Pros and a iMac along with the basics Airpods, Apple Watch, iPad, iPhone and an endless supply of lightning cables. I eventually plan on moving to gaming on a nice spec gaming PC, that I want to custom build. It looks like I will have to figure out Windows. 
          </p>
          <h1 className="block-header" id="info">
            Contact Information:
           </h1>
           <p><a href="devinsdevs@gmail.com">Email: devinsdevs@gmail.com</a></p>
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