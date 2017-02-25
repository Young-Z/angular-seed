var angular = require('angular');

var _ = require('lodash');
var appModule = angular.module("app", []);

var homeComponent = require('./components/home')(appModule, angular, _);
var aboutComponent = require('./components/about')(appModule, angular, _);
var profileComponent = require('./components/profile')(appModule, angular, _);

