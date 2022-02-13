sliderAlive = false;
if(window.outerWidth < 761) {
  $('.features').slick({    
    dots: true,
    arrows:false
  });

  $('.images').slick({
    dots: true,
    arrows: false
  });
  sliderAlive = true;
}

 window.addEventListener("resize", () => {
  if ((!sliderAlive) && (window.outerWidth < 761)) {
    $('.features').slick({
      dots: true,
      arrows: false  
    });

    $('.images').slick({
      dots: true,
      arrows: false
    });
    sliderAlive = true;
  }
  else {
    return
  }
 });

let textFields = document.querySelectorAll(".form__field, .form__message-field");
textFields.forEach((field) => {
  field.addEventListener("click", () => {
    field.style.cursor = "initial";
    field.style.color = "black";
  })
})

let feedbackForm = document.querySelector("#feedback-form");
feedbackForm.onsubmit = ((event) => {
  event.preventDefault();
});