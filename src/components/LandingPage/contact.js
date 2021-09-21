import React from "react";
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './css/style.css'
import './css/nivo-lightbox/default.css'
import './css/nivo-lightbox/nivo-lightbox.css'

function contact(){
    return (
        <div id="contact">
          <div class="container">
            <div class="col-md-8">
              <div class="row">
                <div class="section-title">
                  <h2>Get In Touch</h2>
                  <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                </div>
                <form name="sentMessage" id="contactForm" novalidate>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" id="name" class="form-control" placeholder="Name" required="required"/>
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" id="email" class="form-control" placeholder="Email" required="required"/>
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea name="message" id="message" class="form-control" rows="4" placeholder="Message" required></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" class="btn btn-custom btn-lg">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        );
}

export default contact;