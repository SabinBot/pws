(function ($) {
  "use strict";

  // Form Contact

  var contactForm = function () {
    if ($("#contactForm").length > 0) {
      $("#contactForm").validate({
        rules: {
          email: "required",
          email: {
            required: true,
            email: true,
          },
          message: {
            required: true,
            minlength: 5,
          },
        },
        messages: {
          email: "Please enter a valid email address",
          message: "Please enter a message",
        },

        /* submit via ajax */
        submitHandler: function (form) {
          var $submit = $(".submitting"),
            waitText = "Submitting...";

          $submit.css("display", "block").text(waitText);
          $('input[type="submit"]').prop("disabled", true); // dezactiveaza butonul

          $.ajax({
            type: "POST",
            url: "php/sendEmail.php",
            data: $(form).serialize(),

            success: function (msg) {
              if (msg == "OK") {
                $("#form-message-warning").hide();
                setTimeout(function () {
                  $("#contactForm").fadeIn();
                }, 1000);
                setTimeout(function () {
                  $("#form-message-success").fadeIn();
                }, 1400);

                setTimeout(function () {
                  $("#form-message-success").fadeOut();
                }, 8000);
                setTimeout(function () {
                  $('input[type="submit"]').prop("disabled", false); // activeaza butonul
                  $submit.css("display", "none").text(waitText);
                }, 1400);

                setTimeout(function () {
                  $("#contactForm").each(function () {
                    this.reset();
                  });
                }, 1400);
              } else {
                $("#form-message-warning").html(msg);
                $("#form-message-warning").fadeIn();
                $('input[type="submit"]').prop("disabled", false);
                $submit.css("display", "none");
              }
            },
            error: function () {
              $("#form-message-warning").html(
                "Something went wrong. Please try again."
              );
              $("#form-message-warning").fadeIn();
              $('input[type="submit"]').prop("disabled", false);
              $submit.css("display", "none");
            },
          });
        }, // end submitHandler
      });
    }
  };
  contactForm();
})(jQuery);
