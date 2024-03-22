import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // นำเข้าไฟล์สไตล์ CSS
import Home from "./Home";
import Footer from "../Footer";

function Policy() {


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
                            <h2 class="mb-lg-3">นโยบายที่สำศัญ</h2>
                            <a class="navbar-brand" href="images/n1.jpg">
                                <strong>1. นโยบายด้านสุขภาพอนามัย ความปลอดภัย และสิ่งแวดล้อม</strong>
                            </a>
                            <a class="navbar-brand" href="images/n2.jpg">
                                <strong>2. นโยบายการพัฒนางานอนามัยสิ่งแวดล้อมตามเกณฑ์ Green&Clean hospital</strong>
                            </a>
                            <a class="navbar-brand" href="images/n3.jpg">
                                <strong>3. นโยบายการป้องกันและควบคุมการแพร่กระจายเชื้อวัณโรคในโรงพยาบาล</strong>
                            </a>
                            <a class="navbar-brand" href="images/n4.jpg">
                                <strong>4. นโยบายควบคุมการติดเชื้อในโรงพยาบาล</strong>
                            </a>
                            <a class="navbar-brand" href="images/n5.jpg">
                                <strong>5. นโยบายความปลอดภัยระบบสารสนเทศ</strong>
                            </a>
                            <a class="navbar-brand" href="">
                                <strong>6. นโยบายด้านความปลอดภัยโรงพยาบาลแม่สอด</strong>
                            </a>
                            <a class="navbar-brand" href="images/n7.jpg">
                                <strong>7. นโยบายโรงพยาบาลส่งเสริมสุขภาพด้านโภชนาการ</strong>
                            </a>
                            <a class="navbar-brand" href="images/n8.jpg">
                                <strong>8. นโยบายโรงพยาบาลปลอดบุหรี่ เครื่องดื่มแอลกอฮอล์</strong>
                            </a>
                            <a class="navbar-brand" href="images/n9.jpg">
                                <strong>9. นโยบายโรงพยาบาลส่งเสริมสุขภาพ</strong>
                            </a>
                            <a class="navbar-brand" href="images/n10.jpg">
                                <strong>10. นโยบายโรงพยาบาลที่ได้มาตรฐานงานอนามัยแม่และเด็ก</strong>
                            </a>
                            <a class="navbar-brand" href="">
                                <strong>11. นโยบาย 5 ส 5 สร้าง</strong>
                            </a>



                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </div>
    );
}
export default Policy;