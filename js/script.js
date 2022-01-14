
  $(document).ready(function () {
        $('.autor').slick({
          infinite: true,
            slidesToShow: 2,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true
      });
      $('.single-item-rtl').slick({
            rtl: true
        });
  });
$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});