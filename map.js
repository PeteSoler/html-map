var map;
var locationButton;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 0, lng: 0 },
    zoom: 8,
  });

  // Permisos cuando carga la página
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(userLocation);
      map.setZoom(15);
    }, function () { //Si se deniegan los permisos se genera el botón
        locationButton = document.createElement('button');
        locationButton.textContent = 'OBTENER MI UBICACION';
        locationButton.classList.add('mapButton');
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

        locationButton.addEventListener('click', function () {
            // Pregunta permisos
            if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
                };
                map.setCenter(userLocation);
                map.setZoom(15);
                locationButton.style.display = 'none';
            });
            } else {
            alert('Geolocation is not supported in your browser.');
            }
        });
    });
  }
}
