describe('Module to test: vxAnnouncementHome', function () {
   var element;
    beforeEach(module('vxAnnouncementHomeModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxAnnouncementHome directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-announcement-home></vx-announcement-home>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxAnnouncementHome Controller', function () {
        var _vxAnnouncementHomeController;
        beforeEach(function() {
            _vxAnnouncementHomeController = element.controller('vxAnnouncementHome');
        });
        it('should be Defined', inject(function () {
            expect(_vxAnnouncementHomeController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxAnnouncementHome Service', function () {

    });
});
