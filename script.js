//Mobile Menu
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

  //Blinking Text
  document.addEventListener("DOMContentLoaded", function () {
    function writeText(element, content) {
      let contentArray = content.split(""),
          current = 0;
      
      let interval = setInterval(function () {
        if (current < contentArray.length) {
          element.textContent += contentArray[current++];
        } else {
          clearInterval(interval);
        }
      }, 130);
    }

    const element = document.getElementById("mainpage-holder");
    writeText(element, "FRONT-END + BACK-END DEVELOPER");
  });
  //Scroll Bar
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href*="#"]');
  
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
//Calculate Age Dynamically
       const dob = new Date("2009-05-30");
       const ageDisplay = document.getElementById("age");
     
       const today = new Date();
       let age = today.getFullYear() - dob.getFullYear();
       const m = today.getMonth() - dob.getMonth();
     
       if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
         age--;
       }
     
       ageDisplay.textContent = `${age} years`;
 //intropage
 AOS.init();  
 
 // EmailJS Validator
// Initialize EmailJS
(function() {
    emailjs.init("T5chQZALxrNORtvJe"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    emailjs.send("service_w1ut6lj", "template_52r9ulk", {
        user_name: name,
        user_email: email,
        user_phone: phone,
        message: message
    })
    .then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); // Reset form after submission
    }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
    });
});
