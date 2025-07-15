<?php
$head_title = "About Us – Nuro";
$page_title = "About Us";
?>

<?php require("./partials/layout/top-layout.php"); ?>

<?php require("./partials/page-title.php"); ?>

<!-- About Section -->
<section class="section about-section pb-5 my-5">
  <div class="b-container">
    <div class="row align-items-center g-5">
      <!-- Left Image Side -->
      <div class="col-xl-4 d-flex position-relative">
        <div class="position-relative mx-auto img-container">
          <!-- Primary Image -->
          <div class="ratio-wrapper-429">
            <img src="./assets/image/Place-Holder-1920x1280.jpg" alt="About Us"
              class="w-100 h-100 object-fit-cover position-absolute top-0 start-0 rounded-5" data-aos="fade-right"
              data-aos-easing="ease-in-sine" data-aos-delay="500" data-aos-duration="1000">
          </div>
        </div>
      </div>
      <!-- Center Text Side -->
      <div class="col-xl-8">
        <div class="row">
          <h6 class="text-primary-color fw-semibold mb-2">ABOUT US</h6>
          <h2 class="font-1 mb-4" style="font-weight: 800;">Because Your Mental<br>Health Matters</h2>
        </div>
        <div class="row">
          <div class="col-12 col-md-7">
            <ul class="list-unstyled fs-5">
              <li class="d-flex align-items-start mb-2">
                <i class="bi bi-chevron-right text-primary-color me-2 py-3"></i>
                <span>Prioritizing well-being helps you thrive emotionally, socially, and personally every
                  day.</span>
              </li>
              <li class="d-flex align-items-start mb-2">
                <i class="bi bi-chevron-right text-primary-color me-2 py-3"></i>
                <span>Strong minds build strong lives; support and care create lasting peace.</span>
              </li>
              <li class="d-flex align-items-start mb-2">
                <i class="bi bi-chevron-right text-primary-color me-2 py-3"></i>
                <span>Inner peace starts with awareness, acceptance, and support when it's needed most.</span>
              </li>
              <li class="d-flex align-items-start mb-2">
                <i class="bi bi-chevron-right text-primary-color me-2 py-3"></i>
                <span>Emotional strength shapes how we live, connect, and move forward confidently.</span>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-5 mt-sm-4" data-aos="fade-up" data-aos-easing="ease-in-sine"
            data-aos-delay="500" data-aos-duration="1000">
            <div class="card bg-gradient-primary p-4 rounded-5 border-0">
              <div class="card-body text-white">
                <h4 class="font-1" style="font-weight: 900;">Together, We overcome</h4>
                <div class="row mt-4">
                  <div class="mb-4 fs-5">
                    <i class="bi bi-check-circle-fill text-secondary-color-2 me-2"></i>
                    Free Consultation
                  </div>
                  <div class="mb-4 fs-5">
                    <i class="bi bi-check-circle-fill text-secondary-color-2 me-2"></i>
                    Mental Satisfaction
                  </div>
                  <div class="mb-4 fs-5">
                    <i class="bi bi-check-circle-fill text-secondary-color-2 me-2"></i>
                    Emergency Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- #about end -->

<?php include("./partials/section/consult.php"); ?>

<?php include("./partials/section/specialist.php"); ?>

<?php include("./partials/section/color-faqs.php"); ?>

<?php include("./partials/section/feedback.php"); ?>

<?php require("./partials/layout/bottom-layout.php"); ?>