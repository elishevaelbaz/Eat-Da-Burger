// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eat-button").on("click", function(event) {
    var id = $(this).data("id");
    // var newEat = $(this).data("newEat");

    var newEatState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed devoured", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // only create a new burger if there is text (not if user clicks submit without filling in the name)
    if ($("#bu").val().trim()){
      var newBurger = {
        name: $("#bu").val().trim(),
        devoured: false
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
  });
  

  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");
  //   console.log("id " + id)

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE"
      
  //   }).then(
  //     function() {
        
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

});
