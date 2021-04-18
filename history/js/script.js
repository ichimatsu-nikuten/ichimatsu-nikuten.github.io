$(function(){
  $(window).on('scroll resize',function(){
    var scr = $(window).scrollTop();
    if(scr >= 820){
      $('#hamb').show();
      $('#side-title').show();
      $('#up').show();
    }else{
      $('#hamb').hide();
      $('#side-title').hide();
      $('#up').hide();
    }
  });
  AOS.init({
    offset: 200,
    duration: 2000,
    easing: 'easeOutQuart',
  });

  // Also can pass in optional settings block
  var rellax = new Rellax('.rellax', {
  speed: -2,
  center: true,
  });
      /* スクロールアニメーション */
      $('#up').on('click',function(){
      $('html,body').animate({scrollTop:0},500);
    });

  $('#to-history').on('click',function(){
    $('html,body').animate({scrollTop:0},500);
    $('#ham').click();
    })



function requestFullScreen(elem) {
  if (elem.requestFullScreen) {
      elem.requestFullScreen();
  }
  else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
  }
  else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
  }
  else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
  }
}

function lockOrientation(mode) {
  if (screen.orientation.lock) {
      screen.orientation.lock(mode);
  }
  else if (screen.lockOrientation) {
      screen.lockOrientation(mode);
  }
  else if (screen.webkitLockOrientation) {
      screen.webkitLockOrientation(mode);
  }
  else if (screen.mozLockOrientation) {
      screen.mozLockOrientation(mode);
  }
  else if (screen.msLockOrientation) {
      screen.msLockOrientation(mode);
  }
}

document.addEventListener("DOMContentLoaded", function(){

  document.getElementById("lock").onclick = function(){
      // html全体をフルスクリーン化します
      requestFullScreen(document.documentElement);
      // 縦画面に固定します
      // screen.orientation.lockは即座に効くようですが、
      // screen.lockOrientation系は少し間を開けないと有効にならないようです
      setTimeout(function(){
          lockOrientation("portrait");
      }, 1);

      return false;
  };
}, false);
});