require('./dependencies.js');
var appConfiguration;
var appModules = [
    'ngCookies',
    'ui.bootstrap',
    'pascalprecht.translate',
    'ngRoute',
    'ngFileUpload',
    'base64',
    'ngAudio',
    'i18nModule',
    'commonDirectivesModule',
    'ngMaterial',
    'vxRestApiModule',
    'vxLoginModule',
    'vxUserFormModule',
    'vxFooterModule',
    'vxTeamModule',
    'vxHeaderModule',
    'vxPublicityModule',
    'vxDashboardModule',
    'vxHomeModule',
    'vxAnnouncementFormModule',
    'vxAnnouncementHomeModule',
    'vxVoiceFormModule',
    'vxVoiceModule'
];

appConfiguration = appConfigurations.productionConfiguration;

angular.module('helloworldApp', appModules, appConfiguration).config(['$mdThemingProvider', function ($mdThemingProvider) {
    //https://material.angularjs.org/latest/Theming/01_introduction
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');

}]);
angular.bootstrap(document, ['helloworldApp']);
