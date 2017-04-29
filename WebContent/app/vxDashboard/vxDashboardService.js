var vxDashboardModule = angular.module('vxDashboardModule');
vxDashboardModule.factory('vxDashboardService', ['vxRestApiService', 'vxLoginService',
    function (vxRestApiService, vxLoginService) {
        var VxDashboard = function () {
            var self = this;
            self.announcements = [];
            self.itemsPerPage = 6;
            self.offset = 0;
            self.loadMore = function () {
                var self = this;
                self.offset += self.itemsPerPage;
                self.loadAnnouncements();
            };
            self.loadAnnouncements = function () {
                var self = this;
                self.empty = false;
                var userName = vxLoginService.getUserData().userName;
                vxRestApiService.loadAnnouncements(
                    {
                        userId: userName,
                        skip: self.offset,
                        limit: self.itemsPerPage
                    },
                    {},
                    function (response) {
                        //self.announcements = response;
                        self.announcements = self.announcements.concat(response);
                        if (self.announcements.length == 0) {
                            self.empty = true;
                        }
                    }, function (error) {
                        console.log(error);
                    });
            };
            self.appendAnnouncement = function (announcement) {
                var self = this;
                self.announcements.splice(0, 0, announcement);
                self.empty = false;
            };

            self.deleteAnnouncement = function (announcement) {
                for (var i = 0; i < self.announcements.length; i++) {
                    if (self.announcements[i].doc.id === announcement.doc.id) {
                        self.announcements.splice(i, 1);
                        break;
                    }
                }
                self.empty = self.announcements.length == 0;
                vxRestApiService.deleteAnnouncement(
                    {
                        announcementId: announcement.doc.id
                    },
                    {},
                    function (response) {
                    }, function (error) {
                        console.log(error);
                    });
            };
            self.resetDashboard = function () {
                var self = this;
                self.announcements = [];
                self.empty = true;
            };
        };
        var vxDashboard = new VxDashboard();
        return vxDashboard;
    }]);
