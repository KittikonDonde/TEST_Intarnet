const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '172.16.190.26',
  user: 'jump',
  password: 'server401417',
  database: 'intranetjs'
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');

  // เมื่อเชื่อมต่อกับ MySQL สำเร็จ คุณสามารถปิด Pool ได้ตรงนี้
  // pool.end((err) => {
  //   if (err) {
  //     console.error('Error closing MySQL pool:', err);
  //     return;
  //   }
  //   console.log('MySQL pool closed');
  // });
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

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  pool.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      if (result.length > 0) {
        res.json({ success: true, message: 'Login successful', user: result[0] });
      } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    }
  });
});

app.post('/upload', upload.single('file'), (req, res) => {
  const { title, content } = req.body;
  const { path, filename } = req.file;
  const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

  const query = 'INSERT INTO news (title, content, image, created_at) VALUES (?, ?, ?, ?)';
  pool.query(query, [title, content, filename, createdAt], (err, result) => {
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
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching news:', err);
      res.status(500).send('Error fetching news');
      return;
    }
    const formattedResult = result.map(news => {
      return {
        ...news,
        image: news.image.replace(/\\/g, '/')
      };
    });
    res.json(formattedResult);
  });
});

app.use('/view-file', express.static('./uploads'))

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
