import Footer from "../Footer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UploadForm() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [uploadedImageURL, setUploadedImageURL] = useState('');
  
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        setFile(e.target.files[0]);
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    
  
   
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);
      formData.append('content', content);
      try {
        
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert('News uploaded successfully!');
        setUploadedImageURL(response.data); // เปลี่ยนการตั้งค่า URL ของรูปภาพที่อัปโหลด
      } catch (error) {
        console.error('Error uploading news:', error);
      }
    };


    return (
        <>
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
                            <form class="custom-form subscribe-form"  onSubmit={handleSubmit}>
                                <h2 class="mb-4">เพิ่มเรื่อง</h2>
                                <img class="mb-2" src={imagePreview} style={{ maxWidth: '100%' }} />
                                <input class="mb-4" type="file" onChange={handleImageChange} accept="image/*" />
                                <textarea class="form-control" placeholder="Title" value={title} onChange={handleTitleChange} required>
                                </textarea>
                                <textarea class="form-control" placeholder="Content" value={content} onChange={handleContentChange} required>

                                </textarea>

                                <div class="col-lg-12 col-12">
                                    <button type="submit" class="form-control" >อัปโหลด</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
                <Footer />

            </div>
        </>
    )
}
export default UploadForm;