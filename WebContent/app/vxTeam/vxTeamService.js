var  vxTeamModule = angular.module('vxTeamModule');
vxTeamModule.factory('vxTeamService', [
  function () {
    var VxTeam = function () {

    };
    var vxTeam = new VxTeam();
    return vxTeam;
  }]);
