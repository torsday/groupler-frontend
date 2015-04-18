(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./mocks');

var mapOptions = {
  latLng: [37.806241, -122.269279]
};
require('./map')(mapOptions);

$('.modal').modal('show');
$('#btn-submit').on('click', function() {
  var url = 'http://localhost:3000/users';
  var data = {
    user: {
      email: $('#email').val(),
      address: $('#address').val()
    }
  };

  debugger
  $.post(url, data)
    .done(function() {
      $('.modal').modal('hide');
    });
});
},{"./map":3,"./mocks":4}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
var mapController = {
  initialize: function(options) {
    options = options || {};
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2Ftc2Ftc2tpZXMiLCJhIjoiMmVNVm1XRSJ9.UipjupYb5pUYcZxKELWCMg';

    var latLng = options.latLng || [37.78, -122.41];
    var zoom = options.zoom || 17;
    this.map = L.mapbox.map('map', 'samsamskies.lp1kmn3p')
      .addControl(L.mapbox.geocoderControl('mapbox.places', {
        autocomplete: true
      }))
      .setView(latLng, zoom);
    this.addMarkers();

    return this.map;
  },

  addMarkers: function() {
    if (!this.map) {
      throw new Error('Map is not initialized');
    }

    var url = 'http://localhost:3000/users';

    return Promise.resolve( $.get(url) )
      .bind(this)
      .then(function(response) {
        var users = response.users || response;

        users.forEach(function(user) {

          L.mapbox.featureLayer({
            type: 'Feature',
            geometry: {
                type: 'Point',
                // coordinates here are in longitude, latitude order because
                // x, y is the standard for GeoJSON and many formats
                coordinates: [
                  user.lng,
                  user.lat
                ]
            },
            properties: {
                title: user.price_paid ? 'Total cost of ownership $' + user.price_paid : '',
                description: user.address,
                // one can customize markers by adding simplestyle properties
                // https://www.mapbox.com/guides/an-open-platform/#simplestyle
                'marker-size': 'large',
                'marker-color': user.price_paid ? '#7FFF00' : '#229CDC',
            }
          }).addTo(this.map);

        }, this);
      });
  }
};

module.exports = function(options) {
  mapController.initialize(options);
};
},{}],4:[function(require,module,exports){
var mocks = {
  initialize: function(apiBaseUrl) {
    apiBaseUrl = apiBaseUrl || 'http://localhost:3000';
    $.mockjax({
      url: apiBaseUrl + '/users',
      responseText: {
        users: [
          {
            email: 'testing@example.com',
            address: '1624 Franklin St., Oakland, CA',
            lat: 37.806241,
            lng: -122.269279,
            category: 1,
            price_paid: null
          },
          {
            email: 'testing-paid@example.com',
            address: '1825 Franklin St., Oakland, CA',
            lat: 37.807416,
            lng: -122.268542,
            category: 4,
            price_paid: 15000
          },
          {
            email: 'testing@example.com',
            address: '1726 Franklin St., Oakland, CA',
            lat: 37.806871,
            lng: -122.268888,
            category: 4,
            price_paid: 12000
          }
        ]
      }
    });

    $.mockjax({
      url: apiBaseUrl + '/users',
      type: 'post',
      data: { email: 'testing@example.com', address: '1624 Franklin St., Oakland CA' }
    });
  }
};

module.exports = mocks.initialize();
},{}]},{},[1,2,3]);
