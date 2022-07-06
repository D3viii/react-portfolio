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
          <img src="/assets/img/devinprofilepic.png" alt="Profile pic of me" id="about-image" />
          <p id="pp">  My name is Devin Carr, I am 22 and Live in Atlanta, Ga. I am a highly motivated and creative Software Engineer. I fell in love with apps straight out of high school. I built my first app named “Brav0” and released it onto the app store in 2018. It was a Braves trivia app built using Swift. From there I started learning more and more about coding and finding my inner Engineer. I am able to see a project from both the user and the developers point of view. I am very creative and have a notebook full of ideas that one day I want to pursue. I am a great team member as well as a good leader. I am a team player and can effectively explain concepts and processes to others in a manner that is easily understood. My goals are to continue to grow and learn, and gain as much experience as I can in order to fulfill the ultimate dream of creating my own company. When I was 17 I built a site called “t3chmoney.com”, It was a tech review / tech support platform. My proudest feature of the site was called “Smartphone Builder”, it was used to help people who can’t decide on what phone they wanted to get. During the time that the feature was built, the smartphone market wasn’t as big as it is today. It gave them scenarios to choose from that best described them as a user and what they would need the phone for. The categories that were used to determine the result were storage usage, battery usage, size of your hands and budget. After the user answered all those, it would give them a calculated suggestion for the phone that would best suit their needs. In summer of 2022, I decided to start my first company “UpDrone Co.”. It is a drone service that offers real estate photography, roof inspections, event footage and everything in-between. 

          </p>
          <br />
          <p> My Hobbies outside of Coding are Traveling, Fishing and Innovating. I have Traveled the world twice ranging from Europe to Asia. Bass fishing is my escape from this hectic world and allows me to ground myself and breathe. When I'm not working or fishing, I am hanging out at home with my girlfriend and 2 cats either playing "Mario" or catching up on our favorite Netflix shows.
          </p>
          <h1 className="block-header" id="info">
            Interested? Here's my Contact Info!
           </h1>
           <p><a href="devinsdevs@gmail.com">Email: devinsdevs@gmail.com</a></p>
           <p><a href="https://docs.google.com/document/d/1MQoOd4kBRyLshQ2Rc31V2e_6U1ma3bjvPgjzIhyy3CM/edit?usp=sharing">Resume</a></p>
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
