import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [count_native, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3008/api/data'); // เรียกใช้ API จากเซิร์ฟเวอร์ localhost:3008
        setData(response.data); // กำหนดข้อมูลที่ได้รับเข้าสู่ state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // เรียกใช้งานฟังก์ชัน fetchData เมื่อ component โหลดเสร็จสมบูรณ์
  }, []);

  return (
    <div>
      <h1>Data from Oracle Database</h1>
      {count_native ? (
        <div>
          <p>A :  {count_native.count_native_99}</p>
          <p>B :  {count_native.count_native_not_99}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
