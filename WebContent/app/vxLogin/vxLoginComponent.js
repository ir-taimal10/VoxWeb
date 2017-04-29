var vxLoginModule = angular.module('vxLoginModule');
var VxLoginController = ['vxLoginService',
    function (vxLoginService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.service = vxLoginService;
        self.login = function (credentials) {
           vxLoginService.login(credentials);
        };
    }];

vxLoginModule.component('vxLogin', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: VxLoginController,
    controllerAs: 'ctrl',
    template: require('./vxLogin.html')
});
