var vxVoiceModule = angular.module('vxVoiceModule');
vxVoiceModule.factory('vxVoiceService', ['ngAudio',
    function (ngAudio) {
        var VxVoice = function () {
            var self = this;
            self.playVoice = function (voice) {
                var self = this;
                if (self.audio) {
                    self.audio.pause();
                }
                self.audio = ngAudio.load(voice.convertedUrl);
                self.audio.play();
            };
            self.stopVoice = function (voice) {
                var self = this;
                if (self.audio) {
                    self.audio.pause();
                }
            };
        };
        var vxVoice = new VxVoice();
        return vxVoice;
    }]);
