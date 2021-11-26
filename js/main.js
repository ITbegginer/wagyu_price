$(function(){
  $('[data-js="topScroll"]').on('click',function(event){
    event.preventDefault();
    $('html').animate({scrollTop:0});
  })
});