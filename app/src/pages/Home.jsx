import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // นำเข้าไฟล์สไตล์ CSS
import Footer from "../Footer";

function Home() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselImages = ["images/2.jpg", "images/0.jpg", "images/a.jpg"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

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
                                    <h2 class="mb-3">สถานการณ์ฝุ่น</h2>
                                    <h5 class="mb-3 custom-h5">162 </h5>
                                    <p class="mb-0">This is a Bootstrap 5.2.2 CSS template for charity organization websites. You can feel free to use it. Please tell your friends about TemplateMo website. Thank you. HTML CSS files updated on 20 Oct 2022.</p>
                                </div>
                            </div>
                            <div class="col-lg-7 col-12">
                                <div class="custom-text-box">
                                <h2 class="mb-3">สถิติผู้มาใช้บริการ</h2>
                                    <div class="row">
                                        <div class="col-lg-4 col-12">
                                            <h5 class="mb-3 custom-h5">5000</h5>
                                            <p class="mb-0">This is a Bootstrap </p>
                                        </div>
                                        <div class="col-lg-4 col-12">
                                            <h5 class="mb-3 custom-h5">5000</h5>
                                            <p class="mb-0">This is a Bootstrap</p>
                                        </div>
                                        <div class="col-lg-4 col-12">
                                            <h5 class="mb-3 custom-h5">5000</h5>
                                            <p class="mb-0">This is a Bootstrap</p>
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