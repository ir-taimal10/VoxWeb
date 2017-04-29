describe('Module to test: vxHome', function () {
   var element;
    beforeEach(module('vxHomeModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxHome directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-home></vx-home>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxHome Controller', function () {
        var _vxHomeController;
        beforeEach(function() {
            _vxHomeController = element.controller('vxHome');
        });
        it('should be Defined', inject(function () {
            expect(_vxHomeController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxHome Service', function () {

    });
});
