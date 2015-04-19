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
      data: { email: 'testing5@example.com', address: '11926 Franklin St., Oakland, CA' },
      responseText: {
        email: 'testing5@example.com',
        address: '1926 Franklin St., Oakland, CA',
        lat: 37.808172,
        lng: -122.268068,
        category: 4,
        price_paid: 20000
      }
    });
  }
};

module.exports = mocks.initialize();