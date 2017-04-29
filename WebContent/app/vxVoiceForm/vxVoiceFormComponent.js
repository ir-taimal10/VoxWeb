var vxVoiceFormModule = angular.module('vxVoiceFormModule');
var VxVoiceFormController = ['vxRestApiService', 'vxAnnouncementHomeService',
    function (vxRestApiService, vxAnnouncementHomeService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.parameters = {};
        self.voiceSended = false;
        self.attachFile = function (files) {
            var self = this;
            if (files && files.length > 0) {
                self.file = files[0];
            }
        };

        self.createVoice = function () {
            var self = this;
            var voice = angular.copy(self.parameters);
            voice.audio = self.file;
            voice.active = false;
            vxAnnouncementHomeService.appendVoice({doc: voice});
            self.voiceSended = true;
            vxRestApiService.createVoice(
                {
                    announcementId: self.announcementId
                },
                voice,
                function (response) {
                    self.parameters = {};
                    self.file = undefined;
                }, function (error) {
                    console.log(error);
                });
        };
        self.reset = function () {
            var self = this;
            self.voiceSended = false;
        };
    }];

vxVoiceFormModule.component('vxVoiceForm', {
    transclude: true,
    bindings: {
        announcementId: '='
    },
    controller: VxVoiceFormController,
    controllerAs: 'ctrl',
    template: require('./vxVoiceForm.html')
});
