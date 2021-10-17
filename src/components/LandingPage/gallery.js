import React from "react";
import sixs from './img/portfolio/06-small.jpg'

function gallery() {
    return(
        <div>
          <div cLassName="feature container-fluid col-12">
            <h2 className="feature-heading">Gallery</h2>
          </div>
          <div className="img-section row container-fluid">
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">lorem Ipsum</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">lorem Ipsum</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">lorem Ipsum</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">lorem Ipsum</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">lorem Ipsum</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div>
            <div className="img-item col-lg-4 col-md-4 col-sm-6">
              <h4 className="img-heading">lorem Ipsum</h4>
              <img src={sixs} className="img-responsive" alt="hello" />
            </div>
          </div>
        </div>
  );
}
export default gallery;