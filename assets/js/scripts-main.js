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

      function openNav() {
        document.getElementById("mySidenavuser").style.width = "300px";
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("shadowblur").className += " responsive";
      }
      
      function closeNav() {
        document.getElementById("mySidenavuser").style.width = "0";
        // document.body.style.backgroundColor = "white";
        document.getElementById("shadowblur").className = "shadowblur";
      }


      // bootstrap tour

      // Instance the tour
var tour1 = new Tour({
  steps: [
    {
        element: "#e1",
        // container: "body",
        // title: "Title of my step",
        content: "Data kamu belum lengkap, nih. Kamu <span class='font-weight-bold'>wajib</span> melengkapi data untuk dapat mengikuti seluruh rangkaian training di 5G Digital Talent",
        template: "<div class='popover tour container-main text-center py-5'> <h3 class='popover-title'></h3> <div class='text-center my-3'><img src='assets/img/icon-peringatan.svg' width='50px'></div>  <div class='popover-content'></div>   <div class='popover-navigation'>     <button class='btn btn-default' data-role='next'>Kembali</button>       <button class='btn btn-dark' data-role='next'>Lengkapi Sekarang</button>   </div> </div>",
    placement: "auto",
  // backdropPadding: -24,
        smartPlacement: true,
      backdrop:true
    },
  {
    element: "#e2",
    // title: "Title of my step",
    content: "Data kamu belum lengkap, nih. Kamu <span class='font-weight-bold'>wajib</span> melengkapi data untuk dapat mengikuti seluruh rangkaian training di 5G Digital Talent",
    template: "<div class='popover tour'>   <div class='arrow'></div>   <h3 class='popover-title'></h3>   <div class='popover-content'></div>   <div class='popover-navigation'>     <button class='btn btn-default' data-role='prev'>« Prev</button>       <button class='btn btn-default' data-role='next'>Next »</button>     <button class='btn btn-default' data-role='end'>Skip</button>   </div> </div>",
    placement: "bottom",
    smartPlacement: true,
    backdrop:true
  },
  // {
  //   element: "#my-other-element",
  //   title: "Title of my step",
  //   content: "Content of my step"
  // }
]});

