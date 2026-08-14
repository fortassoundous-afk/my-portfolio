// Interactive Portfolio Filter & Smooth Actions
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Portfolio Filtering Logic
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('active', 'btn-gold');
        btn.classList.add('btn-outline-secondary');
      });

      // Add active class to clicked button
      this.classList.add('active', 'btn-gold');
      this.classList.remove('btn-outline-secondary');

      const filterValue = this.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  // 2. Simple Form Submission Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you! Your message has been sent successfully.');
      contactForm.reset();
    });
  }

});