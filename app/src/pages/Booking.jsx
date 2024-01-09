import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // นำเข้าไฟล์สไตล์ CSS
import Home from "./Home";
function Booking() {
   

    return (
        <div >
            <header class="site-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-12 d-flex flex-wrap">
                            <p class="d-flex me-4 mb-0">
                                <i class="bi-geo-alt me-2"></i>
                                Akershusstranda 20, 0150 Oslo, Norway
                            </p>
                            <p class="d-flex mb-0">
                                <i class="bi-envelope me-2"></i>

                                <a href="mailto:info@company.com">
                                    info@company.com
                                </a>
                            </p>
                        </div>
                        <div class="col-lg-3 col-12 ms-auto d-lg-block d-none">
                            <ul class="social-icon">
                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-twitter"></a>
                                </li>

                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-facebook"></a>
                                </li>

                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-instagram"></a>
                                </li>

                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-youtube"></a>
                                </li>

                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-whatsapp"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <nav class="navbar navbar-expand-lg bg-light shadow-lg">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src="images/1.jpg" class="logo img-fluid" />
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
                                        <img src="images/1/1/3.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>จองห้องประชุม</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://www.mhcc.moph.go.th/room_or/room_calendar.php" class="d-block">
                                        <img src="images/1/1/2.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>จองห้องผ่าตัดเก่า</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://www.mhcc.moph.go.th/room_or/room_calendar_show.php" class="d-block">
                                        <img src="images/1/1/1.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>จองห้องผ่าตัดใหม่</strong></p>
                                    </a>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </section>
            </main>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-12 mb-4">
                            <img src="images/logo.png" class="logo img-fluid" alt="" />
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mb-4">
                            <h5 class="site-footer-title mb-3">Quick Links</h5>

                            <ul class="footer-menu">
                                <li class="footer-menu-item"><a href="#" class="footer-menu-link">Our Story</a></li>

                                <li class="footer-menu-item"><a href="#" class="footer-menu-link">Newsroom</a></li>

                                <li class="footer-menu-item"><a href="#" class="footer-menu-link">Causes</a></li>

                                <li class="footer-menu-item"><a href="#" class="footer-menu-link">Become a volunteer</a></li>

                                <li class="footer-menu-item"><a href="#" class="footer-menu-link">Partner with us</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-4 col-md-6 col-12 mx-auto">
                            <h5 class="site-footer-title mb-3">Contact Infomation</h5>

                            <p class="text-white d-flex mb-2">
                                <i class="bi-telephone me-2"></i>

                                <a href="tel: 120-240-9600" class="site-footer-link">
                                    120-240-9600
                                </a>
                            </p>

                            <p class="text-white d-flex">
                                <i class="bi-envelope me-2"></i>

                                <a href="mailto:info@yourgmail.com" class="site-footer-link">
                                    donate@charity.org
                                </a>
                            </p>

                            <p class="text-white d-flex mt-3">
                                <i class="bi-geo-alt me-2"></i>
                                Akershusstranda 20, 0150 Oslo, Norway
                            </p>

                            <a href="#" class="custom-btn btn mt-3">Get Direction</a>
                        </div>
                    </div>
                </div>

                <div class="site-footer-bottom">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-6 col-md-7 col-12">
                                <p class="copyright-text mb-0">Copyright © 2036 <a href="#">Kind Heart</a> Charity Org.
                                    Design: <a href="https://templatemo.com" target="_blank">TemplateMo</a></p>
                            </div>

                            <div class="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                                <ul class="social-icon">
                                    <li class="social-icon-item">
                                        <a href="#" class="social-icon-link bi-twitter"></a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="#" class="social-icon-link bi-facebook"></a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="#" class="social-icon-link bi-instagram"></a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="#" class="social-icon-link bi-linkedin"></a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="https://youtube.com/templatemo" class="social-icon-link bi-youtube"></a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
export default Booking;