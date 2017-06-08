

$(window).scroll(function()
  {
    console.log($(window).scrollTop());
    if($(window).scrollTop()<6378)
    {

      $("#character").css({
        top:($(window).scrollTop() + "px" ),

      });
    }
    else
    {
      $('character').css({
        top:765,
        left:600,
        position:"fixed"
      });
    }
  }
);
