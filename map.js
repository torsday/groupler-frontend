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

    return this;
  },

  addUserAsMarker: function(user) {
    if (!user.lng || !user.lat) { return; }

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
          this.addUserAsMarker(user);
        }, this);
      });
  }
};

module.exports = function(options) {
  return mapController.initialize(options);
};