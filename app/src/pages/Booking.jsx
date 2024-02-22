import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // นำเข้าไฟล์สไตล์ CSS
import Home from "./Home";
import Footer from "../Footer";
function Booking() {
   

    return (
        <div >
            <header class="site-header">
            <div class="container">
                    <div class="row">
                    </div>
                </div>
            </header>
            <nav class="navbar navbar-expand-lg bg-light shadow-lg">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src="images/1.png" class="logo img-fluid" />
                        <span>
                            MaeSot Hospital
                            <small>MaeSot Hospital Information System</small>
                        </span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link custom-btn custom-border-btn btn" href="/">Home</a>
                            </li>
                       
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                <section class="testimonial-section section-padding section-bg">
                    <div class="container">
                        <div class="row">
                        <h2 class="mb-lg-3">จองห้องต่างๆ</h2>
                        <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://www.mhcc.moph.go.th/room_reserve/room_calendar.php" class="d-block">
                                        <img src="images/1/1/10.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>จองห้องประชุม</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://www.mhcc.moph.go.th/room_or/room_calendar.php" class="d-block">
                                        <img src="images/1/1/9.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>จองห้องผ่าตัดเก่า</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://www.mhcc.moph.go.th/room_or/room_calendar_show.php" class="d-block">
                                        <img src="images/1/1/9.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>จองห้องผ่าตัดใหม่</strong></p>
                                    </a>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </section>
            </main>
           <Footer />

        </div>
    );
}
export default Booking;