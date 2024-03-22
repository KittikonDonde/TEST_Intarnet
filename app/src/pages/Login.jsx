import Footer from "../Footer";



function Login(){


    return(
        <>
          <div >
      <header class="site-header">
        <div class="container">
          <div class="row">
          </div>
        </div>
      </header>
      <nav class="navbar navbar-expand-lg bg-light shadow-lg">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="images/1.png" class="logo img-fluid" />
            <span>
              MaeSot Hospital
              <small>MaeSot Hospital Information System</small>
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link custom-btn custom-border-btn btn" href="/">Home</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <main>
      <section class="volunteer-section section-padding" id="section_4">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12">
                            <h2 class="text-white mb-4">Volunteer</h2>

                            <form class="custom-form volunteer-form mb-5 mb-lg-0" action="#" method="post" role="form">
                                <h3 class="mb-4">Become a volunteer today</h3>

                                <div class="row">
                                    <div class="col-lg-6 col-12">
                                        <input type="text" name="volunteer-name" id="volunteer-name" class="form-control" placeholder="Jack Doe" required/>
                                    </div>

                                    <div class="col-lg-6 col-12">    
                                        <input type="email" name="volunteer-email" id="volunteer-email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Jackdoe@gmail.com" required/>
                                    </div>

                                    <div class="col-lg-6 col-12">
                                        <input type="text" name="volunteer-subject" id="volunteer-subject" class="form-control" placeholder="Subject" required/>
                                    </div>

                                    <div class="col-lg-6 col-12">
                                        <div class="input-group input-group-file">
                                            <input type="file" class="form-control" id="inputGroupFile02"/>
                                            
                                            <label class="input-group-text" for="inputGroupFile02">Upload your CV</label>

                                            <i class="bi-cloud-arrow-up ms-auto"></i>
                                        </div>
                                    </div>
                                </div>

                                <textarea name="volunteer-message" rows="3" class="form-control" id="volunteer-message" placeholder="Comment (Optional)"></textarea>

                                <button type="submit" class="form-control">Submit</button>
                            </form>
                        </div>

                        <div class="col-lg-6 col-12">
                            <img src="images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg" class="volunteer-image img-fluid" alt=""/>

                            <div class="custom-block-body text-center">
                                <h4 class="text-white mt-lg-3 mb-lg-3">About Volunteering</h4>

                                <p class="text-white">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based</p>
                            </div>
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