// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".search-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var citySearch = $("#city-input")
      .val()
      .trim();
    console.log("city_search: " + citySearch);
    var stateSearch = $("#state-input")
      .val()
      .trim();
    console.log("state_search: " + stateSearch);

    // var saleTable = $("#search-sale-table");
    // Variable to hold our posts
    var posts;

    // This function grabs posts from the database and updates the view
    function getPosts() {
      $.get("/api/posts" + "/" + stateSearch + "/" + citySearch, function(
        data
      ) {
        posts = data;
        initializeRows();
      });
    }

    getPosts();

    // InitializeRows handles appending all of our constructed post HTML inside saleTable
    function initializeRows() {
      // saleTable.empty();
      var postsToAdd = [];
      for (var i = 0; i < posts.length; i++) {
        // postsToAdd.push(createNewRow(posts[i]));
        postsToAdd.push(posts[i]);
        console.log("posts[i]: " + postsToAdd[0].sale);
        // Create the new row
        var newRow = $("<tr>").append(
          $("<td>").text(postsToAdd[i].sale),
          $("<td>").text(postsToAdd[i].storeName),
          $("<td>").text(postsToAdd[i].storeCategory),
          $("<td>").text(postsToAdd[i].storeCity),
          $("<td>").text(postsToAdd[i].storeState),
          $("<td>").text(moment(postsToAdd[i].startDate).format("L")),
          $("<td>").text(moment(postsToAdd[i].stopDate).format("L"))
        );

        // // Append the new row to the table
        $("#search-sale-table > tbody").append(newRow);
      }
    }
  });
});
