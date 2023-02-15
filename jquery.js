let total = 0;

$(document).ready(function(){
  $('img').mouseenter(function(){
    $(this).fadeTo('slow', .75);
  }).mouseleave(function(){
    $(this).fadeTo('fast', 1);
  })
  

  $('.adopt-button').click(function(){
    total = total + 123.45;
    alert('The total is '+total);
  });
})
as
