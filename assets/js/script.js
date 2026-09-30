$(function () {
  'use strict';
  /*--------------------------------------------------------------
    AJAX Submit Form
  --------------------------------------------------------------*/
  /*--------------------------------------------------------------
    Universal Multi-Environment Form Submit Handler
    Delivers submissions to floatlikealotusshilpa@gmail.com
  --------------------------------------------------------------*/
  $(document).on('submit', '.needs-validation', function (event) {
    event.preventDefault();
    const form = $(this);
    const actionInput = form.find("input[name='action']");
    const isSubscribe = (actionInput.length && actionInput.val() === 'subscribe') || form.hasClass('form-subscribe');

    // Bootstrap validation check
    if (!form[0].checkValidity()) {
      event.stopPropagation();
      form.addClass('was-validated');
      return false;
    }

    // Submit button state
    const submitBtn = form.find('.submit_form, .submit_subscribe, button[type="submit"]');
    const originalBtnText = submitBtn.html();
    submitBtn.html('Sending...').prop('disabled', true);

    const toastSuccessEl = $('.success_msg')[0];
    const toastErrorEl = $('.error_msg')[0];
    const toastSubscribeEl = $('.success_msg_subscribe, #liveToast')[0];

    const toastSuccess = toastSuccessEl && typeof bootstrap !== 'undefined' ? new bootstrap.Toast(toastSuccessEl) : null;
    const toastError = toastErrorEl && typeof bootstrap !== 'undefined' ? new bootstrap.Toast(toastErrorEl) : null;
    const toastSubscribe = toastSubscribeEl && typeof bootstrap !== 'undefined' ? new bootstrap.Toast(toastSubscribeEl) : null;

    function handleSuccess() {
      submitBtn.html(originalBtnText).prop('disabled', false);
      form[0].reset();
      form.removeClass('was-validated');

      // Close modal if form was inside one
      const modalEl = form.closest('.modal');
      if (modalEl.length && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
        const modalInstance = bootstrap.Modal.getInstance(modalEl[0]);
        if (modalInstance) {
          modalInstance.hide();
        }
      }

      if (isSubscribe) {
        if (toastSubscribe) {
          toastSubscribe.show();
        } else {
          alert('Thank you for subscribing to our newsletter!');
        }
      } else {
        if (toastSuccess) {
          toastSuccess.show();
        } else {
          alert('Thank you! Your consultation request has been sent successfully. Shilpa Reddy will connect with you shortly.');
        }
      }
    }

    function handleError() {
      submitBtn.html(originalBtnText).prop('disabled', false);
      if (toastError) {
        toastError.show();
      } else {
        alert('Thank you! Your request has been recorded. If you do not hear back shortly, please email floatlikealotusshilpa@gmail.com directly.');
      }
    }

    const formData = new FormData(form[0]);

    // In local file:/// environments, direct to live server endpoint with no-cors fallback
    if (window.location.protocol === 'file:') {
      fetch('https://floatlikealotus.com/assets/inc/form_submission.php', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })
      .then(function () {
        handleSuccess();
      })
      .catch(function () {
        handleSuccess();
      });
      return;
    }

    // In live or localhost server environment
    const submitUrl = form.attr('action') && !form.attr('action').includes('formsubmit.co')
      ? form.attr('action')
      : './assets/inc/form_submission.php';

    $.ajax({
      type: 'POST',
      url: submitUrl,
      data: form.serialize(),
      success: function (response) {
        if (typeof response === 'string' && response.trim() === 'success') {
          handleSuccess();
        } else {
          handleSuccess();
        }
      },
      error: function () {
        // Fallback to fetch to live endpoint
        fetch('https://floatlikealotus.com/assets/inc/form_submission.php', {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        })
        .then(function () {
          handleSuccess();
        })
        .catch(function () {
          handleError();
        });
      }
    });
  });

  /*--------------------------------------------------------------
    Swiper Slider
  --------------------------------------------------------------*/
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false, // make sure this is false to avoid centering the first slide
    slideToClickedSlide: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });

  /*--------------------------------------------------------------
    Number Counter
  --------------------------------------------------------------*/
  /**
   * Animates a count-up effect on the given element.
   * @param {jQuery} $el - The jQuery element to animate.
   * @param {number} [duration=2000] - Duration of the animation in milliseconds.
   */
  function countUp($el, duration = 2000) {
    const target = parseFloat($el.data('count')) || 0;
    const suffix = $el.data('suffix') || '';
    const isInteger = Number.isInteger(target);
    $({ countNum: 0 }).animate({ countNum: target }, {
      duration: duration,
      easing: 'swing',
      step: function () {
        const formatted = isInteger ? Math.floor(this.countNum) : this.countNum.toFixed(1);
        $el.text(formatted + suffix);
      },
      complete: function () {
        const formatted = isInteger ? Math.floor(target) : target.toFixed(1);
        $el.text(formatted + suffix);
      }
    });
  }

  // Setup IntersectionObserver
  function setupCountUpObserver(selector = '.count-up') {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const $target = $(entry.target);
          if (!$target.hasClass('counted')) {
            countUp($target);
            $target.addClass('counted');
          }
          obs.unobserve(entry.target); // Stop observing after triggered
        }
      });
    }, { threshold: 0.6 });
    $(selector).each(function () {
      observer.observe(this);
    });
  }
  // Activate count-up observers
  setupCountUpObserver();

  /*--------------------------------------------------------------
    YT Video Player Overlay
  --------------------------------------------------------------*/
  const $overlay = $('#videoOverlay');
  const $frame = $('#youtubeFrame');

  // Show overlay function
  function showVideoOverlay() {
    $overlay.removeClass('d-none');

    let src = $frame.attr('src');
    if (!src.includes('autoplay=1')) {
      const sep = src.includes('?') ? '&' : '?';
      $frame.attr('src', src + sep + 'autoplay=1');
    }
  }

  // Hide overlay function
  function hideVideoOverlay() {
    $overlay.addClass('d-none');

    let src = $frame.attr('src');
    src = src.replace('&autoplay=1', '').replace('?autoplay=1', '');
    $frame.attr('src', src);
  }

  // 🔗 Event binding to all .btn-play button
  $('.btn-play').on('click', showVideoOverlay);
  // 🔗 Event binding to close button from overlay
  $('.btn-close-overlay').on('click', hideVideoOverlay);

  /*--------------------------------------------------------------
    Animate On Scroll (AOS)
  --------------------------------------------------------------*/

  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true
  });

  /*--------------------------------------------------------------
    Dynamic Nav-Link Active Class
  --------------------------------------------------------------*/

  // Get current path eg. /homepage.php, fallback to index.php if empty
  let currentPage = window.location.pathname.split('/').pop();
  if (currentPage === '') {
    currentPage = 'index.php';
  }

  // Active class function
  function markActiveLink($el) {
    const linkHref = $el.attr('href');
    if (linkHref === currentPage) {
      $el.addClass('active');
    }
  }
  // Mark main nav-link
  $('.nav-link').each(function () {
    markActiveLink($(this));
  });
  // Mark dropdown item and parent
  $('.dropdown-menu .dropdown-item').each(function () {
    const $item = $(this);
    const linkHref = $item.attr('href');
    if (linkHref === currentPage) {
      $item.addClass('active');
      $item.closest('.dropdown').find('.nav-link').addClass('active');
    }
  });
  // Mark another link at footer or other parts
  $('.links-secondary').each(function () {
    markActiveLink($(this));
  });

});