
setTimeout(function() {
    document.getElementById("loader").style.display = "none"; 
}, 3000); 




const toggleButton = document.getElementById('modeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  // Toggle the theme by adding/removing the dark-mode class
  body.classList.toggle('dark-mode');
});


document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    modeToggle.addEventListener("click", function () {
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
        }
    });
});





        // Smooth scroll functionality
        document.querySelectorAll('.center a, .hire-me').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });




        const menuToggle = document.getElementById('menuToggle');
        const menu = document.getElementById('menu');
        const navbar = document.getElementById('navbar');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shrink');
            } else {
                navbar.classList.remove('shrink');
            }
        });






        // Add this JavaScript code (index.js)

window.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navbar a");

    let currentSection = "";
    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the item is visible
    );

    serviceItems.forEach((item) => {
        observer.observe(item);
    });
});











function filterCards(category) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('show');
        if (category === 'All' || card.querySelector('img').alt.includes(category)) {
            setTimeout(() => {
                card.classList.add('show');
            }, 200);
        }
    });
}
function filterCards(category) {
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
card.classList.remove('show');
if (category === 'All' || card.querySelector('img').alt.includes(category)) {
    setTimeout(() => {
        card.classList.add('show');
    }, 200);
}
});
}
document.addEventListener('DOMContentLoaded', () => {
const cards = document.querySelectorAll('.card');

// Function to trigger animation when the card is in view
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        // Add the 'show' class to trigger the animation
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Stop observing after the card is shown
    }
});
}, { threshold: 0.5 }); // Trigger when 50% of the card is in the viewport

// Start observing each card
cards.forEach(card => {
observer.observe(card);
});
});








 // Intersection Observer to trigger the animation when the section is in view
 const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Add the in-view class to start animation
            observer.unobserve(entry.target); // Stop observing once animation has started
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the card is visible
});

// Observe each card
document.querySelectorAll('.cd-card').forEach(card => {
    observer.observe(card);
});




const skillCards = document.querySelectorAll('.skill-card');
function checkVisibility() {
    skillCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            card.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);




document.addEventListener("DOMContentLoaded", () => {
    const testimonials = [
        "GILROY IS A GREAT AND SUPER-PROFESSIONAL SERVICE PROVIDER, WHICH BROUGHT NEW TECHNOLOGIES, NEW METHODOLOGY, AND A FRESH PERSPECTIVE TO OUR PROJECT",
        "AMAZING SERVICE! THE TEAM DELIVERED BEYOND EXPECTATIONS AND PROVIDED A SEAMLESS EXPERIENCE.",
        "HIGHLY RECOMMENDED! THEY TRANSFORMED OUR VISION INTO REALITY WITH EXCELLENT EXECUTION."
    ];
    
    let index = 0;
    const testimonialBox = document.querySelector(".testimonial-box p");
    const arrows = document.querySelectorAll(".arrow");

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            index = (index + 1) % testimonials.length;
            testimonialBox.innerHTML = `<strong>${testimonials[index]}</strong>`;
        });
    });

    // Scroll Animation
    const container = document.querySelector(".tr-container");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                container.classList.add("show");
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(container);
});








document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".number");
    const speed = 200; // Speed of counting

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute("data-target");
                let count = 0;
                const increment = target / speed;

                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        entry.target.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        entry.target.textContent = target;
                    }
                };

                updateCount();
                observer.unobserve(entry.target); // Stops counting after it's done
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
});




document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".co-container");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("show");
            }
        });
    }, { threshold: 0.3 });
    observer.observe(section);
});





 // Get the button element
 const scrollUpBtn = document.getElementById('scrollUpBtn');

 // Show or hide the button based on scroll position
 window.onscroll = function() {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
     scrollUpBtn.classList.add('show');
   } else {
     scrollUpBtn.classList.remove('show');
   }
 };

 // Scroll to the top when the button is clicked
 scrollUpBtn.onclick = function() {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 };



 document.addEventListener("DOMContentLoaded", function() {
    const section = document.querySelector(".news-section");
    const cards = document.querySelectorAll(".news-card");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("visible");
                cards.forEach((card, index) => {
                    setTimeout(() => card.classList.add("visible"), index * 300);
                });
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(section);
});




document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("footer").classList.add("show");
});
