import React, { useState, useEffect } from "react";
import './styles.css'; // นำเข้าไฟล์สไตล์ CSS
import Footer from "../Footer";

function Agency() {


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
                            <h2 class="mb-lg-3">หน่วยงานภายใน</h2>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/prs/HumanResourcesGroup/HumanResourcesGroup.html">
                                <strong>1. กลุ่มงานทรัพยากรบุคคล</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/nursing/index.php">
                                <strong>2. กลุ่มการพยาบาล</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/kumarn/index.html">
                                <strong>3. กลุ่มงานเภสัชกรรม</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/prs/WEB/main/home.html">
                                <strong>4. งานพัฒนาระบบบริการสุขภาพ</strong>
                            </a>
                            <a class="navbar-brand" href="https://sites.google.com/view/maesotlab">
                                <strong>5. กลุ่มงานเทคนิคการแพทย์</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/ic2/login3.php">
                                <strong>6. หน่วยควบคุมการติดเชื้อ</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/card/">
                                <strong>7. สุขศึกษา</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/showOPD.php">
                                <strong>8. งานผู้ป่วยนอก</strong>
                            </a>
                            <a class="navbar-brand" href="http://www.mhcc.moph.go.th/prs/PolicyandPlanning/Policy_and_Planning.html">
                                <strong>9. งานยุทธศาสตร์และแผนงานโครงการ</strong>
                            </a>
                            <a class="navbar-brand" href="http://172.16.190.28/inventory/index.php?action=logout">
                                <strong>10. กลุ่มงานเวชนิทัศน์</strong>
                            </a>
                            <a class="navbar-brand" href="">
                                <strong>11. ศูนย์พัฒนาคุณภาพ</strong>
                            </a>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </div>
    );
}
export default Agency;