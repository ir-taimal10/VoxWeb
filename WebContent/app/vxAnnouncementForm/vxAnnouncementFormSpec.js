describe('Module to test: vxAnnouncementForm', function () {
   var element;
    beforeEach(module('vxAnnouncementFormModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxAnnouncementForm directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-announcement-form></vx-announcement-form>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxAnnouncementForm Controller', function () {
        var _vxAnnouncementFormController;
        beforeEach(function() {
            _vxAnnouncementFormController = element.controller('vxAnnouncementForm');
        });
        it('should be Defined', inject(function () {
            expect(_vxAnnouncementFormController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxAnnouncementForm Service', function () {

    });
});
