var  vxPublicityModule = angular.module('vxPublicityModule');
vxPublicityModule.factory('vxPublicityService', [
  function () {
    var VxPublicity = function () {

    };
    var vxPublicity = new VxPublicity();
    return vxPublicity;
  }]);
