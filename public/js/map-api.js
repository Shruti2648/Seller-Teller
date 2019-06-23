// var ZOOM_LEVEL = 15
// function initialize() {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         var myLatLng = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         };
//         var mapCanvas = document.getElementById('googleMap');
//         var mapOptions = {
//             center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
//             zoom: ZOOM_LEVEL,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
//         var map = new google.maps.Map(mapCanvas, mapOptions);
//         addMarker(myLatLng, map)
//     });
// }
// function addMarker(location, map) {
//     var marker = new google.maps.Marker({
//         position: location,
//         // title: 'Home Center',
//         map: map
//     });
// }
// google.maps.event.addDomListener(window, 'load', initialize);
// $(function() {
//     $("#location-submit").on('click', function(e) {
//         e.preventDefault()
//         var city = $("#city-input").val()
//         var state = $("#state-input").val()
//         var address = [city, state].join(',')
//         $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCZl_LnJPOffG-k1gep2PTCkVyC_kRehRw`, function(data) {
//             var location = data.results[0].geometry.location
//             var mapOptions = {
//                 center: new google.maps.LatLng(location.lat, location.lng),
//                 zoom: ZOOM_LEVEL,
//                 mapTypeId: google.maps.MapTypeId.ROADMAP
//             }
//             var mapCanvas = document.getElementById('googleMap');
//             var map = new google.maps.Map(mapCanvas, mapOptions);
//             addMarker(location, map);
//         })
//     })
// });
