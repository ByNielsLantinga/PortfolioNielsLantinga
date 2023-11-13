// Functie om de knoppositie bij te werken
function updateButtonPosition() {
  const button = document.getElementById('scrollToProjectsButton');
  const scrollY = window.scrollY || window.pageYOffset;
  const projectsSection = document.querySelector('.projects');
  const projectsSectionRect = projectsSection.getBoundingClientRect();

  // Bereken het verschil tussen de knoppositie en het bovenste van de "Projects" sectie
  const distanceToProjects = projectsSectionRect.top - scrollY;

  // Als de knop de "Projects" sectie nadert of overschrijdt, verberg de knop
  if (distanceToProjects < window.innerHeight - 80) {
    button.style.display = 'none';
  } else {
    button.style.display = 'block';
  }

  // Pas de topwaarde van de knop aan op basis van de scrollpositie
  button.style.top = scrollY + window.innerHeight - 80 + 'px';
}

// Voeg een event listener toe om de knoppositie bij te werken bij vensterformaatwijzigingen
window.addEventListener('load', function() {
  // Roep updateButtonPosition op bij het laden van de pagina
  updateButtonPosition();

  // Roep updateButtonPosition op bij vensterformaatwijzigingen
  window.addEventListener('resize', updateButtonPosition);

  // Roep updateButtonPosition op tijdens het scrollen
  window.addEventListener('scroll', updateButtonPosition);
});

// Functie om naar projecten te scrollen
function scrollToProjects() {
  const projectsSection = document.querySelector('.title');
  projectsSection.scrollIntoView({ behavior: 'smooth' });

  // Verberg de knop
  const button = document.getElementById('scrollToProjectsButton');
  button.style.display = 'none';
}





document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.container');
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', function () {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';

      elements.forEach((element) => {
          const isInViewport = isElementInViewport(element, 100, 200); // Pas de offsets hier aan

          if (isInViewport && !element.classList.contains('animate-in')) {
              element.classList.add('animate-in');
          } else if (!isInViewport && element.classList.contains('animate-in')) {
              element.classList.remove('animate-in');
          }
      });

      lastScrollTop = currentScrollTop;
  });

  function isElementInViewport(el, topOffset, bottomOffset) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top + topOffset >= 0 &&
          rect.left >= 0 &&
          rect.bottom - bottomOffset <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  window.dispatchEvent(new Event('scroll'));
});
