function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }
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
    writeText(element, "WEB DESIGNER + FRONT-END DEVELOPER");
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
