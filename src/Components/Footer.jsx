
function Footer() {

  return (
      <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      
      {/* Social Media Section */}
      <section className="d-flex justify-content-between align-items-center container border-bottom border-secondary pb-4 flex-wrap">
        
        <div className="mb-3 mb-lg-0">
          <h5 className="fw-bold">
            Connect with us
          </h5>
          <p className="text-secondary mb-0">
            Follow us on social media platforms
          </p>
        </div>

        <div>
          <a href="#" className="text-light me-4 fs-5">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="#" className="text-light me-4 fs-5">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="#" className="text-light me-4 fs-5">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="#" className="text-light me-4 fs-5">
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="#" className="text-light fs-5">
            <i className="fab fa-github"></i>
          </a>
        </div>

      </section>

      {/* Main Footer */}
      <section className="container mt-5">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-uppercase mb-4 text-info">
              MyCompany
            </h4>

            <p className="text-secondary">
              We provide high-quality web development services and modern UI
              solutions for businesses worldwide.
            </p>
          </div>

          {/* Products */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-4">Products</h5>

            <p>
              <a href="#" className="text-secondary text-decoration-none">
                React JS
              </a>
            </p>

            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Angular
              </a>
            </p>

            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Node JS
              </a>
            </p>

            <p>
              <a href="#" className="text-secondary text-decoration-none">
                MongoDB
              </a>
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-4">Useful Links</h5>

            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Home
              </a>
            </p>

            <p>
              <a href="#" className="text-secondary text-decoration-none">
                About Us
              </a>
            </p>

            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Services
              </a>
            </p>

            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Contact
              </a>
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-4">Contact</h5>

            <p className="text-secondary">
              <i className="fas fa-home me-2"></i>
              Pune, Maharashtra, India
            </p>

            <p className="text-secondary">
              <i className="fas fa-envelope me-2"></i>
              info@mycompany.com
            </p>

            <p className="text-secondary">
              <i className="fas fa-phone me-2"></i>
              +91 9595959595
            </p>
          </div>

        </div>
      </section>

      {/* Copyright */}
      <div className="text-center mt-4 pt-3 border-top border-secondary">
        <p className="text-secondary mb-0">
          © 2026 MyCompany. All Rights Reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer