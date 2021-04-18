$(function(){
  AOS.init({
    offset: 150,
    duration: 2000,
    easing: 'easeOutQuart',
  });

  var rellax = new Rellax('.rellax', {
  speed: 1,
  center: true,
  });

  $('#up').on('click',function(){
      $('html,body').animate({scrollTop:0},500);
    });

    $('#to-product').on('click',function(){
  var productHeight =$('#beef').offset().top -50;
  $('html,body').animate({scrollTop:productHeight},500);
  $('#ham').click();
  });

  $('#to-beef').on('click',function(){
  var productHeight =$('#beef').offset().top -50;
  $('html,body').animate({scrollTop:productHeight},500);
  $('#ham').click();
  });

  $('#to-pork').on('click',function(){
  var productHeight =$('#pork').offset().top -50;
  $('html,body').animate({scrollTop:productHeight},500);
  $('#ham').click();
  });

  $('#to-chiken').on('click',function(){
  var productHeight =$('#chiken').offset().top -50;
  $('html,body').animate({scrollTop:productHeight},500);
  $('#ham').click();
  });

  $('#to-others').on('click',function(){
  var productHeight =$('#others').offset().top -50;
  $('html,body').animate({scrollTop:productHeight},500);
  $('#ham').click();
  });

  $(window).on('scroll resize road',function(){
    var scr = $(window).scrollTop();
    if(scr >= 600){
      $('#hamb').show();
      $('#side-title').show();
    }else{
      $('#hamb').hide();
      $('#side-title').hide();
    }

    if(scr >= 1000){
      $('#up').show();
    }else{
      $('#up').hide();
    }
  });



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