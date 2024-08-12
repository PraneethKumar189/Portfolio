// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

// Animate #about section
gsap.from("#about .container", {
  scrollTrigger: "#about",
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

// Animate #skills section
gsap.from("#skills .container1 .cont1 .sk", {
  scrollTrigger: "#skills",
  opacity: 0,
  y: 50,
  stagger: 0.1,
  duration: 1,
  ease: "power2.out"
});

// Animate #project section
gsap.from("#project .portfolio-items .portfolio-item1", {
  scrollTrigger: "#project",
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out"
});





document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById('name');
  const originalText = element.innerText;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const scrambleDuration = 2000; // duration in ms
  const interval = 50; // interval in ms

  function scrambleText() {
    let elapsed = 0;
    const scrambleInterval = setInterval(() => {
      elapsed += interval;
      if (elapsed < scrambleDuration) {
        element.innerText = originalText.split('').map(char => {
          if (Math.random() > 0.5) {
            return characters.charAt(Math.floor(Math.random() * characters.length));
          }
          return char;
        }).join('');
      } else {
        clearInterval(scrambleInterval);
        element.innerText = originalText;
      }
    }, interval);
  }

  scrambleText();
});