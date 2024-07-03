document.addEventListener("DOMContentLoaded", function(){
  /**모바일 메뉴버튼 */
  $('.toggle_wrap').hide()
  $('.menu_btn').click(function(){
    $('.menu_btn,.mobile_modal').toggleClass('active');
    $('.toggle_wrap').stop().slideToggle(500);
  })
  $('.mobile_modal').click(function(){
    $('.toggle_wrap').slideUp();
    $('.mobile_modal, .menu_btn').removeClass('active');
  })
  $(window).resize(function(){
    var win_w = $(window).width()
  
    if( win_w >= 768 && $('.menu_btn').hasClass('active') ){
      $('.menu_btn').click()
    }
  })
  /**visual svg path길이*/
  const mainGroup = document.querySelector('.mobile_svg')
  const mainPath = mainGroup.querySelectorAll('path')
  mainPath.forEach((path, index) => {
    const length = path.getTotalLength()
    path.style.setProperty('--length', length)
  })
  const pcGroup = document.querySelector('.pc_svg')
  const pcPath = pcGroup.querySelectorAll('path')
  pcPath.forEach((path, index) => {
    const length = path.getTotalLength()
    path.style.setProperty('--length2', length)
  })

  /**swiper slide */
var swiper = new Swiper(".swiper", {
  pagination : false,
  centeredSlides : false,
  slidesPerView: 1,
  spaceBetween: 60,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints:{
    768:{
      slidesPerView:2,
      spaceBetween:60,
      centeredSlides : false,
      slidesOffsetBefore : 0,
    },
    1024:{
      slidesPerView:2.5,
    },
    1500:{
      slidesPerView:4,
    },
  }  
});
/**슬라이드 마우스오버 img변경 */
$('.swiper').mouseover(function(){
  $('.slide_img img:nth-child(1)').css('display','none');
  $('.slide_img img:nth-child(2)').css('display','block');
})
$('.swiper').mouseleave(function(){
  $('.slide_img img:nth-child(1)').css('display','block');
  $('.slide_img img:nth-child(2)').css('display','none');
})
/**parallax */
$(window).scroll(function(){
  var win_top = $(window).scrollTop()  // 스크롤의 위치 구하기
  var win_h= $(window).height()  // 브라우저의 높이
  $('.brand_inner div').each(function(){
      var box_top = $(this).offset().top
      if(win_top >= box_top - 900){
          $(this).addClass('on')
      }
  })
})
/**best svg*/
const bestGroup = document.querySelector('.best_text')
const bestPath = bestGroup.querySelectorAll('path')
bestPath.forEach((path, index) => {
  const length = path.getTotalLength()
  path.style.setProperty('--length', length)
})
$(window).on('scroll',function(){
  var cur_pos = $(this).scrollTop();
  console.log(cur_pos)
  if(cur_pos>1700){
    $('.best_text path').css({'animation': 'path_ani 7s forwards'
  })
  }
})
/** 읽을거리 svg */
const magazineGroup = document.querySelector('.story_svg')
const magazinePath = magazineGroup.querySelectorAll('path')
magazinePath.forEach((path, index) => {
  const length = path.getTotalLength()
  path.style.setProperty('--length', length)
})
$(window).on('scroll',function(){
  var cur_pos1 = $(this).scrollTop();
  // console.log(cur_pos1)
  if(cur_pos1>5900){
    $('.story_svg path').css({'animation': 'path_ani02 8s infinite'
  })
  }
})
/**b2b svg 애니메이션 */
var rolling;
          $svg3 = $('.b2b_svg').drawsvg({
          duration:300,
          stagger:200,
          easing:'swing',
          reverse:false
      });
      function autoDraw(){
          rolling= setInterval(function(){
          $svg3.drawsvg('animate');
         },2500)
       }
       function stopDraw(){
        clearInterval(rolling)
       }
       $('#b2b a').on({
        'mouseenter': stopDraw,
        'mouseleave': autoDraw
       })
       autoDraw()
       var $doc = $(document),
            $win = $(window),
            $svg2 = $('.best_text').drawsvg(),
            max = $doc.height() - $win.height();

            $win.on('scroll', function() {
             var p = $win.scrollTop() / max;
             $svg2.drawsvg('progress', p);
              });    
});





