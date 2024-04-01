const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Allow all origins for CORS (for development purposes)
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Enter your MySQL password here
  database: 'intranetjs',
});

//connection.connect();
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // คำสั่ง SQL เพื่อค้นหาผู้ใช้จากฐานข้อมูล
  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  // ทำการ query ฐานข้อมูล
  connection.query(sql, [username, password], (err, result) => {
      if (err) {
          // กรณีเกิดข้อผิดพลาดในการเชื่อมต่อกับฐานข้อมูล
          console.error(err);
          res.status(500).json({ success: false, message: 'Internal Server Error' });
      } else {
          // ตรวจสอบว่ามีผู้ใช้งานที่ตรงกับข้อมูลที่รับมาหรือไม่
          if (result.length > 0) {
            
              res.json({ success: true, message: 'Login successful', user: result[0] });
          } else {
              res.status(401).json({ success: false, message: 'Invalid username or password' });
          }
      }
  });
});

app.use('/view-file', express.static('./uploads'))


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
  console.log(req.file);
  const { path, filename } = req.file;
  const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

  const query = 'INSERT INTO news (title, content, image, created_at) VALUES (?, ?, ?, ?)';
  connection.query(query, [title, content, filename, createdAt], (err, result) => {
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

