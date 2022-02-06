sliderAlive = false;
if(window.outerWidth <= 320) {
  $('.features').slick({
    dots: true
  });

  $('.gallery__images').slick({
    dots: true
  });
  sliderAlive = true;
}

 window.addEventListener("resize", () => {
  if ((!sliderAlive) && (window.outerWidth <= 320)) {
    $('.features').slick({
      dots: true
    });

    $('.gallery__images').slick({
      dots: true
    });
    sliderAlive = true;
  }
  else {
    return
  }
 });

let textFields = document.querySelectorAll(".form__field");
textFields.forEach((field) => {
  field.addEventListener("click", () => {
    field.style.cursor = "initial";
  })
})

console.log()

// headerImg = document.querySelector(".header__main-image");
// headerImg.style.src = "./images/header-phone_mob.png";

//  TODO: Исправить путь каритнки    
