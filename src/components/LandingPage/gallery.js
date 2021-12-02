import React from "react";
import { Link } from "react-router-dom";
import sixs from './img/portfolio/06-small.jpg'
import shivalik from './img/shivalik_building.jpeg'
import aravali from './img/aravali_building.jpeg'
import himalaya from './img/himalaya_building.jpeg'
import kurukshetra from './img/kurukshetra_building.jpeg'
import vindhya from './img/vindhya_building.jpeg'
import kalpanachawla from './img/kalpana_building.jpeg'

function gallery() {
    return(
        <div>
          <div cLassName="feature container-fluid col-12">
            <h2 className="feature-heading">Gallery</h2>
          </div>
          <div className="img-section row container-fluid">
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading" style={{color: "black"}}>Shivalik Hostel</h4>
              <Link className="nav-link" to="/gallery/shivalik">
                <img src={shivalik} className="img-responsive" alt="hello" />
              </Link>
            </div> 
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading" style={{color: "black"}}>Aravali Hostel</h4>
              <Link className="nav-link" to="/gallery/aravali">
                <img src={aravali} className="img-responsive" alt="hello" />
              </Link>
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading" style={{color: "black"}}>Himalya Hostel</h4>
              <Link className="nav-link" to="/gallery/himalaya">
                <img src={himalaya} className="img-responsive" alt="hello" />
              </Link>
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading" style={{color: "black"}}>Kurukshetra Hostel</h4>
              <Link className="nav-link" to="/gallery/kurukshetra">
                <img src={kurukshetra} className="img-responsive" alt="hello" />
              </Link>
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              
                <h4 className="img-heading" style={{color: "black"}}>Vindhya Hostel</h4>
              
              <Link className="nav-link" to="/gallery/vindhya">
              <img src={vindhya} className="img-responsive" alt="hello" />
              </Link>
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              
                <h4 className="img-heading" style={{color: "black"}}>Kalpna Chawla Hostel</h4>
              
              <Link className="nav-link" to="/gallery/kalpanachawla">
              <img src={kalpanachawla} className="img-responsive" alt="hello" />
              </Link>
            </div>
          </div>
        </div>
  );
}
export default gallery;