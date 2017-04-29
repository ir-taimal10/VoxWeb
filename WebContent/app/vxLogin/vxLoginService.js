var vxLoginModule = angular.module('vxLoginModule');
vxLoginModule.factory('vxLoginService', ['$location', '$base64', 'vxRestApiService',
    function ($location, $base64, vxRestApiService) {
        var VxLogin = function () {
            var self = this;
            self.loginResult = ""
            self.login = function (credentials) {
                var self = this;
                vxRestApiService.login(
                    {},
                    {
                        userName: credentials.userName,
                        password: $base64.encode(btoa(credentials.userName + "|" + credentials.password))
                    },
                    function (response) {
                        if (response.result == 'ok') {
                            var sesionData = {"userName": credentials.userName};
                            localStorage.setItem('vx-sesion-data', JSON.stringify(sesionData));
                            $location.path("/dashboard");
                        } else {
                            self.loginResult = "Usuario y contraseña iincorrectos";
                        }
                    }, function (error) {
                        console.log(error);
                        self.loginResult = "Usuario y contraseña iincorrectos";
                    });

            };
            self.logout = function () {
                var self = this;
                localStorage.removeItem('vx-sesion-data');
                $location.path("/");
            };
            self.getUserData = function () {
                return JSON.parse(localStorage.getItem('vx-sesion-data')) || {};
            }
        };
        var vxLogin = new VxLogin();
        return vxLogin;
    }]);
