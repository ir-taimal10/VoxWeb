var vxVoiceModule = angular.module('vxVoiceModule');
var VxVoiceController = ['vxVoiceService',
    function (vxVoiceService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.isOpen = false;
        self.playing = false;
        self.playVoice = function () {
            var self = this;
            self.playing = true;
            vxVoiceService.playVoice(self.voice.doc);
        };
        self.stopVoice = function () {
            var self = this;
            self.playing = false;
            vxVoiceService.stopVoice(self.voice.doc);
        };
    }];

vxVoiceModule.component('vxVoice', {
    transclude: true,
    bindings: {
        voice: '='
    },
    controller: VxVoiceController,
    controllerAs: 'ctrl',
    template: require('./vxVoice.html')
});
