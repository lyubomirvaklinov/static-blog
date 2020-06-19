$(".more").hide();
$(".readMore").click(function(){
  if($(this).hasClass("active")){
    $(this).html("Read More").removeClass("active");
    $(this).prev(".more").slideUp();
  } else {
    $(this).html("Read Less").addClass("active");
    $(this).prev(".more").slideDown();
  }
})