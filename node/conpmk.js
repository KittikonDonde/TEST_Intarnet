const oracledb = require('oracledb');

async function run() {
  let connection;

  try {
    // เชื่อมต่อกับฐานข้อมูล
    connection = await oracledb.getConnection({
      user: 'admin',
      password: '999',
      connectString: '172.16.190.9:1521/MSH' // แทน host, port, และชื่อฐานข้อมูลตามของจริง
    });

    // ทำสิ่งที่ต้องการด้วย connection ที่เชื่อมต่อแล้ว
    // เช่น ส่งคำสั่ง SQL และดึงข้อมูลจากฐานข้อมูล
    const result = await connection.execute(
      ` SELECT COUNT( p.hn) 
      FROM opds o, PATIENTS p
      WHERE o.pat_run_hn = p.run_hn
        AND o.pat_year_hn = p.year_hn
        AND o.opd_date = TRUNC(SYSDATE)
      `
    );

    console.log(result.rows); // แสดงผลลัพธ์

  } catch (err) {
    console.error(err);
  } finally {
    // ปิดการเชื่อมต่อ
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();
