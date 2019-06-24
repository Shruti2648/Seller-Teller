// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".add-sale-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var startDateVal = $("#start-date")
      .val()
      .trim();
    if (!startDateVal) {
      startDateVal = new Date();
    }

    var stopDateVal = $("#stop-date")
      .val()
      .trim();
    if (!stopDateVal) {
      stopDateVal = new Date();
    }

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
      // startDate: $("#start-date")
      //   .val()
      //   .trim(),
      startDate: startDateVal,
      // stopDate: $("#stop-date")
      //   .val()
      //   .trim()
      stopDate: stopDateVal
    };

    // Send the POST request.
    $.ajax("/api/posts", {
      type: "POST",
      data: newSale
    }).then(function() {
      console.log("Created new sale");
      window.location.href = "browse";
    });
  });
});
