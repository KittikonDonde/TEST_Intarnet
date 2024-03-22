import Footer from "../Footer";



function Login() {


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

                  <form class="custom-form volunteer-form mb-5 mb-lg-0" action="#" role="form">
                    <h3 class="mb-5">Intranet MaeSot Hospital</h3>

                    <div class="col-lg-12 col-12 mb-3">
                      <input class="form-control" placeholder="User" />
                    </div>

                    <div class="col-lg-12 col-12 mb-5">
                      <input class="form-control" placeholder="Password" />
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