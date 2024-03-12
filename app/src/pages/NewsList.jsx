import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
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
    <div>
      <h2>News List</h2>
      <ul>
        {newsList.map((news) => (
          <li key={news.id}>
            <h3>{news.title}</h3>
            <p>{news.content}</p>
            <img src={`http://localhost:5000/uploads/${news.image}`}  />
            <p>Uploaded on: {news.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
