<?php
$head_title = "Blog Detail – Nuro";
$page_title = "Blog Detail";
?>

<?php require("./partials/layout/top-layout.php"); ?>

<?php require("./partials/page-title.php"); ?>

<!-- Blog content -->
<section class="section py-5 my-5">
  <div class="b-container">
    <div class="row g-5">
      <!-- Blog Detail -->
      <div class="col-12 col-lg-8">
        <div class="row">
          <h2 class="font-1 fw-bolder mb-4">Understanding Mental Health: A Comprehensive Guide</h2>
          <p class="text-primary-color mb-4">
            <i class="bi bi-calendar-fill"></i>&nbsp;15th March 2025
            &nbsp;|&nbsp;
            <i class="bi bi-person-fill"></i>&nbsp;By H. Jasmine
          </p>
          <div class="mb-4">
            <img src="./assets/image/Place-Holder-1920x1280.jpg" alt="Blog Cover" class="img-fluid rounded-5">
          </div>
          <p class="text-muted-color">
            It's natural to experience emotional ups and downs, but sometimes these feelings can become overwhelming
            or persistent. Many people struggle silently, unsure whether what they're going through warrants
            professional help. Understanding the signs that indicate a need for mental health support can be the
            first step toward healing and regaining control of your life.
          </p>

          <p class="text-muted-color mb-0">
            One of the most common indicators is a prolonged feeling of sadness, anxiety, or hopelessness that
            doesn’t seem to go away. If you’ve been feeling down for weeks or find yourself constantly on edge, it
            may be time to reach out. Other emotional symptoms can include sudden mood swings, irritability, or a
            loss of interest in activities you used to enjoy.
          </p>
          <div class="row g-0 g-md-3 px-2">
            <div class="col-12 col-md-6 mt-4 mt-md-0">
              <img src="./assets/image/Place-Holder-1920x1280.jpg" alt="Blog Detail 1" class="img-fluid rounded-5 w-100">
            </div>
            <div class="col-12 col-md-6 mt-4 mt-md-0">
              <img src="./assets/image/Place-Holder-1920x1280.jpg" alt="Blog Detail 2" class="img-fluid rounded-5 w-100">
            </div>
          </div>
          <p class="text-muted-color mt-4">
            Mental health issues can also manifest physically. Chronic fatigue, unexplained aches, or changes in
            appetite and sleep patterns are all red flags. You might find it difficult to concentrate, feel detached
            from reality, or notice that your relationships and work performance are starting to suffer. These signs
            often indicate that the issue goes beyond everyday stress and could benefit from professional attention.
          </p>

          <p class="text-muted-color ">
            Reaching out for mental health support isn’t a sign of weakness—it's a sign of strength. Therapists and
            counselors are trained to help you understand your thoughts, emotions, and behaviors, offering guidance
            and strategies for improvement. If you recognize any of these signs in yourself or a loved one, consider
            speaking with a mental health professional to get the support you need.
          </p>
        </div>
        <hr class="border-2 my-5">
        <div class="d-flex align-items-center mb-0 mb-lg-5">
          <h3 class="font-1 fw-bolder mt-1">Share On :</h3>
          <div class="social-box ms-4">
            <a href="https://www.facebook.com" class="rounded-5 py-2" style="width: 40px; height: 40px;"><i
                class="bi bi-facebook text-white"></i></a>
            <a href="https://x.com" class="rounded-5 py-2" style="width: 40px; height: 40px;"><i
                class="bi bi-twitter-x text-white"></i></a>
            <a href="https://www.linkedin.com" class="rounded-5 py-2" style="width: 40px; height: 40px;"><i
                class="bi bi-linkedin text-white"></i></a>
          </div>
        </div>
      </div>
      <!-- #blog detail end -->

      <!-- Sidebar -->
      <div class="col-12 col-lg-4">

        <?php include('./partials/section/blog-sidebar.php'); ?>

      </div>
      <!-- #sidebar end -->

    </div>
  </div>
  <!-- #blog content end -->
</section>
<!-- #blog end -->

<?php require("./partials/layout/bottom-layout.php"); ?>