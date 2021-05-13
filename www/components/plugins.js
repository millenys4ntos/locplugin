// This is a JavaScript file

function mostraMapa(lat, long){
  L.mapquest.key = 'tGDUfJEaQLBevb0aM22oPgJBDIcSMoIa';

        var map = L.mapquest.map('map', {
          center: [lat, -long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click", "#local", function(){
 var onSuccess = function(position) {
   mostraMapa(position.coords.latitude, position.coords.longitude)
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});