var  vxPublicityModule = angular.module('vxPublicityModule');
var VxPublicityController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };
}];

vxPublicityModule.component('vxPublicity', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: VxPublicityController,
    controllerAs: 'ctrl',
    template: require('./vxPublicity.html')
});
