import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // นำเข้าไฟล์สไตล์ CSS
import Home from "./Home";
import Footer from "../Footer";

function Indicator() {
   

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
                    <h2 class="mb-lg-3">ศูนย์ข้อมูลโรงพยาบาลแม่สอด</h2>
                        <div class="row">
                        <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://www.mhcc.moph.go.th/it_documents/login.html" class="d-block">
                                        <img src="images/1/1/15.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>สถิติหน่วยงาน</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="" class="d-block">
                                        <img src="images/1/1/16.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>สถิติผู้รับบริการ</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="" class="d-block">
                                        <img src="images/1/1/17.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>ตัวชี้วัดตามนโยบาย</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="" class="d-block">
                                        <img src="images/1/1/18.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>ตัวชี้วัดตามแผนยุทธศาสตร์ รพ.</strong></p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="" class="d-block">
                                        <img src="images/1/1/19.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>สาธารณสุขชายแดน</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="" class="d-block">
                                        <img src="images/1/1/20.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>กลุ่มภารกิจด้านการพยาบาล</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="" class="d-block">
                                        <img src="images/1/1/21.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>ตัวชี้วัดศูนย์คุณภาพ</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="" class="d-block">
                                        <img src="images/1/1/22.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>ตัวชี้วัดปฐมภูมิ</strong></p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="" class="d-block">
                                        <img src="images/1/1/23.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>เครือข่าย คปส. อ.แม่สอด</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="" class="d-block">
                                        <img src="images/1/1/2.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>รายงานทางการเงิน/CFO</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="" class="d-block">
                                        <img src="images/1/1/1.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>อื่นๆ</strong></p>
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
export default Indicator;