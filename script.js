// Voeg een event listener toe om de knoppositie bij te werken wanneer de pagina laadt en tijdens het scrollen
window.addEventListener('load', function() {
    updateButtonPosition();
    window.addEventListener('scroll', updateButtonPosition);
  });
  
  function scrollToProjects() {
    const projectsSection = document.querySelector('.projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  
    // Verberg de knop
    const button = document.getElementById('scrollToProjectsButton');
    button.style.display = 'none';
  }
  
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
  