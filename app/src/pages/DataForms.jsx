import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // นำเข้าไฟล์สไตล์ CSS
import Home from "./Home";
import Footer from "../Footer";

function DataForms() {


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
                            <h2 class="mb-lg-3">แบบฟอร์ม และ เอกสารต่างๆ</h2>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/orthepap.php">
                                <strong>1. แบบฟอร์ม & เอกสาร ต่างๆ</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/download_desktop.php">
                                <strong>2. ดาวน์โหลด</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/Quality_center/download_desktop.php">
                                <strong>3. ใบรายงานความก้าวหน้า</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/Downloads/lawyer/Internal_control.php">
                                <strong>4. แบบฟอร์มรานงานควบคุมภายใน</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/Downloads/Computer/medical_fee61.php">
                                <strong>5. รายการค่ารักษาพยาบาลปีงบ 2561-ที่เปิดใช้งาน</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/showit.php">
                                <strong>6. งานวิจัยและนวัตกรรม</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/prs/WEB/Download/Download.html">
                                <strong>7. แผนใช้เงินบำรุง 63</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/Downloads/Hospital_Policy/Hospital_Policy1.pdf">
                                <strong>8. ดาวน์โหลด นโยบายโรงพยาบาลแม่สอด</strong>
                            </a>



                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </div>
    );
}
export default DataForms;