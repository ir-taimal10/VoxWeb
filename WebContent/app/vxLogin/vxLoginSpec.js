describe('Module to test: vxLogin', function () {
   var element;
    beforeEach(module('vxLoginModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxLogin directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-login></vx-login>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxLogin Controller', function () {
        var _vxLoginController;
        beforeEach(function() {
            _vxLoginController = element.controller('vxLogin');
        });
        it('should be Defined', inject(function () {
            expect(_vxLoginController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxLogin Service', function () {

    });
});
