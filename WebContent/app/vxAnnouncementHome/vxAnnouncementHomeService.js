var vxAnnouncementHomeModule = angular.module('vxAnnouncementHomeModule');
vxAnnouncementHomeModule.factory('vxAnnouncementHomeService', ['vxRestApiService',
    function (vxRestApiService) {
        var VxAnnouncementHome = function () {
            var self = this;
            self.voices = [];
            self.announcement = {};
            self.announcementNotFound = false;
            self.itemsPerPage = 4;
            self.offset = 0;
            self.loadMore = function (){
                var self = this;
                self.offset += self.itemsPerPage;
                self.loadVoices(self.announcement.id);
            };
            self.loadAnnouncement = function (announcementPath) {
                var self = this;
                vxRestApiService.loadAnnouncement(
                    {
                        announcementId: announcementPath
                    },
                    {},
                    function (response) {
                        if (response && response.doc) {
                            self.announcementNotFound = false;
                            self.announcement = response.doc;
                            self.loadVoices(self.announcement.id);
                        } else {
                            self.announcementNotFound = true;
                        }

                    }, function (error) {
                        console.log(error);
                    });
            };

            self.loadVoices = function (announcementId) {
                var self = this;
                vxRestApiService.loadVoices(
                    {
                        announcementId: announcementId,
                        skip: self.offset,
                        limit: self.itemsPerPage
                    },
                    {},
                    function (response) {
                        self.voices = self.voices.concat(response);
                        if (self.voices.length == 0) {
                            self.empty = true;
                        }
                    }, function (error) {
                        console.log(error);
                    });
            };
            self.appendVoice = function (voice) {
                var self = this;
                self.voices.splice(0, 0, voice);
                self.empty = false;
            };
        };
        var vxAnnouncementHome = new VxAnnouncementHome();
        return vxAnnouncementHome;
    }]);
