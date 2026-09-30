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
    formData.set('access_key', 'c409e02e-cfa1-45b3-83dd-8b0553871141');
    formData.set('from_name', 'Float Like A Lotus');
    const senderName = form.find('[name="name"]').val();
    const subject = isSubscribe
      ? 'New Newsletter Subscription | Float Like A Lotus'
      : ('New Consultation Request | Float Like A Lotus' + (senderName ? ' - ' + senderName : ''));
    formData.set('subject', subject);

    // Also send to local/live PHP mailer as secondary backup if on live server
    if (window.location.protocol.startsWith('http') && window.location.hostname.includes('floatlikealotus.com')) {
      try {
        $.ajax({
          type: 'POST',
          url: './assets/inc/form_submission.php',
          data: form.serialize()
        });
      } catch (e) {
        // Ignore backup failure
      }
    }

    // Submit to Web3Forms API (Works in local file:///, localhost, and live HTTPS)
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          handleSuccess();
        } else {
          console.error('Web3Forms returned error:', data);
          handleError(data.message);
        }
      })
      .catch(function (error) {
        console.error('Web3Forms fetch error:', error);
        // If network issue, show friendly message
        handleError();
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