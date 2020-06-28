  // navbar scroll effect
  $(window).on('scroll',function(){
    if ($(window).scrollTop()){
      $('.navhome').addClass('bg-light');
      $('.navhome').addClass('navbar-light');
      $('.navhome').removeClass('navbar-dark');
      document.getElementById("brand").style.color = "#038adb";
    }else{
      $('.navhome').removeClass('bg-light');
      $('.navhome').removeClass('navbar-light');
      $('.navhome').addClass('navbar-dark');
      document.getElementById("brand").style.color = "#fff";
    }
  });
  // End navbar scroll effect

  // pagination berita
  // $(document).ready(function(){
  //   $('.pagi-next').click(function(){
  //     $('.pagi-list').find('.pagenum.active').next().addClass('active');
  //     $('.pagi-list').find('.pagenum.active').prev().removeClass('active');
  //   });
  //   $('.pagi-prev').click(function(){
  //     $('.pagi-list').find('.pagenum.active').prev().addClass('active');
  //     $('.pagi-list').find('.pagenum.active').next().removeClass('active');
  //   });
  // });
  // End pagination berita

  // load more
  $('.cardberita').slice(0,2).show();

  $(document).ready(function(){
    if($('.cardberita:hidden').length === 0){
      $('#btnmore').fadeOut();
    };
  });

  $('#btnmore').on('click', function(){
    $('.cardberita:hidden').slice(0,1).slideDown();

    if($('.cardberita:hidden').length === 0){
      $('#btnmore').fadeOut();
    }
  });
  // End load more

  // galery swiper effect
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: true,
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 1000,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  // End galery swiper effect