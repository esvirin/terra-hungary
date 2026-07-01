import Script from "next/script";

const localScripts = [
  "/build/one_page/vendor/jquery/dist/jquery.min.js",
  "/build/one_page/vendor/jquery-migrate/dist/jquery-migrate.min.js",
  "/build/one_page/vendor/bootstrap/dist/js/bootstrap.bundle.min.js",
  "/build/one_page/vendor/hs-header/dist/hs-header.min.js",
  "/build/one_page/vendor/hs-go-to/dist/hs-go-to.min.js",
  "/build/one_page/vendor/hs-unfold/dist/hs-unfold.min.js",
  "/build/one_page/vendor/hs-show-animation/dist/hs-show-animation.min.js",
  "/build/one_page/vendor/hs-sticky-block/dist/hs-sticky-block.min.js",
  "/build/one_page/vendor/hs-counter/dist/hs-counter.min.js",
  "/build/one_page/vendor/cubeportfolio/js/jquery.cubeportfolio.min.js",
  "/build/one_page/vendor/jquery-validation/dist/jquery.validate.min.js",
  "/build/one_page/vendor/dzsparallaxer/dzsparallaxer.js",
  "/build/one_page/vendor/aos/dist/aos.js",
  "/build/one_page/vendor/slick-carousel/slick/slick.js",
  "/build/one_page/vendor/fancybox/dist/jquery.fancybox.min.js",
  "/build/one_page/js/hs.core.js",
  "/build/one_page/js/hs.validation.js",
  "/build/one_page/js/hs.cubeportfolio.js",
  "/build/one_page/js/hs.slick-carousel.js",
  "/build/one_page/js/hs.fancybox.js",
  "/js/frontend.footer.js",
  "/build/runtime.1b8cc852.js",
  "/build/906.3b45704d.js",
  "/build/674.d58a3444.js",
  "/build/cookieConsent.7e7ca48b.js",
  "/build/parallax.542acc35.js",
  "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-star-rating@4.1.2/js/star-rating.min.js",
  "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-star-rating@4.1.2/themes/krajee-svg/theme.js",
  "https://cdn.jsdelivr.net/gh/kartik-v/bootstrap-star-rating@4.1.2/js/locales/LANG.js",
  "/build/755.43aadddf.js",
  "/build/vcard.72c70324.js",
  "/build/561.7dbc4f99.js",
  "/build/991.c8772187.js",
  "/build/915.d3f434e9.js",
  "/build/post.caaba1e6.js"
];

const bootstrapScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KGQL1F2K4F');
`;

const initScript = `
(function () {
  function whenJQueryReady(callback) {
    if (window.jQuery) {
      callback(window.jQuery);
      return;
    }

    window.setTimeout(function () {
      whenJQueryReady(callback);
    }, 50);
  }

  whenJQueryReady(function ($) {
    $(function () {
      if (window.HSHeader) {
        new window.HSHeader($('#header')).init();
      }

      $('.js-fancybox').each(function () {
        if ($.HSCore?.components?.HSFancyBox) {
          $.HSCore.components.HSFancyBox.init($(this));
        }
      });

      if (window.HSUnfold) {
        new window.HSUnfold('.js-hs-unfold-invoker').init();
      }

      $('.js-slick-carousel').each(function () {
        if ($.HSCore?.components?.HSSlickCarousel) {
          $.HSCore.components.HSSlickCarousel.init($(this));
        }
      });

      $('.js-validate').each(function () {
        if ($.HSCore?.components?.HSValidation) {
          $.HSCore.components.HSValidation.init($(this), {
            rules: {
              confirmPassword: {
                equalTo: '#signupPassword'
              }
            }
          });
        }
      });

      $('.js-animation-link').each(function () {
        if (window.HSShowAnimation) {
          new window.HSShowAnimation($(this)).init();
        }
      });

      $('.js-counter').each(function () {
        if (window.HSCounter) {
          new window.HSCounter($(this)).init();
        }
      });

      var cbpStickyFilter = window.HSStickyBlock
        ? new window.HSStickyBlock($('#cbpStickyFilter'))
        : null;

      $('.cbp').each(function () {
        if ($.HSCore?.components?.HSCubeportfolio) {
          $.HSCore.components.HSCubeportfolio.init($(this), {
            layoutMode: 'grid',
            filters: '#filterControls',
            displayTypeSpeed: 0
          });
        }
      });

      $('.cbp').on('initComplete.cbp filterComplete.cbp pluginResize.cbp', function (event) {
        if (cbpStickyFilter && typeof cbpStickyFilter.update === 'function') {
          cbpStickyFilter.update();
        }

        if ((event.type === 'initComplete' || event.type === 'filterComplete') && window.AOS) {
          window.AOS.init({
            duration: 650,
            once: true
          });
        }
      });

      $('#cbpStickyFilter').on('click', '.cbp-filter-item', function () {
        var target = $('#demoExamplesSection');
        if (!target.length) {
          return;
        }

        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 200);
      });

      $('.js-go-to').each(function () {
        if (window.HSGoTo) {
          new window.HSGoTo($(this)).init();
        }
      });

      if (/MSIE \\d|Trident.*rv:/.test(navigator.userAgent)) {
        var polyfills = document.createElement('script');
        polyfills.src = 'https://terrahungary.com/polifills.js';
        document.body.appendChild(polyfills);
      }

      $('.map').each(function () {
        var src = $(this).attr('data-src');
        if (!src || $(this).find('iframe').length) {
          return;
        }

        $(this).append('<iframe src="' + src + '" height="250" style="border:0" allowfullscreen loading="lazy"></iframe>');
      });

      var cookiePopup = $('#cookiePopup');
      if (cookiePopup.length) {
        var cookieConsentAccepted = false;

        try {
          cookieConsentAccepted = window.localStorage && localStorage.getItem('terraHungaryCookieConsent') === 'accepted';
        } catch (error) {
          cookieConsentAccepted = false;
        }

        if (cookieConsentAccepted) {
          cookiePopup.hide();
        }

        cookiePopup.on('click', 'button', function () {
          try {
            if (window.localStorage) {
              localStorage.setItem('terraHungaryCookieConsent', 'accepted');
            }
          } catch (error) {
          }

          cookiePopup.fadeOut(150);
        });
      }

      function updateHeaderState() {
        var $nav = $('.header-section');
        $nav.toggleClass('scrolled', $(window).scrollTop() > $nav.height());
      }

      function reveal(el) {
        var windowHeight = $(window).height();
        $(el).each(function () {
          var thisPos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();

          if (topOfWindow + windowHeight - 200 > thisPos) {
            $(this).addClass('fadeIn');
          }
        });
      }

      $(document).on('click', '.logo', function () {
        $('.navbar-collapse').collapse('hide');
        $('html, body').animate({ scrollTop: 0 }, 500);
      });

      $(document).on('click', '#header a.nav-link, footer a.nav-link', function (event) {
        var href = $.attr(this, 'href');
        var $target = href ? $(href) : $();

        $('.navbar-collapse').collapse('hide');

        if ($target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: $target.offset().top - 15
          }, 500);
        }

        if ($(this).attr('data-tab-nav-id')) {
          $($(this).attr('data-tab-nav-id')).trigger('click');
        }
      });

      $('.navbar-collapse').on('show.bs.collapse', function () {
        $('.header-section').addClass('navbar-open');
      });

      $('.navbar-collapse').on('hide.bs.collapse', function () {
        $('.header-section').removeClass('navbar-open');
      });

      updateHeaderState();
      reveal('#contact, .graduation-description p, .graduation-description ul, .graduation-description img:not(.parallax)');

      $(window).on('scroll', function () {
        updateHeaderState();
        reveal('#contact, .graduation-description p, .graduation-description ul, .graduation-description img:not(.parallax)');
      });
    });
  });
})();
`;

export function OriginalSiteScripts() {
  return (
    <>
      <Script
        id="google-tag-manager"
        src="https://www.googletagmanager.com/gtag/js?id=G-KGQL1F2K4F"
        strategy="afterInteractive"
      />
      <Script id="google-tag-manager-bootstrap" strategy="afterInteractive">
        {bootstrapScript}
      </Script>

      {localScripts.map((src) => (
        <Script key={src} src={src} strategy="afterInteractive" />
      ))}

      <Script id="original-site-bootstrap" strategy="afterInteractive">
        {initScript}
      </Script>
    </>
  );
}
