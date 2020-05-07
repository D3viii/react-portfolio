import React from "react";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <div>
      <div className="container">
        <main className="row">
          <div className="col-md-8">
            <article className="block">
              <h1 className="block-header">Portfolio</h1>
              <div class="row">
                <Project
                  name="PokeBattle"
                  src="/assets/img/poke.png"
                  deployURL="https://fathomless-citadel-99311.herokuapp.com/"
                  repoURL="https://github.com/D3viii/PokeBattle"
                />
                <Project
                  name="springBreakers"
                  src="/assets/img/spring.png"
                  deployURL="https://d3viii.github.io/springBreakers/"
                  repoURL="https://github.com/D3viii/springBreakers"
                />
              </div>
              <div class="row">
                <Project
                  name="fitnessTracker"
                  src="/assets/img/workout.png"
                  deployURL="https://immense-sands-29181.herokuapp.com/"
                  repoURL="https://github.com/D3viii/fitnessTracker"
                />
                <Project
                  name="Portfolio"
                  src="/assets/img/portfolio.png"
                  deployURL="https://d3viii.github.io/Portfolio/"
                  repoURL="https://github.com/D3viii/Portfolio"
                />
              </div>
              <div class="row">
                <Project
                  name="OfflineBudgetTracker"
                  src="/assets/img/tracker.png"
                  repoURL="https://github.com/D3viii/OfflineBudgetTracker"
                />
                <Project
                  name="Employee Tracker"
                  src="/assets/img/employee.png"
                  repoURL="https://github.com/D3viii/employee-tracker"
                />
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio