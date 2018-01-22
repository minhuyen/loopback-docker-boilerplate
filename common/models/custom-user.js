'use strict';
var passport = require('passport');
var FacebookTokenStratery = require('passport-facebook-token');

module.exports = function(CustomUser) {
  CustomUser.greet = function(msg, cb) {
    cb(null, 'Greetings... ' + msg);
  };

  CustomUser.loginFacebook = function(accessToken, cb) {
    var Facebook = CustomUser.app.datasources.Facebook;
    Facebook.loginWithFacebook(accessToken, function(err, result) {
      cb(err, result);
    });
  };

  CustomUser.remoteMethod('greet', {
    accepts: {arg: 'msg', type: 'string'},
    returns: {arg: 'greeting', type: 'string'},
  });

  CustomUser.remoteMethod('loginFacebook', {
    accepts: {arg: 'accessToken', type: 'string'},
    returns: {arg: 'data', type: 'object', root: true},
  });
};
