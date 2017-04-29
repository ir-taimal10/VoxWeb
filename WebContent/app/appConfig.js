(function (window, document) {
    'use strict';
    var appConfigurations = window.appConfigurations || (window.appConfigurations = {});
    angular.extend(appConfigurations, {
        'productionConfiguration': ['$routeProvider', '$httpProvider', '$translateProvider',
            function configuration($routeProvider, $httpProvider, $translateProvider) {
                var languageEs = require('../app/i18n/resources/es-co.json');
                var languageEn = require('../app/i18n/resources/en-us.json');
                $translateProvider.translations('es-co', languageEs);
                $translateProvider.translations('en-us', languageEn);
                $translateProvider.preferredLanguage('en-us');
                $translateProvider.useSanitizeValueStrategy(null);
                $routeProvider.when('/', {
                    template: '<vx-home> </vx-home>'
                });
                $routeProvider.when('/dashboard', {
                    template: '<vx-dashboard> </vx-dashboard>',
                    requireAuthentication: true,
                    resolve: {
                        auth: ['$q', 'vxLoginService', '$location',
                            function ($q, vxLoginService, $location) {
                                var deferred = $q.defer();
                                var userData = vxLoginService.getUserData();
                                if (userData && userData.userName) {
                                    deferred.resolve();
                                }
                                else {
                                    deferred.reject();
                                    $location.path("/");
                                }
                                return deferred.promise;
                            }]
                    }
                });
                $routeProvider.when('/announcement/:announcementPath', {
                    template: '<vx-announcement-home> </vx-announcement-home>'
                });
                $routeProvider.otherwise({redirectTo: '/'});
            }]
    });

    // String hashcode
    String.prototype.hashCode = function () {
        var hash = 0, i, chr, len;
        if (this.length === 0) return hash;
        for (i = 0, len = this.length; i < len; i++) {
            chr = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
})(window, document);
