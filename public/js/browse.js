// $(document).ready(function() {
//   // var saleTable = $("#sale-table");
//   // Variable to hold our posts
//   var posts;

//   // This function grabs posts from the database and updates the view
//   // function getPosts() {
$.get("/api/posts", function(data) {
  posts = data;
  console.log(posts);
  // initializeRows();
});
// }

//   // getPosts();

//   // InitializeRows handles appending all of our constructed post HTML inside saleTable
//   function initializeRows() {
//     // saleTable.empty();
//     var postsToAdd = [];
//     for (var i = 0; i < posts.length; i++) {
//       // postsToAdd.push(createNewRow(posts[i]));
//       postsToAdd.push(posts[i]);
//       console.log("posts[i]: " + postsToAdd[i].sale);
//       // Create the new row
//       var newRow = $("<tr>").append(
//         $("<td>").text(postsToAdd[i].sale),
//         $("<td>").text(postsToAdd[i].storeName),
//         $("<td>").text(postsToAdd[i].storeCategory),
//         $("<td>").text(postsToAdd[i].storeCity),
//         $("<td>").text(postsToAdd[i].storeState),
//         $("<td>").text(moment(postsToAdd[i].startDate).format("L")),
//         $("<td>").text(moment(postsToAdd[i].stopDate).format("L"))
//       );

//       // // Append the new row to the table
//       $("#sale-table > tbody").append(newRow);
//     }
//   }
// });
