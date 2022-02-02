sliderAlive = false;
 window.addEventListener("resize", () => {
  if ((!sliderAlive) && (window.outerWidth <= 320)) {
    $('.features').slick({
      dots: true
    });
    sliderAlive = true;
  }
  else {
    return
  }
 });
