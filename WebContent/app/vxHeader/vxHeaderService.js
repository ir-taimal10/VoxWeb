var  vxHeaderModule = angular.module('vxHeaderModule');
vxHeaderModule.factory('vxHeaderService', [
  function () {
    var VxHeader = function () {

    };
    var vxHeader = new VxHeader();
    return vxHeader;
  }]);
