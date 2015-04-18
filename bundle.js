(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var map = require('./map');
},{"./map":3}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
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
},{}]},{},[1,2,3]);
