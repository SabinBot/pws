        // When the user scrolls down 80px from the top of the document, 
        // resize the navbar padding and the logo font size

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("headerNav").style.padding = "40px 10px";
            document.getElementById("logo").style.fontSize = "25px";
            document.getElementById("logoSubtitle").style.fontSize = "18px";
          } else {
            document.getElementById("headerNav").style.padding = "60px 10px";
            document.getElementById("logo").style.fontSize = "30px";
            document.getElementById("logoSubtitle").style.fontSize = "20px";
          }
        }