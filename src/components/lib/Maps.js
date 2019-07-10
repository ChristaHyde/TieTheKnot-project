var configService = require('./services/config');
// API Features
var venues = require('./api/venuesModule');

module.exports = function(settings){
  var config = configService.getConfig(settings);
  var foursquare = {
    venues: venues(config)
  };
  return foursquare;
};