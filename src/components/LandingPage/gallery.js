import React from "react";
import { Link } from "react-router-dom";
import sixs from './img/portfolio/06-small.jpg'

function gallery() {
    return(
        <div>
          <div cLassName="feature container-fluid col-12">
            <h2 className="feature-heading">Gallery</h2>
          </div>
          <div className="img-section row container-fluid">
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">Shivalik Hostel</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div> 
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">Aravali Hostel</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">Himalya Hostel</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">Kurukshetra Hostel</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">Vindhya Hostel</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">Kalpana Chawla Hostel</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div>
          </div>
        </div>
  );
}
export default gallery;