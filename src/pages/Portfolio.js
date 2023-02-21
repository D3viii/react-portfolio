import React from "react";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <div>
      <div className="container">
        <main className="row" id="bigbox">
          <div className="col-md-8">
            <article className="block">
              <h1 className="block-header" id="info">
                Portfolio
              </h1>
              <div class="row">
                <Project
                  name="FriendOps"
                  description="Connect with other gamers based on what games they play. FriendOps is a gamer social media platform meant for you to gain more freinds to game with."
                  src="/assets/img/SC2!.png"
                  repoURL="https://github.com/D3viii/FriendOps"
                />
                <Project
                  name="PokeBattle"
                  description="Pokemon styled game to help you and a friend settle an argument. Each player is given random Pokemon with variable powers. Who ever has the best wins!"
                  src="/assets/img/poke.png"
                  deployURL="https://fathomless-citadel-99311.herokuapp.com/"
                  repoURL="https://github.com/D3viii/PokeBattle"
                />
              </div>
              <div class="row">
                <Project
                  name="fitnessTracker"
                  description="Track your fitness routine and gain insights on your day to day workouts."
                  src="/assets/img/workout.png"
                  deployURL="https://immense-sands-29181.herokuapp.com/"
                  repoURL="https://github.com/D3viii/fitnessTracker"
                />
                <Project
                  name="Portfolio"
                  description="My old portfolio site built using just HTML and CSS"
                  src="/assets/img/portfolio.png"
                  deployURL="https://d3viii.github.io/Portfolio/"
                  repoURL="https://github.com/D3viii/Portfolio"
                />
              </div>
              <div class="row">
                <Project
                  name="OfflineBudgetTracker"
                  description="This helps create and manage a budget, whether its for business expenses or college students, this will work all the same."
                  src="/assets/img/tracker.png"
                  repoURL="https://github.com/D3viii/OfflineBudgetTracker"
                />
                <Project
                  name="Employee Tracker"
                  description="A CLI based project that allows you to keep track of what employees you currently have and edit their information such as employee ID... ."
                  src="/assets/img/employee.png"
                  repoURL="https://github.com/D3viii/employee-tracker"
                />
              </div>
              <div class="row">
              <Project
                  name="springBreakers"
                  description="Help plan your Spring Break by finding Hotels with friends. You and friends can book your perfect Spring Break!"
                  src="/assets/img/spring.png"
                  deployURL="https://d3viii.github.io/springBreakers/"
                  repoURL="https://github.com/D3viii/springBreakers"
                />
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
