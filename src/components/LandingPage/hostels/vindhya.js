import React, { Component } from "react";
import commonroom from '../img/vindhya_commonroom.jpeg';
import building from '../img/vindhya_building.jpeg';
import mess from '../img/vindhya_mess.jpeg';

class Vindhya extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="hostel-heading">Vindhya Hostel</h1>
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
                <div className="container">
                    <ul>
                        <li>Three residential blocks are there namely A, B, C</li>
                        <li>Well maintained AC Common Room having LCD, a table tennis and snooker table.</li>
                        <li>Hygienic Mess with 3 time meals and snacks.</li>
                        <li>Laundry service along with washing machine on each floor are provided.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Vindhya;