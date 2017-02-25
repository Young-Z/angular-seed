module.exports = function(appModule, angular, _){
  appModule.controller("HomeController", [function() {
    var self = this;
    self.greeting = "Hello Home";
    self.sum = function(x,y){
      return x+y;
    };
  }])
};