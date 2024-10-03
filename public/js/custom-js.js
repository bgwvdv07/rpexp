$(document).ready(function () {
    var $grid = $('.grid').imagesLoaded().progress(
        function() {
      $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      })
    }
    )
    function recaptchaCallback() {
      const submitButton = document.getElementById("contact-us-submit-btn");
      submitButton.removeAttribute("disabled");
  }

  // Define recaptchaCallback in the global scope.
  window.recaptchaCallback = recaptchaCallback;
})