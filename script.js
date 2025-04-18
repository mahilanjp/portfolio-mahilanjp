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
      }, 100);
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
   // Calculate Age Dynamically
      //  function calculateAge(dob) {
        //    const birthDate = new Date(dob);
          //  const today = new Date();
            //let age = today.getFullYear() - birthDate.getFullYear();
            //const monthDifference = today.getMonth() - birthDate.getMonth();

       //     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
         //       age--;
           // }

           // return age;
       // }

       // document.getElementById('age').textContent = calculateAge('2009-05-30');
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
