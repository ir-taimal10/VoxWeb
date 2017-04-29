var vxUserFormModule = angular.module('vxUserFormModule');
var VxUserFormController = ['vxUserFormService',
    function (vxUserFormService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.service = vxUserFormService;
        self.register = function (userRegister) {
            vxUserFormService.createUser(userRegister);
        };
    }];

vxUserFormModule.component('vxUserForm', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: VxUserFormController,
    controllerAs: 'ctrl',
    template: require('./vxUserForm.html')
});
