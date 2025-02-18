// Navbar Fucntion when user in mobile and click on nav-link after navbar automatically close
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
        navbarToggler.click(); // Closes the navbar
      }
    });
  });
});



// Preloader
window.onload = function () {
  setTimeout(() => {
      document.querySelector(".preloader").classList.add("hide");
      document.getElementById("main-content").style.display = "block";
  }, 1000); // Adjust time as needed
};

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Function to update active nav-link based on h2 visibility
  function updateActiveNavLink(entries, observer) {
    entries.forEach(entry => {
      const link = document.querySelector(`.nav-link[href="#${entry.target.closest('section').id}"]`);
      
      // Add active class when h2 inside section is in view
      if (entry.isIntersecting) {
        // Remove the active class from all nav-links first
        navLinks.forEach(link => link.classList.remove("active"));
        
        // Add the active class to the current nav-link
        link.classList.add("active");
      }
    });
  }

  // IntersectionObserver options
  const observerOptions = {
    rootMargin: "0px 0px -50% 0px",  // Trigger when 50% of h2 element is in the viewport
    threshold: 0  // Trigger when 0% of the h2 element is visible
  };

  // Initialize IntersectionObserver for h2 elements inside each section
  const observer = new IntersectionObserver(updateActiveNavLink, observerOptions);

  // Observe each h2 element within the sections
  sections.forEach(section => {
    const h2 = section.querySelector('h2');  // Find h2 element inside each section
    if (h2) {
      observer.observe(h2);  // Observe the h2 element
    }
  });
});
  // Navbar Scroll Effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.querySelector(".navbar").classList.add("scrolled");
    } else {
      document.querySelector(".navbar").classList.remove("scrolled");
    }
  });

  // Initialize Carousel
  const myCarousel = new bootstrap.Carousel("#heroCarousel", {
    interval: 6000,
    wrap: true,
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Scroll Reveal Animation
  ScrollReveal().reveal(
    ".card-service, .portfolio-item, .contact-section",
    {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      interval: 200,
    }
  );

  document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.querySelector('.marquee-content');
    const items = Array.from(marquee.children);
    
    // Clone items with proper spacing
    const cloneSet = items.map(item => {
        const clone = item.cloneNode(true);
        clone.style.marginRight = window.innerWidth < 576 ? '10px' : '15px';
        return clone;
    });
    
    marquee.append(...cloneSet);
    
    // Calculate proper animation duration
    const itemWidth = items[0].offsetWidth + 
        parseInt(getComputedStyle(items[0]).marginRight);
    const totalWidth = itemWidth * items.length;
    const duration = (totalWidth / 100) * 0.5; // Adjust speed multiplier
    
    marquee.style.animationDuration = `${duration}s`;
    
    // Reset animation for smooth start
    marquee.style.animation = 'none';
    setTimeout(() => {
        marquee.style.animation = `marquee ${duration}s linear infinite`;
    }, 50);
});

const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

// Close with Esc key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.add("hidden");
    }
});









(function(){
  emailjs.init("1zx0JaSVwZIqWRndh"); // Replace with your Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
event.preventDefault();
console.log("Form data:", new FormData(this)); // Log form data to check

emailjs.sendForm("service_675iccb", "template_rmdnd6j", this)
.then(function(response) {
document.getElementById("response-message").innerHTML = "<span class='text-success'>Message Sent Successfully!</span>";
}, function(error) {
console.log("Error:", error); // Log the error details
document.getElementById("response-message").innerHTML = "<span class='text-danger'>Failed to Send Message. Try Again.</span>";
});

this.reset(); // Clear form after submission
});










// For smooth scrolling on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});