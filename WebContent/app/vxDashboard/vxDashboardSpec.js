describe('Module to test: vxDashboard', function () {
   var element;
    beforeEach(module('vxDashboardModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxDashboard directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-dashboard></vx-dashboard>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxDashboard Controller', function () {
        var _vxDashboardController;
        beforeEach(function() {
            _vxDashboardController = element.controller('vxDashboard');
        });
        it('should be Defined', inject(function () {
            expect(_vxDashboardController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxDashboard Service', function () {

    });
});
