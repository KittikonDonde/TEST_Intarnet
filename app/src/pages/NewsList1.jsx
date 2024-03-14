
import Footer from "../Footer";
import React, { useState, useEffect } from "react";
import axios from 'axios';


function NewsList1() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);


  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/news');
      setNewsList(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

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
            <div class="news-block">
              <div class="news-block-top">
                <img src={newsList.length > 0 ? `http://localhost:5000/view-file/${newsList[newsList.length - 3].image}` : ''} class="news-image img-fluid" alt="" />
              </div>
              <div class="news-block-info">
                <div class="d-flex mt-2">
                  <div class="news-block-date">
                    <p>
                      <i class="bi-calendar4 custom-icon me-1"></i>
                      {newsList.length > 0 ? new Date(newsList[newsList.length - 3].created_at).toLocaleDateString('th-TH') : ''}
                    </p>
                  </div>

                </div>
                <div class="news-block-title mb-2" >
                  <h4 style={{ fontSize: '35px' }}>{newsList.length > 0 ? newsList[newsList.length - 3].title : ''}</h4>
                </div>

                <div class="news-block-body" >
                  <p style={{ fontSize: '20px' }}>{newsList.length > 0 ? newsList[newsList.length - 3].content : ''}</p>
                </div>

                <div class="social-share border-top mt-5 py-4 d-flex flex-wrap align-items-center">
                  <div class="d-flex">
                    <a href="https://www.facebook.com/maesothospital.official" class="social-icon-link bi-facebook"></a>
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

export default NewsList1;
