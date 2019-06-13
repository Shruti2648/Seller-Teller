// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".add-sale-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newSale = {
      storeName: $("#store-name")
        .val()
        .trim(),
      storeCategory: $("#store-category")
        .val()
        .trim(),
      sale: $("#sale")
        .val()
        .trim(),
      storeCity: $("#store-city")
        .val()
        .trim(),
      storeState: $("#store-state")
        .val()
        .trim(),
      startDate: $("#start-date")
        .val()
        .trim(),
      stopDate: $("#stop-date")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/posts", {
      type: "POST",
      data: newSale
    }).then(function() {
      console.log("Created new sale");
      window.location.href = "./browse.html";
    });
  });
});
