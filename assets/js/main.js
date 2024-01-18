function openMenu() {
  document.getElementById('menu-mobile').style.width = "50%";
  document.getElementById('overlay').style.width = "100%";
}
function closeMenu() {
  document.getElementById('menu-mobile').style.width = "0";
  document.getElementById('overlay').style.width = "0";
}

$(function () {
  $('.box-banner').slick({
    arrows: false,
    autoplay: true,
  });

  $('.list-vision').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  });

  $('.list-project').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    dots:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:false,
          infinite: true,
        }
      },
      {
        
        breakpoint: 576,
        settings: {
          dots:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  })

  $('.list-parther').slick({
    slidesToScroll:1,
    slidesToShow:4,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  })
})