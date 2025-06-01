document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateLinkOnScroll() {
    let scrollPos = window.scrollY + window.innerHeight / 3; // Trigger a bit before the section top

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      const id = section.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach((link) => link.classList.remove("active-link"));
        navLink.classList.add("active-link");
      }
    });
  }

  window.addEventListener("scroll", activateLinkOnScroll);
  activateLinkOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("#about, #projects, #contact");

  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.remove("opacity-0", "translate-y-6");
    }, 200 * index);
  });

  document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("opacity-0", "translate-y-6");
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            targetSection.classList.remove("opacity-0", "translate-y-6");
          }, 300);
        }, 50);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-5");
        entry.target.classList.add("opacity-100", "translate-y-0");
      } else {
        entry.target.classList.remove("opacity-100", "translate-y-0");
        entry.target.classList.add("opacity-0", "translate-y-5");
      }
    });
  });
  const boxes = document.querySelectorAll('.box');

  boxes.forEach((box, index) => {
    box.addEventListener('mouseenter', () => {
      box.classList.add('hovered');

      if (boxes[index - 1]) {
        boxes[index - 1].classList.add('left-neighbor');
      }
      if (boxes[index + 1]) {
        boxes[index + 1].classList.add('right-neighbor');
      }
    });

    box.addEventListener('mouseleave', () => {
      box.classList.remove('hovered');

      if (boxes[index - 1]) {
        boxes[index - 1].classList.remove('left-neighbor');
      }
      if (boxes[index + 1]) {
        boxes[index + 1].classList.remove('right-neighbor');
      }
    });
  });
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    el.classList.add("transition-all", "duration-700");
    observer.observe(el);
  });
})
  function showWarning(message) {
    let warningDiv = document.getElementById('antiInspectWarning');
    if (!warningDiv) {
      warningDiv = document.createElement('div');
      warningDiv.id = 'antiInspectWarning';
      warningDiv.style.position = 'fixed';
      warningDiv.style.top = '20px';
      warningDiv.style.left = '50%';
      warningDiv.style.transform = 'translateX(-50%)';
      warningDiv.style.backgroundColor = 'darkred';
      warningDiv.style.color = 'white';
      warningDiv.style.padding = '10px 20px';
      warningDiv.style.borderRadius = '8px';
      warningDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
      warningDiv.style.zIndex = '9999';
      warningDiv.style.fontFamily = 'monospace';
      warningDiv.style.fontSize = '0.9rem';
      document.body.appendChild(warningDiv);
    }
    warningDiv.textContent = message;
    warningDiv.style.display = 'block';

    setTimeout(() => {
      warningDiv.style.display = 'none';
    }, 3000);
  }

  document.addEventListener('contextmenu', e => {
    e.preventDefault();
    showWarning('WARAY KARAG VIEW CODE HEHE.');
  });

  ['keydown', 'keypress', 'keyup'].forEach(evt =>
    document.addEventListener(evt, e => {
      if ((e.ctrlKey && e.key.toLowerCase() === 'u') || 
          (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') || 
          (e.key === 'F12')) {
        e.preventDefault();
        showWarning('WARAY KARAG VIEW CODE HEHE.');
      }
    })
  );
  