// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  var ZOOM_LEVEL = 15
function initialize() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var myLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        var mapCanvas = document.getElementById('googleMap');
        var mapOptions = {
            center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
            zoom: ZOOM_LEVEL,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        addMarker(myLatLng, map)
    });
}
function addMarker(location, map) {
    var marker = new google.maps.Marker({
        position: location,
        // title: 'Home Center',
        map: map
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
$(function() {
    $("#location-submit").on('click', function(e) {
        e.preventDefault()
        var city = $("#city-input").val()
        var state = $("#state-input").val()
        var address = [city, state].join(',')
        $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCZl_LnJPOffG-k1gep2PTCkVyC_kRehRw`, function(data) {
            var location = data.results[0].geometry.location
            var mapOptions = {
                center: new google.maps.LatLng(location.lat, location.lng),
                zoom: ZOOM_LEVEL,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var mapCanvas = document.getElementById('googleMap');
            var map = new google.maps.Map(mapCanvas, mapOptions);
            addMarker(location, map);
        })
    })
});

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

    $("#city-input").val("");
    $("#state-input").val("");

    // var saleTable = $("#search-sale-table");
    // Variable to hold our posts
    var posts;

    // This function grabs posts from the database and updates the view
    // function getPosts() {
      $.get("/api/posts" + "/" + stateSearch + "/" + citySearch, function(
        data
      ) {
        posts = data;
        // initializeRows();
      });
    // }

    // getPosts();

    // InitializeRows handles appending all of our constructed post HTML inside saleTable
    // function initializeRows() {
    //   $("#search-sale-table > tbody").empty();
    //   var postsToAdd = [];
    //   for (var i = 0; i < posts.length; i++) {
    //     // postsToAdd.push(createNewRow(posts[i]));
    //     postsToAdd.push(posts[i]);
    //     console.log("posts[i]: " + postsToAdd[0].sale);
    //     // Create the new row
    //     var newRow = $("<tr>").append(
    //       $("<td>").text(postsToAdd[i].sale),
    //       $("<td>").text(postsToAdd[i].storeName),
    //       $("<td>").text(postsToAdd[i].storeCategory),
    //       $("<td>").text(postsToAdd[i].storeCity),
    //       $("<td>").text(postsToAdd[i].storeState),
    //       $("<td>").text(moment(postsToAdd[i].startDate).format("L")),
    //       $("<td>").text(moment(postsToAdd[i].stopDate).format("L"))
    //     );

    //     // // Append the new row to the table
    //     $("#search-sale-table > tbody").append(newRow);
    //   }
    // }
  });
});
