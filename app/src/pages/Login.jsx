import Footer from "../Footer";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



function Login() {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://172.16.190.26:5000/login', { username, password });
            console.log(response.data);
            setError('');
            navigate('/uploadform')
            // ส่งผู้ใช้ไปยังหน้าอื่นๆ
        } catch (error) {
            setError(error.response.data.message);
            Swal.fire({
              icon: "error",
              title: "เข้าสู่ระบบไม่สำเร็จ",
              text: "กรุณาตรวจสอบ username หรือ password",
            });
        }
    };


  return (
    <>
      <div >
        <main>
          <section class="volunteer-section section-padding" id="section_4">
            <div class="container">
              <div class="row">


                <div class="col-lg-6 col-12">
                  <a  class="navbar-brand" href="/">
                  <img src="images/1.png" class="volunteer-image img-fluid" alt="" />
                  </a>
                  <div class="custom-block-body text-center">
                    <h4 class="text-white mt-lg-3 mb-lg-3" >  MaeSot Hospital</h4>
                  </div>
                </div>
                <div class="col-lg-6 col-12">

                  <form class="custom-form  volunteer-form mb-5 mb-lg-0" onSubmit={handleSubmit}>
                    <h3 class="mb-5">Intranet MaeSot Hospital</h3>

                    <div class="col-lg-12 col-12 mb-3">
                      <input class="form-control" type="text" placeholder="User" alue={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div class="col-lg-12 col-12 mb-5">
                      <input class="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" class="form-control ">เข้าสู่ระบบ</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />

      </div>

    </>
  )
};

export default Login;