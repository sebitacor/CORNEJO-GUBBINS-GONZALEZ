function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
window.addEventListener('scroll', function() {
    var initialSection = document.getElementById('initialSection');
    if (window.scrollY > 50) { // Cambia 50 por la posición en píxeles que prefieras
      initialSection.classList.add('transparent');
    } else {
      initialSection.classList.remove('transparent');
    }
  });