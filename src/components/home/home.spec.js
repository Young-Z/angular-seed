beforeEach(angular.mock.module('app'));

var $controller;

beforeEach(inject(function(_$controller_){
  $controller = _$controller_;
}));

describe('sum', function () {
  it('1 + 1 should equal 3', function () {
    var $scope = {};
    var homeCtrl = $controller('HomeController', { $scope: $scope });

    expect(homeCtrl.sum(1, 1)).toBe(2);
  });
});