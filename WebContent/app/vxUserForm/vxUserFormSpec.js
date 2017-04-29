describe('Module to test: vxUserForm', function () {
   var element;
    beforeEach(module('vxUserFormModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxUserForm directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-user-form></vx-user-form>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxUserForm Controller', function () {
        var _vxUserFormController;
        beforeEach(function() {
            _vxUserFormController = element.controller('vxUserForm');
        });
        it('should be Defined', inject(function () {
            expect(_vxUserFormController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxUserForm Service', function () {

    });
});
