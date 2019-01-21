  $(document).ready(function () {

      window.fireworkContainers = document.getElementById('fireworkContainers');
      var firework = document.getElementById("firework");
      var firework2 = document.getElementById("firework2");
      var firework3 = document.getElementById("firework3");

      // Animações disponíveis (São classes)
      var fireworkArray = [
                'fireworkExtraSmall',
                'fireworkSmall',
                'fireworkMedium',
                'fireworkLarge',
                'fireworkExtraLarge'
            ];

      // Random número entre 5 e 20
      function getRandomNumber_5_20() {
          return Math.floor(Math.random() * (20 - 5)) + 5;
      }

      // Random número entre 25 e 40
      function getRandomNumber_25_40() {
          return Math.floor(Math.random() * (40 - 25)) + 25;
      }

      // Random número entre 50 e 85
      function getRandomNumber_50_85() {
          return Math.floor(Math.random() * (85 - 50)) + 45;
      }

      // Randomiza as animações
      function getRandomAnimation() {
          var randomAnimation = Math.floor(Math.random() * 5);
          var animations = [];
          for (var i = 0; i < 3; i++) {
              animations.push(fireworkArray[Math.floor(Math.random() * 5)])
          }
          return animations;
      }

      // Looping Infinito soltando Fogos
      setInterval(function () {
          var animations = getRandomAnimation();
          animaFirework(animations[0], animations[1], animations[2])
      }, 2000)

      // Aqui faz o Firework subir
      function animaFirework(animacao1, animacao2, animacao3) {
          // Firework 1
          var elemento1_ = document.getElementById('fireworkContainer');
          var elemento2_ = document.getElementById('fireworkContainer2');
          var elemento3_ = document.getElementById('fireworkContainer3');

          elemento1_.style.left = getRandomNumber_5_20() + "%";
          elemento1_.classList.add(animacao1);
          elemento1_.addEventListener("webkitAnimationEnd", function () {
              elemento1_.classList.remove(animacao1);
			  firework.pause();
          })
          firework.play();

          // Firework 2
          setTimeout(function () {
              elemento2_.style.left = getRandomNumber_25_40() + "%";
              elemento2_.classList.add(animacao2);
              elemento2_.addEventListener("webkitAnimationEnd", function () {
                  elemento2_.classList.remove(animacao2);
				  firework2.pause();
              })
              firework2.play();

              // Firework 3
              setTimeout(function () {
                  elemento3_.style.left = getRandomNumber_50_85() + "%";
                  elemento3_.classList.add(animacao3);
                  elemento3_.addEventListener("webkitAnimationEnd", function () {
					elemento3_.classList.remove(animacao3);
					firework3.pause();
                  })
                  firework3.play();
              }, 250)
          }, 250)
      };

  });