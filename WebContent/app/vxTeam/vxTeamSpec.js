describe('Module to test: vxTeam', function () {
   var element;
    beforeEach(module('vxTeamModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('vxTeam directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<vx-team></vx-team>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('vxTeam Controller', function () {
        var _vxTeamController;
        beforeEach(function() {
            _vxTeamController = element.controller('vxTeam');
        });
        it('should be Defined', inject(function () {
            expect(_vxTeamController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('vxTeam Service', function () {

    });
});
