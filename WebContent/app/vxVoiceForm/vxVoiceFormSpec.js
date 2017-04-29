describe('Module to test: vxVoiceForm', function () {
   var element;
    beforeEach(module('vxVoiceFormModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxVoiceForm directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-voice-form></vx-voice-form>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxVoiceForm Controller', function () {
        var _vxVoiceFormController;
        beforeEach(function() {
            _vxVoiceFormController = element.controller('vxVoiceForm');
        });
        it('should be Defined', inject(function () {
            expect(_vxVoiceFormController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxVoiceForm Service', function () {

    });
});
