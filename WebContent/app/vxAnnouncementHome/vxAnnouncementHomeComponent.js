var vxAnnouncementHomeModule = angular.module('vxAnnouncementHomeModule');
var VxAnnouncementHomeController = ['$routeParams', 'vxAnnouncementHomeService',
    function ($routeParams, vxAnnouncementHomeService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.service = vxAnnouncementHomeService;
        self.announcementPath = $routeParams.announcementPath;
        console.log(self.announcementPath);
        vxAnnouncementHomeService.loadAnnouncement(self.announcementPath);
        self.loadMore = function () {
            vxAnnouncementHomeService.loadMore();
        };
        //vxAnnouncementHomeService.loadVoices(self.announcementPath);
    }];

vxAnnouncementHomeModule.component('vxAnnouncementHome', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: VxAnnouncementHomeController,
    controllerAs: 'ctrl',
    template: require('./vxAnnouncementHome.html')
});
