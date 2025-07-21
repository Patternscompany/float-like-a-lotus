<!-- Header -->
<header class="bg-white">
  <div class="b-container">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light" aria-label="Offcanvas navbar large">
      <div class="container-fluid">
        <div class="logo-box">
          <a href="index.php" class="navbar-brand">
            <img src="./assets/image/Main-Logo.png" alt="Main Logo"></a>
        </div>
        <button class="navbar-toggler bg-primary-color border-0" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="bi bi-list text-white fs-2"></span>
        </button>
        <div class="offcanvas offcanvas-start bg-light" tabindex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header" id="offcanvasNavbarLabel">
            <div class="logo-drawer">
              <a href="index.php" class="navbar-brand"><img src="./assets/image/Main-Logo.png" alt="Drawer Logo"
                  class="img-fluid"></a>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav mx-auto mb-2 mb-xl-0 gap-xl-4 justify-content-center flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.php">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href=".about-us.html">About Us</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="services.php">Our Services</a></li>
                  <li><a class="dropdown-item" href="service-detail.php">Service Detail</a></li>
                  <li><a class="dropdown-item" href="contact-us.html">Appointment</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Pages
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="pricing.php">Pricing</a></li>
                  <li><a class="dropdown-item" href="team.php">Team</a></li>
                  <li><a class="dropdown-item" href="blogs.php">Blogs</a></li>
                  <li><a class="dropdown-item" href="blog-detail.php">Blog Detail</a></li>
                  <li><a class="dropdown-item" href="faqs.php">FAQs</a></li>
                  <li><a class="dropdown-item" href="error-404.php">Error 404</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact-us.php">Contact Us</a>
              </li>
            </ul>
            <div class="mt-lg-3">
              <a href="contact-us.html" class="btn btn-quotes">
                <i class="bi bi-journal-bookmark-fill pe-2"></i>
                Get Quotes</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- #navbar end -->
  </div>
</header>
<!-- #header end -->