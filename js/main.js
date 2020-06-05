$(document).ready(function (e) {
  $("a").click(function (e) {
    e.preventDefault();
  });

  $(".inputField-trial-button").mousedown(function (e) {
    $(e.currentTarget).addClass("pressed");
  });

  $(".inputField-trial-button").mouseup(function (e) {
    $(e.currentTarget).removeClass("pressed");
  });

  $("button").mousedown(function (e) {
    $(e.currentTarget).addClass("pressed");
  });

  $("button").mouseup(function (e) {
    $(e.currentTarget).removeClass("pressed");
  });

  $("button").click(function (e) {
    validateForm();
  });

  function validateForm() {
    var emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var firstName = $("#firstName").val();

    var lastName = $("#lastName").val();

    var password = $("#password").val();

    var email = $("#email").val();

    if (firstName === "") {
      $("#firstName").siblings("img").addClass("active");
    } else {
      $("#firstName").siblings("img").removeClass("active");
    }

    if (lastName === "") {
      $("#lastName").siblings("img").addClass("active");
    } else {
      $("#lastName").siblings("img").removeClass("active");
    }

    if (password === "") {
      $("#password").siblings("img").addClass("active");
    } else {
      $("#password").siblings("img").removeClass("active");
    }

    if (!emailReg.test(email)) {
      $("#email").siblings("img").addClass("active");
    } else {
      $("#email").siblings("img").removeClass("active");
    }
  }
});
