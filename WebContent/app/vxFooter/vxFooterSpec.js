describe('Module to test: vxFooter', function () {
   var element;
    beforeEach(module('vxFooterModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxFooter directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-footer></vx-footer>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxFooter Controller', function () {
        var _vxFooterController;
        beforeEach(function() {
            _vxFooterController = element.controller('vxFooter');
        });
        it('should be Defined', inject(function () {
            expect(_vxFooterController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxFooter Service', function () {

    });
});
