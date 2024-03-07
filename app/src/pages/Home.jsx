import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // นำเข้าไฟล์สไตล์ CSS
import Footer from "../Footer";
import axios from 'axios';

function getCircleColor(aqiValue) {
    if (aqiValue >= 0 && aqiValue <= 15) {
        return "circle-skyblue";
    } else if (aqiValue >= 16 && aqiValue <= 25) {
        return "circle-green";
    } else if (aqiValue >= 26 && aqiValue <= 37) {
        return "circle-yellow";
    } else if (aqiValue >= 38 && aqiValue <= 75) {
        return "circle-orange";
    } else {
        return "circle-red";
    }
}
function getTextColor(aqiValue) {
    if (aqiValue >= 0 && aqiValue <= 15) {
        return "text-container-skyblue";
    } else if (aqiValue >= 16 && aqiValue <= 25) {
        return "text-container-green";
    } else if (aqiValue >= 26 && aqiValue <= 37) {
        return "text-container-yellow";
    } else if (aqiValue >= 38 && aqiValue <= 75) {
        return "text-container-orange";
    } else {
        return "text-container-red";
    }
}


function Home() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselImages = ["images/2.jpg", "images/0.jpg", "images/a.jpg"];
    const [sensorData, setSensorData] = useState({
        pm25: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://www.cmuccdc.org/api/ccdc/value/5046'
                );
                const apiData = response.data;
                setSensorData(apiData);
            } catch (error) {

            }
        };
        fetchData();
    }, []);

    const aqiValue = sensorData.pm25;

    let message, textColor;

    if (aqiValue >= 0 && aqiValue <= 15) {
        message = " คุณภาพอากาศดีมาก";
        textColor = "skyblue";
    } else if (aqiValue >= 16 && aqiValue <= 25) {
        message = "คุณภาพอากาศดี";
        textColor = "green";
    } else if (aqiValue >= 26 && aqiValue <= 37) {
        message = "คุณภาพอากาศปานกลาง";
        textColor = "rgb(181, 181, 12)";
    } else if (aqiValue >= 38 && aqiValue <= 75) {
        message = "คุณภาพอากาศเริ่มมีผลกระทบต่อสุขภาพ";
        textColor = "orange";
    } else {
        message = " คุณภาพอากาศมีผลกระทบต่อสุขภาพ";
        textColor = "red";
    }



    const activeImageSrc = carouselImages[carouselIndex];

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
                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_2">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_3">Causes</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                <section class="hero-section hero-section-full-height">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-12 p-0">
                                <div id="hero-slide" class="carousel carousel-fade slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={activeImageSrc} className="carousel-image img-fluid" alt="..." />
                                            <div class="carousel-caption d-flex flex-column justify-content-end">
                                                <h1 class="custom-heading">Intranet</h1>
                                                <p class="custom-heading1">Welcome to MaeSotHospital intranet system</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section-padding" id="section_2">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 col-12 text-center mx-auto">
                                <h2 class="mb-5">ยินดีต้อนรับเข้าสู่ระบบอินทราเน็ตโรงพยาบาลแม่สอด</h2>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="/Booking" class="d-block">
                                        <img src="images/1/1/3.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>จองห้อง</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="/Finance" class="d-block">
                                        <img src="images/1/1/2.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>การเงิน</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="/Manual" class="d-block">
                                        <img src="images/1/1/1.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>โปรแกรม และ คู่มือต่างๆ</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="/indicator" class="d-block">
                                        <img src="images/1/1/4.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>ศูนย์ข้อมูลโรงพยาบาลแม่สอด</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="/policy" class="d-block">
                                        <img src="images/1/1/5.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>นโยบายที่สำศัญ</strong></p>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://www.mhcc.moph.go.th/telephone/telephonelist.php" class="d-block">
                                        <img src="images/1/1/6.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>เบอร์โทรศัพท์ภายในหน่วยงาน</strong></p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="/dataforms" class="d-block">
                                        <img src="images/1/1/7.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>แบบฟอร์ม และ เอกสารต่างๆ</strong></p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="/agency" class="d-block">
                                        <img src="images/1/1/8.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>หน่วยงานภายใน</strong></p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section-padding section-bg" id="section_2">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-12">
                                <div class="custom-text-box">
                                    <h2 class="mb-4 text-center">สถานการณ์ฝุ่น PM2.5</h2>
                                    <div class="row">
                                        <div className={`circle ${getCircleColor(aqiValue)} col-lg-7 col-12`}>
                                            <div className={`text-container ${getTextColor(aqiValue)} col-lg-7 col-12`}>
                                                {aqiValue} &nbsp;
                                                <span className="span sup-script">μg/m<sup>3</sup></span>
                                            </div>
                                        </div>

                                        <div class="col-lg-7 col-12 ">
                                            <p class="custom-heading1" style={{ fontSize: '30px', color: textColor, textAlign: 'center' }}>{message}</p>
                                        </div>
                                    </div>
                                    <p class="custom-heading1">จุดตรวจวัดคุณภาพอากาศในพื้นที่ อาคารผู้ป่วยนอกโรงพยาบาลแม่สอด ต.แม่สอด อ.แม่สอด, ตาก</p>
                                </div>
                            </div>
                            <div class="col-lg-7 col-12">
                                <div class="custom-text-box">


                                    <h2 class="mb-4 text-center">สถิติผู้มาใช้บริการ</h2>
                                    <div class="row">
                                        <div class="col-lg-4 col-12">
                                            <h5 class="mb-3 custom-h5">1905</h5>
                                            <p class="custom-heading1">คนไทย</p>
                                        </div>
                                        <div class="col-lg-4 col-12">
                                            <h5 class="mb-3 custom-h5">499</h5>
                                            <p class="custom-heading1">ต่างชาติ</p>
                                        </div>
                                        <div class="col-lg-4 col-12">
                                            <h5 class="mb-3 custom-h5">2404</h5>
                                            <p class="custom-heading1">รวม</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="testimonial-section section-padding section-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-12 mx-auto">
                                <div id="testimonial-carousel" class="carousel carousel-fade slide" data-bs-ride="carousel">

                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="carousel-caption">
                                                <h4 class="carousel-title">Believe yourself and make it happen</h4>

                                            </div>
                                        </div>
                                    </div>
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
export default Home;