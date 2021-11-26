import React, { Component } from "react";
import hostel from '../img/hostel1.jpg'
import mess from '../img/aravali_mess.jpeg'
import building from '../img/aravali_building.jpeg'
import commonroom from '../img/himalaya_commonroom.jpeg'

class Shivalik extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="hostel-heading">Aravali Hostel</h1>
                </div>
                <div className="container">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                                <img class="d-block carousel-image" src={building} alt="First slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h2>Building</h2>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block carousel-image" src={commonroom} alt="Second slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h2>Common Room</h2>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block carousel-image" src={mess} alt="Third slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h2>Mess</h2>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div>
                    <br />
                </div>
                <div className="container"> 
                    <ul>
                        <li>Three residential blocks are there namely A, B, C</li>
                        <li>Well maintained AC Common Room having LCD, a table tennis and snooker table.</li>
                        <li>Hygienic Mess with 3 time meals and snacks.</li>
                        <li>Laundry service is also provided.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Shivalik;