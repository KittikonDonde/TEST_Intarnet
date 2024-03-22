import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // นำเข้าไฟล์สไตล์ CSS
import Home from "./Home";
import Footer from "../Footer";
function Manual() {
   

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
                                <a class="nav-link click-scroll " href="/">หน้าแรก</a>
                            </li>
                       
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                <section class="testimonial-section section-padding section-bg">
                    <div class="container">
                        <div class="row">
                        <h2 class="mb-lg-3">โปรแกรม และ คู่มือต่างๆ</h2>
                        <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://www.mhcc.moph.go.th/PMK/pmk.php" class="d-block">
                                        <img src="images/1/1/1.jpg" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>PMK</strong></p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://www.mhcc.moph.go.th/Downloads/Computer/IT_Nurse.pdf" class="d-block">
                                        <img src="images/1/1/2.jpg" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>คู่มือ IT Nurse</strong></p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://www.mhcc.moph.go.th/Downloads/NurseDutyManagement/NurseDutyManagement.php" class="d-block">
                                        <img src="images/1/1/3.ico" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>โปรแกรมจัดตารางเวร</strong></p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://172.16.190.6/admin/" class="d-block">
                                        <img src="images/1/1/1111.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>ระบบบริหารจัดการศูนย์คอมพิวเตอร์</strong></p>
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
export default Manual;