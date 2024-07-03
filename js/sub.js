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
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.ml3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: true })
    .add({
      targets: '.ml3 .letter',
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 150 * (i + 1)
    }).add({
      targets: '.ml3',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
})


