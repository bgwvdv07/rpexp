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
    
})