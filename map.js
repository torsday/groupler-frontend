var map = {
  initialize: function(options) {
    options = options || {};
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2Ftc2Ftc2tpZXMiLCJhIjoiMmVNVm1XRSJ9.UipjupYb5pUYcZxKELWCMg';

    var latLng = options.latLng || [37.78, -122.41];
    var zoom = options.zoom || 15;
    return L.mapbox.map('map', 'samsamskies.lp1kmn3p')
      .setView(latLng, zoom);
  }
};

module.exports = map.initialize();