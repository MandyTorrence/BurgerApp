// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#newburger").val().trim(),
      eaten: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Created new burger");
        location.reload();
      });
  });

  $(".eatburger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var eatenState = {
      eaten: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenState
    }).then(function () {
      console.log("Burger eaten");
      location.reload();
    });
  });

  $(".deleteburger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("Deleted burger", id);
        location.reload();
      }
    );
  });
});