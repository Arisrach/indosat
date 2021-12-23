 function myFunction() {
        var x = document.getElementById("myTopnav");
        var y = document.getElementById("shadowblur");
        var z = document.getElementById("navigasi");
        var navicon = document.getElementById("navicon");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
        if (y.className === "shadowblur") {
          y.className += " responsive";
        } else {
          y.className = "shadowblur";
        }
        if (z.className === "navigasi") {
          z.className += " responsive";
        } else {
          z.className = "navigasi";
        }
        if (navicon.className === "menu-toggle") {
          navicon.className += " responsive";
        } else {
          navicon.className = "menu-toggle";
        }
      }

      var coll = document.getElementsByClassName("collapsible");
      var i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
          this.classList.toggle("activecoll");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }