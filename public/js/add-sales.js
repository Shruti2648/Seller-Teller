$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var saleInput = $("#discount");
  var storeInput = $("#store");
  var storeCategoryInput = $("#store-category");
  var cityInput = $("#store-city");
  var stateInput = $("#store-state");
  var startDate = $("#startDate");
  var endDate = $("#endDate");
  var cmsForm = $("#cms");
  var userSelect = $("#author");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var postId;
  var userId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

   // If we have this section in our url, we pull out the post id from the url
  // In '?post_id=1', postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId, "post");
  }
  // Otherwise if we have an author_id in our url, preset the author select box to be our Author
  else if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
  }

   // Getting the authors, and their posts
  getUsers();

   // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (!saleInput.val().trim() || !storeInput.val().trim() || !storeCategoryInput.val().trim() || !cityInput.val().trim() || !stateInput.val().trim() || !userSelect.val()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      sale: saleInput.val().trim(),
      store: storeInput.val().trim(),
      category: storeCategoryInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val().trim(),
      start: startDate.val().trim(),
      end: endDate.val().trim(),
      userId: userSelect.val()
    };

     // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    }
    else {
      submitPost(newPost);
    }
  }

   // Submits a new post and brings user to blog page upon completion
  function submitPost(post) {
    $.post("/api/posts", post, function() {
      window.location.href = "/browse";
    });
  }

   // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
  function getPostData(id, type) {
    var queryUrl;
    switch (type) {
    case "post":
      queryUrl = "/api/posts/" + id;
      break;
    case "author":
      queryUrl = "/api/users/" + id;
      break;
    default:
      return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.userId || data.id);
        // If this post exists, prefill our cms forms with its data
        saleInput.val(data.sale);
        storeInput.val(data.store);
        storeCategoryInput.val(data.category);
        cityInput.val(data.city);
        startDate.val(data.start);
        endDate.val(data.end);
        userId = data.userId || data.id;
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

   // A function to get Authors and then render our list of Authors
  function getUsers() {
    $.get("/api/Users", renderUserList);
  }
  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first
  function renderUserList(data) {
    if (!data.length) {
      window.location.href = "/users";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createUserRow(data[i]));
    }
    userSelect.empty();
    console.log(rowsToAdd);
    console.log(userSelect);
    userSelect.append(rowsToAdd);
    userSelect.val(userId);
  }

   // Creates the author options in the dropdown
  function createUserRow(user) {
    var listOption = $("<option>");
    listOption.attr("value", user.id);
    listOption.text(user.name);
    return listOption;
  }

   // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    }).then(function() {
      window.location.href = "/browse";
    });
  }
});