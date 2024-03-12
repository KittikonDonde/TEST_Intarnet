const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mysql = require('mysql');

const app = express();
const port = 5000;

// Allow all origins for CORS (for development purposes)
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Enter your MySQL password here
  database: 'intranetjs',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const { title, content } = req.body;
  const imagePath = req.file.path;

  const query = 'INSERT INTO news (title, content, image) VALUES (?, ?, ?)';
  connection.query(query, [title, content, imagePath], (err, result) => {
    if (err) {
      console.error('Error inserting news details into database:', err);
      res.status(500).send('Error uploading news');
      return;
    }
    console.log('News details inserted into database');
    res.status(200).send('News uploaded successfully');
  });
});

app.get('/news', (req, res) => {
  const query = 'SELECT * FROM news';
  connection.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching news:', err);
      res.status(500).send('Error fetching news');
      return;
    }
    // แปลง backslash (\) เป็น forward slash (/) ใน URL ของรูปภาพ
    const formattedResult = result.map(news => {
      return {
        ...news,
        image: news.image.replace(/\\/g, '/')
      };
    });
    res.json(formattedResult);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
