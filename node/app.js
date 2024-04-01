const express = require('express');
const app = express();
const oracledb = require('oracledb');
const cors = require('cors');

// เริ่มต้นเชื่อมต่อกับฐานข้อมูล Oracle
async function init() {
    try {
        await oracledb.createPool({
            user: 'admin',
            password: '999',
            connectString: '172.16.190.9:1521/MSH' // แทน host, port, และชื่อฐานข้อมูลตามของจริง
        });
        console.log("Connected to Oracle Database");
    } catch (err) {
        console.error('Error connecting to Oracle Database:', err);
    }
}

// เรียกใช้ฟังก์ชันเชื่อมต่อฐานข้อมูล
init();

app.use(cors());

// สร้าง API เพื่อดึงข้อมูลจากฐานข้อมูล Oracle
app.get('/api/data', async (req, res) => {
    let connection;
    try {
        connection = await oracledb.getConnection();
        const result = await connection.execute(`
            SELECT 
                COUNT(CASE WHEN p.native_id = 99 THEN 1 END) ,
                COUNT(CASE WHEN p.native_id != 99 THEN 1 END) 
            FROM 
                opds o, PATIENTS p
            WHERE 
                o.pat_run_hn = p.run_hn
                AND o.pat_year_hn = p.year_hn
                AND o.opd_date = TRUNC(SYSDATE)
        `);
        // Constructing JSON response with the counts of Thai and foreign patients
        const data = {
            count_native_99 : result.rows[0][0],
            count_native_not_99 : result.rows[0][1]
        };
        res.json(data);
    } catch (err) {
        console.error('Error fetching data from Oracle Database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing Oracle Database connection:', err);
            }
        }
    }
});



// รันเซิร์ฟเวอร์ที่พอร์ตที่กำหนด
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
