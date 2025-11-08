const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

menuToggle.addEventListener("click", function () {
  mobileNav.classList.toggle("show");

  if (mobileNav.classList.contains("show")) {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});

// Close mobile menu when clicking on links
const mobileNavLinks = document.querySelectorAll(".mobile-nav-content a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileNav.classList.remove("show");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Header background change on scroll
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.backgroundColor = "#fff";
    header.style.backdropFilter = "none";
  }
});

// Contact form handling
const contactForm = document.querySelector(".contact-form form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const nama = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const kemitraan = this.querySelector("select").value;
  const pesan = this.querySelector("textarea").value;

  // Simple validation
  if (!nama || !email || !kemitraan || !pesan) {
    alert("Mohon isi semua field yang diperlukan.");
    return;
  }

  // Simulate form submission
  alert(`Terima kasih ${nama}! Pesan Anda telah dikirim. Tim kami akan menghubungi Anda segera.`);

  // Reset form
  this.reset();
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Add animation styles and observe elements
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".service-card, .feature-card, .team-member, .value-card");

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Navbar active link highlighting
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 150;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      // Remove active class from all links
      document.querySelectorAll(".desktop-nav a, .mobile-nav-content a").forEach((link) => {
        link.classList.remove("active");
      });

      // Add active class to current section links
      document.querySelectorAll(`a[href="#${sectionId}"]`).forEach((link) => {
        link.classList.add("active");
      });
    }
  });
});

// Add CSS for active nav links
const style = document.createElement("style");
style.textContent = `
    .desktop-nav a.active,
    .mobile-nav-content a.active {
        color: #16a34a !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);
