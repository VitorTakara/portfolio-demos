  $(document).ready(function () { 
      $('#LandingPage_NextSoft').fullpage({
          onLeave: function (index, nextIndex, direction) {
              switch (nextIndex) {
                  case 2:
                      if (!fireworkContainers.classList.contains("display-none")) {
                          fireworkContainers.classList.add("display-none")
                      }
                      if (isOpen === false) slider_button.click();
                      break;
                  case 4:
                      if (fireworkContainers.classList.contains("display-none")) {

                          fireworkContainers.classList.remove("display-none")
                      }
                      if (isOpen === false) slider_animator.classList.add("pull-right-contactPage");
                      break;
                  default:
                      if (!fireworkContainers.classList.contains("display-none")) {
                          fireworkContainers.classList.add("display-none")
                      }
                      if (slider_animator.classList.contains("pull-right-contactPage")) {
                          slider_animator.classList.remove("pull-right-contactPage")
                      };
              }
          },
          // rgb(255, 113, 18)
          
          sectionsColor: ['#fff', '#fff', '#fff', '#62c2cc', '#ff7212'], 
          sectionSelector: '.section',
		  autoScrolling: false,
          'navigation': true,
          //responsiveWidth: 1000,
          //responsiveHeight: 650,
         // responsiveSlides: true,
          'navigationPosition': 'left',
          'navigationTooltips': ['Sobre Nós', 'Automação Comercial', 'Nextsoft App', 'Módulos Adicionais', 'Contato']
      });
  });