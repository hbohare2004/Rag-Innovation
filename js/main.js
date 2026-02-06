/**
 * Rag Innovations — Main Script (2025)
 * ---------------------------------------------------------------
 * Works with the restructured multi-page HTML & redesigned CSS.
 * Every plugin call is guarded so pages that don't load a given
 * library won't throw and break subsequent initialisation.
 * ---------------------------------------------------------------
 */
(function ($) {
  'use strict';

  /* ================================================================
     1. LOADER
     Dismiss the full-screen overlay. Only index.html carries
     the #ftco-loader element; on other pages this is a no-op.
     ================================================================ */
  const $loader = $('#ftco-loader');
  if ($loader.length) {
    $loader.removeClass('show');
  }

  /* ================================================================
     2. PARALLAX (Stellar.js)
     Guarded — only index.html loads the plugin.
     ================================================================ */
  if ($.fn.stellar) {
    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll',
    });
  }

  /* ================================================================
     3. TESTIMONIAL CAROUSEL (Owl Carousel)
     Home page — .carousel-testimony
     ================================================================ */
  if ($.fn.owlCarousel) {
    $('.carousel-testimony').owlCarousel({
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 500,
      responsive: {
        0:    { items: 1 },
        768:  { items: 2 },
        1024: { items: 3 },
      },
    });
  }

  /* ================================================================
     4. IMAGE LIGHTBOX (Magnific Popup)
     Used on products.html and gallery.html for .image-popup links.
     ================================================================ */
  if ($.fn.magnificPopup) {
    $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      image: {
        verticalFit: true,
      },
      zoom: {
        enabled: true,
        duration: 300,
      },
    });
  }

  /* ================================================================
     5. ANIMATED COUNTERS (animateNumber + Waypoints)
     Counts up .number[data-number] elements inside .section--stats
     once the section scrolls into view (index.html & about.html).
     ================================================================ */
  if ($.fn.waypoint && $.fn.animateNumber) {
    $('.section--stats').each(function () {
      const $section = $(this);

      $section.waypoint(
        function (direction) {
          if (direction === 'down' && !$section.hasClass('ri-counted')) {
            $section.addClass('ri-counted');

            const commaSep =
              $.animateNumber.numberStepFactories.separator(',');

            $section.find('.number').each(function () {
              const $el = $(this);
              const target = $el.data('number');

              $el.animateNumber(
                { number: target, numberStep: commaSep },
                5000
              );
            });
          }
        },
        { offset: '90%' }
      );
    });
  }

  /* ================================================================
     6. MOBILE NAV — close menu on link click
     Tapping a nav link on mobile collapses the hamburger menu.
     ================================================================ */
  const $navCollapse = $('#primaryNav');
  if ($navCollapse.length) {
    $navCollapse.on('click', '.nav-link', function () {
      if ($(window).width() < 992 && $navCollapse.hasClass('show')) {
        $navCollapse.collapse('hide');
      }
    });
  }

  /* ================================================================
     7. STICKY HEADER — shadow on scroll
     Adds a subtle depth cue once the user scrolls past the top.
     Uses requestAnimationFrame for paint-efficient updates.
     ================================================================ */
  const $navbar = $('#primary-navbar');
  if ($navbar.length) {
    let ticking = false;

    const onScroll = function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          $navbar.css(
            'box-shadow',
            window.scrollY > 10
              ? '0 4px 20px rgba(15, 23, 42, 0.08)'
              : ''
          );
          ticking = false;
        });
        ticking = true;
      }
    };

    $(window).on('scroll', onScroll);
    // Run once on load in case the page is already scrolled
    onScroll();
  }

})(jQuery);

