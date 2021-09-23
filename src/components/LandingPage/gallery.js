import React from "react";
// import './css/bootstrap.css'
// import './css/bootstrap.min.css'
// import './css/style.css'
import './css/nivo-lightbox/default.css'
import './css/nivo-lightbox/nivo-lightbox.css'
import sixl from './img/portfolio/06-large.jpg'
import sixs from './img/portfolio/06-small.jpg'




function gallery() {
    return(
<div id="portfolio" class="text-center">
  <div class="container">
    <div class="section-title">
      <h2>Gallery</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
    </div>
    <div class="row">
      <div class="portfolio-items">
      <div class="col-sm-6 col-md-4 col-lg-4">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href={sixl} title="Project Title" data-lightbox-gallery="gallery1">
              <div class="hover-text">
                <h4>Dolor Sit</h4>
              </div>
              <img src={sixs} class="img-responsive" alt="Project Title"/></a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href={sixl} title="Project Title" data-lightbox-gallery="gallery1">
              <div class="hover-text">
                <h4>Dolor Sit</h4>
              </div>
              <img src={sixs} class="img-responsive" alt="Project Title"/></a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href={sixl} title="Project Title" data-lightbox-gallery="gallery1">
              <div class="hover-text">
                <h4>Dolor Sit</h4>
              </div>
              <img src={sixs} class="img-responsive" alt="Project Title"/></a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href={sixl} title="Project Title" data-lightbox-gallery="gallery1">
              <div class="hover-text">
                <h4>Dolor Sit</h4>
              </div>
              <img src={sixs} class="img-responsive" alt="Project Title"/></a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href={sixl} title="Project Title" data-lightbox-gallery="gallery1">
              <div class="hover-text">
                <h4>Dolor Sit</h4>
              </div>
              <img src={sixs} class="img-responsive" alt="Project Title"/></a> </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-4">
          <div class="portfolio-item">
            <div class="hover-bg"> <a href={sixl} title="Project Title" data-lightbox-gallery="gallery1">
              <div class="hover-text">
                <h4>Dolor Sit</h4>
              </div>
              <img src={sixs} class="img-responsive" alt="Project Title"/></a> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}
export default gallery;