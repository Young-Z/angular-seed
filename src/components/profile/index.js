module.exports = function(appModule, angular, _){
  appModule.controller("ProfileController", [function() {
    var self = this;
    self.greeting = "Hello Profile2";
  }])
};