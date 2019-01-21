  $(document).ready(function () {
      
      //window.fireworkContainers = document.getElementById('')
      window.isOpen = false;
      window.buttonAnimate = true;
      window.slider_animator = document.getElementById('slider-animator');
      window.slider_button = document.getElementById('slider-button');

      setInterval(function () {
          if (buttonAnimate) {
              slider_button.classList.add("animate");
              slider_button.addEventListener("webkitAnimationEnd", function () {
                  slider_button.classList.remove("animate");
              }, false);
          };
      }, 3000)

      $("#slider-button").click(function () {
          if (isOpen) {
              slider_animator.classList.remove("movaEsquerda");
              slider_animator.classList.add("movaDireita");
              buttonAnimate = true;
              isOpen = false;
          } else {
              slider_animator.classList.remove("movaDireita");
              slider_animator.classList.add("movaEsquerda");
              buttonAnimate = false;
              isOpen = true;
          };
      });
  });
