describe('Module to test: vxHeader', function () {
   var element;
    beforeEach(module('vxHeaderModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxHeader directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-header></vx-header>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxHeader Controller', function () {
        var _vxHeaderController;
        beforeEach(function() {
            _vxHeaderController = element.controller('vxHeader');
        });
        it('should be Defined', inject(function () {
            expect(_vxHeaderController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxHeader Service', function () {

    });
});
