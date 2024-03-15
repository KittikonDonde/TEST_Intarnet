import Footer from "../Footer";


function UploadForm (){
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
                <section class="testimonial-section section-padding section-bg">
                    <div class="container">
                    <form class="custom-form subscribe-form" action="#" method="post" role="form">
                                <h5 class="mb-4">Newsletter Form</h5>

                                <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email Address" required/>
                                <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email Address" required/>

                                <div class="col-lg-12 col-12">
                                    <button type="submit" class="form-control">Subscribe</button>
                                </div>
                            </form>
                    </div>
                </section>
            </main>
            <Footer />

        </div>
        </>
    )
}
export default UploadForm;