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
              <h4 className="img-heading" style={{color: "black"}}>Shivalik Hostel</h4>
              <Link className="nav-link" to="/gallery/shivalik">
                <img src={sixs} className="img-responsive" alt="hello" />
              </Link>
            </div> 
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading" style={{color: "black"}}>Aravali Hostel</h4>
              <Link className="nav-link" to="/gallery/aravali">
                <img src={sixs} className="img-responsive" alt="hello" />
              </Link>
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading" style={{color: "black"}}>Himalya Hostel</h4>
              <Link className="nav-link" to="/gallery/himalaya">
                <img src={sixs} className="img-responsive" alt="hello" />
              </Link>
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading" style={{color: "black"}}>Kurukshetra Hostel</h4>
              <Link className="nav-link" to="/gallery/kurukshetra">
                <img src={sixs} className="img-responsive" alt="hello" />
              </Link>
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              
                <h4 className="img-heading" style={{color: "black"}}>Vindhya Hostel</h4>
              
              <Link className="nav-link" to="/gallery/vindhya">
              <img src={sixs} className="img-responsive" alt="hello" />
              </Link>
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              
                <h4 className="img-heading" style={{color: "black"}}>Kalpna Chawla Hostel</h4>
              
              <Link className="nav-link" to="/gallery/kalpanachawla">
              <img src={sixs} className="img-responsive" alt="hello" />
              </Link>
            </div>
          </div>
        </div>
  );
}
export default gallery;