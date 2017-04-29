var vxHeaderModule = angular.module('vxHeaderModule');
var VxHeaderController = ['vxLoginService',
    function (vxLoginService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.showMenu = false;
        self.getUser = function () {
            return vxLoginService.getUserData().userName;
        };
        self.logout = function () {
            vxLoginService.logout();
        };
        self.toggleMenu = function () {
            self = this;
            self.showMenu = !self.showMenu;
        };
    }];

vxHeaderModule.component('vxHeader', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: VxHeaderController,
    controllerAs: 'ctrl',
    template: require('./vxHeader.html')
});
