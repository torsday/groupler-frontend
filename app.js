require('./mocks');

var mapOptions = {
  latLng: [37.806241, -122.269279]
};
require('./map')(mapOptions);

$('.modal').modal('show');