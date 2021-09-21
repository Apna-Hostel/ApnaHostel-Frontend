import React from "react";
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './css/style.css'
import team1 from './img/team/01.jpg'
import team2 from './img/team/02.jpg'
import team3 from './img/team/03.jpg'
import team4 from './img/team/04.jpg'


function team(){
    return (
        <div id="team" class="text-center">
  <div class="container">
    <div class="col-md-8 col-md-offset-2 section-title">
      <h2>Meet the Team</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
    </div>
    <div id="row">
      <div class="col-md-3 col-sm-6 team">
        <div class="thumbnail"> <img src={team1} alt="..." class="team-img"/>
          <div class="caption">
            <h4>John Doe</h4>
            <p>Director</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 team">
        <div class="thumbnail"> <img src={team2} alt="..." class="team-img"/>
          <div class="caption">
            <h4>Mike Doe</h4>
            <p>Senior Designer</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 team">
        <div class="thumbnail"> <img src={team3} alt="..." class="team-img"/>
          <div class="caption">
            <h4>Jane Doe</h4>
            <p>Senior Designer</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 team">
        <div class="thumbnail"> <img src={team4} alt="..." class="team-img"/>
          <div class="caption">
            <h4>Karen Doe</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default team;