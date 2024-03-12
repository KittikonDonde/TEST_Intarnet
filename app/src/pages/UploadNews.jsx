import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UploadNews = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [newsList, setNewsList] = useState([]);
  const [uploadedImageURL, setUploadedImageURL] = useState('');

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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
      fetchNews(); // รีเฟรชรายการข่าวหลังจากอัปโหลด
    } catch (error) {
      console.error('Error uploading news:', error);
    }
  };

  return (
    <div>
      <h2>Upload News</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
        <textarea placeholder="Content" value={content} onChange={handleContentChange} />
        <button type="submit">Upload</button>
      </form>

      {uploadedImageURL && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={`http://localhost:5000/${uploadedImageURL}`} alt="Uploaded" />
        </div>
      )}
      <div>
        <h2>News List</h2>
        <ul>
          {newsList.map((news) => (
            <li key={news.id}>
              <h3>{news.title}</h3>
              <p>{news.content}</p>
              <img src={`http://localhost:5000/view-file/${news.image}`}  width="500" height="500" />
              <p>Uploaded on: {news.uploaded_at}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UploadNews;
