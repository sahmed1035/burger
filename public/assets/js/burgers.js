// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/burgers/update/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });



 
    // $(".change-devoured").on("click", function(event) {
    //   var id = $(this).data("id");

    //   alert(id);
    //   console.log(id, "this is id");
    //   var newDevoured = $(this).data("newdevoured");
    //   console.log(newDevoured, "this is newDevoured")
  
    //   var newDevouredState = {
    //     devoured: newDevoured
    //   };
  
      // // Send the PUT request.
      // $.ajax("/burgers/update/" + id, {
      //   type: "PUT",
      //   data: newDevouredState
      // }).then(
      //   function() {
      //     console.log("changed devoured to", newDevoured);
      //     // Reload the page to get the updated list
      //     location.reload();
      //   }
      // );


    // });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bu").val().trim(),
        devoured: $("[name=devoured]:false").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/burgers/create", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".delete-burger").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted burger", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    });
 
  