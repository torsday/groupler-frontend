var mocks = {
  initialize: function(apiBaseUrl) {
    apiBaseUrl = apiBaseUrl || 'http://example.com';
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
            price_paid: 1500
          },
          {
            email: 'testing@example.com',
            address: '1726 Franklin St., Oakland, CA',
            lat: 37.806871,
            lng: -122.268888,
            category: 4,
            price_paid: 2000
          }
        ]
      }
    });
  }
};

module.exports = mocks.initialize();