import React, { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import './styles.css'; // นำเข้าไฟล์สไตล์ CSS

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
                                    <a href="" class="d-block">
                                        <img src="images/1/1/1.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>คู่มือ</strong></p>
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
                                    <a href="http://www.mhcc.moph.go.th/directions/directions.php" class="d-block">
                                        <img src="images/1/1/5.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>คำสั่งโรงพยาบาล</strong></p>
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
                                    <a href="http://www.mhcc.moph.go.th/orthepap.php" class="d-block">
                                        <img src="images/1/1/7.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>แบบฟอร์มเอกสารต่างๆ</strong></p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                                <div class="featured-block d-flex justify-content-center align-items-center">
                                    <a href="http://172.16.190.26/parcel/index.php" class="d-block">
                                        <img src="images/1/1/8.png" className="featured-block-image img-fluid" alt="" />
                                        <p class="featured-block-text"> <strong>งาน พรส.</strong></p>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section class="testimonial-section section-padding section-bg">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-8 col-12 mx-auto">
                                <h2 class="mb-lg-3">Happy Customers</h2>

                                <div id="testimonial-carousel" class="carousel carousel-fade slide" data-bs-ride="carousel">

                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="carousel-caption">
                                                <h4 class="carousel-title">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme</h4>

                                                <small class="carousel-name"><span class="carousel-name-title">Maria</span>, Boss</small>
                                            </div>
                                        </div>

                                        <div class="carousel-item">
                                            <div class="carousel-caption">
                                                <h4 class="carousel-title">Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci</h4>

                                                <small class="carousel-name"><span class="carousel-name-title">Thomas</span>, Partner</small>
                                            </div>
                                        </div>

                                        <div class="carousel-item">
                                            <div class="carousel-caption">
                                                <h4 class="carousel-title">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme</h4>

                                                <small class="carousel-name"><span class="carousel-name-title">Jane</span>, Advisor</small>
                                            </div>
                                        </div>

                                        <div class="carousel-item">
                                            <div class="carousel-caption">
                                                <h4 class="carousel-title">Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci</h4>

                                                <small class="carousel-name"><span class="carousel-name-title">Bob</span>, Entreprenuer</small>
                                            </div>
                                        </div>

                                        <ol class="carousel-indicators">
                                            <li data-bs-target="#testimonial-carousel" data-bs-slide-to="0" class="active">
                                                <img src="images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg" class="img-fluid rounded-circle avatar-image" alt="avatar" />
                                            </li>

                                            <li data-bs-target="#testimonial-carousel" data-bs-slide-to="1" class="">
                                                <img src="images/avatar/portrait-young-redhead-bearded-male.jpg" class="img-fluid rounded-circle avatar-image" alt="avatar" />
                                            </li>

                                            <li data-bs-target="#testimonial-carousel" data-bs-slide-to="2" class="">
                                                <img src="images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg" class="img-fluid rounded-circle avatar-image" alt="avatar" />
                                            </li>

                                            <li data-bs-target="#testimonial-carousel" data-bs-slide-to="3" class="">
                                                <img src="images/avatar/studio-portrait-emotional-happy-funny.jpg" class="img-fluid rounded-circle avatar-image" alt="avatar" />
                                            </li>
                                        </ol>

                                    </div>
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
export default Home;