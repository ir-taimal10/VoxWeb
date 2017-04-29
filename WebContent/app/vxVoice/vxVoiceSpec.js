describe('Module to test: vxVoice', function () {
   var element;
    beforeEach(module('vxVoiceModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxVoice directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-voice></vx-voice>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxVoice Controller', function () {
        var _vxVoiceController;
        beforeEach(function() {
            _vxVoiceController = element.controller('vxVoice');
        });
        it('should be Defined', inject(function () {
            expect(_vxVoiceController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxVoice Service', function () {

    });
});
