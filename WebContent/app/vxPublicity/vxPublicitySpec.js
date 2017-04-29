describe('Module to test: vxPublicity', function () {
   var element;
    beforeEach(module('vxPublicityModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxPublicity directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-publicity></vx-publicity>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxPublicity Controller', function () {
        var _vxPublicityController;
        beforeEach(function() {
            _vxPublicityController = element.controller('vxPublicity');
        });
        it('should be Defined', inject(function () {
            expect(_vxPublicityController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxPublicity Service', function () {

    });
});
