var vxAnnouncementFormModule = angular.module('vxAnnouncementFormModule');
var VxAnnouncementFormController = ['vxAnnouncementFormService',
    function (vxAnnouncementFormService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.service = vxAnnouncementFormService;
        self.currentStep = 0;
        self.closeDialog = function () {
            vxAnnouncementFormService.closeDialog();
        };
        self.create = function () {
            vxAnnouncementFormService.createAnnouncement();
            vxAnnouncementFormService.closeDialog();
        };
        self.update = function () {
            vxAnnouncementFormService.updateAnnouncement();
            vxAnnouncementFormService.closeDialog();
        };

        self.continue = function () {
            var self = this;
            if (!self.isLastStep()) {
                self.currentStep += 1;
            }
        };
        self.back = function () {
            var self = this;
            if (!self.isFirstStep()) {
                self.currentStep -= 1;
            }
        };
        self.isLastStep = function () {
            var self = this;
            return self.currentStep == 1;
        };

        self.isFirstStep = function () {
            var self = this;
            return self.currentStep == 0;
        };


    }];

vxAnnouncementFormModule.component('vxAnnouncementForm', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: VxAnnouncementFormController,
    controllerAs: 'ctrl',
    template: require('./vxAnnouncementForm.html')
});
