var  vxTeamModule = angular.module('vxTeamModule');
var VxTeamController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };
}];

vxTeamModule.component('vxTeam', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: VxTeamController,
    controllerAs: 'ctrl',
    template: require('./vxTeam.html')
});
