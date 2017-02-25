module.exports = function(appModule, angular, _){
  appModule.controller("AboutController", [function() {
    var self = this;
    self.greeting = "Hello About";
  }])
};