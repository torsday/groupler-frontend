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

  $.post(url, data)
    .done(function() {
      $('.modal').modal('hide');
    });
});