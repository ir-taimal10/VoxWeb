var vxDashboardModule = angular.module('vxDashboardModule');
var VxDashboardController = ['vxAnnouncementFormService', 'vxDashboardService',
    function (vxAnnouncementFormService, vxDashboardService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.service = vxDashboardService;
        self.openRightMenu = function () {
            vxAnnouncementFormService.initParameters();
            vxAnnouncementFormService.showModal();
        };
        self.getHost = function (publicUrl) {
            return encodeURI('http://' + window.location.host + '/#/announcement/' + publicUrl);
        };
        self.deleteAnnouncement = function (announcement) {
            vxDashboardService.deleteAnnouncement(announcement);
        };
        self.editAnnouncement = function (announcement) {
            vxAnnouncementFormService.editAnnouncement(announcement.doc);
        };
        self.loadMore = function(){
            vxDashboardService.loadMore();
        };
        vxDashboardService.resetDashboard();
        vxDashboardService.loadAnnouncements();
    }];

vxDashboardModule.component('vxDashboard', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: VxDashboardController,
    controllerAs: 'ctrl',
    template: require('./vxDashboard.html')
});

