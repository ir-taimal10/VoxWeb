var vxAnnouncementFormModule = angular.module('vxAnnouncementFormModule');
vxAnnouncementFormModule.factory('vxAnnouncementFormService', ['$uibModal', 'vxRestApiService', 'vxLoginService', 'vxDashboardService',
    function ($uibModal, vxRestApiService, vxLoginService, vxDashboardService) {
        var VxAnnouncementForm = function () {
            var self = this;
            var _self = {};

            self.initParameters = function () {
                var self = this;
                var today = new Date();
                self.action = "create";
                self.parameters = {};
                self.parameters.minDate = new Date();
                self.parameters.maxDate = new Date(today.setMonth(today.getMonth() + 1));
                self.autoUrl = "VX" + self.getGuid();
            };

            self.createAnnouncement = function () {
                var self = this;
                var userName = vxLoginService.getUserData().userName;
                self.parameters.publicUrl = self.parameters.publicUrl || self.autoUrl;
                self.parameters.owner = userName;
                vxRestApiService.createAnnouncement(
                    {
                        userId: userName
                    },
                    self.parameters,
                    function (response) {
                        var newAnnouncement = {doc: response};
                        vxDashboardService.appendAnnouncement(newAnnouncement);
                    }, function (error) {
                        console.log(error);
                    });
            };

            self.updateAnnouncement = function (announcement) {
                var self = this;
                vxRestApiService.updateAnnouncement(
                    {
                        announcementId: self.parameters.id
                    },
                    self.parameters,
                    function (response) {
                    }, function (error) {
                        console.log(error);
                    });
            };

            self.editAnnouncement = function (announcement) {
                var self = this;
                self.action = "update";
                self.parameters = announcement;
                self.parameters.minDate = new Date(self.parameters.minDate);
                self.parameters.maxDate = new Date(self.parameters.maxDate);
                self.showModal();
            };

            self.showModal = function () {
                _self.modalInstance = $uibModal.open({
                    template: '<vx-announcement-form> </vx-announcement-form>',
                    windowClass: 'vx-modal-container'
                });
            };

            self.closeDialog = function () {
                if (_self.modalInstance) {
                    _self.modalInstance.close();
                }
            };

            self.attachFile = function (files) {
                var self = this;
                var reader = new FileReader();
                if (files && files.length > 0) {
                    reader.readAsDataURL(files[0]);
                    reader.onload = function () {
                        //Obtain Base64 file
                        self.parameters.image = reader.result;
                    };
                    reader.onerror = function (error) {
                        console.log('Error: ', error);
                    };
                }
            };
            self.getGuid = function () {
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }

                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            };
        };
        var vxAnnouncementForm = new VxAnnouncementForm();
        return vxAnnouncementForm;
    }]);
