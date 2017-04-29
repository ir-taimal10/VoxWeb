var  vxFooterModule = angular.module('vxFooterModule');
var VxFooterController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };
}];

vxFooterModule.component('vxFooter', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: VxFooterController,
    controllerAs: 'ctrl',
    template: require('./vxFooter.html')
});
