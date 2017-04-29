var vxUserFormModule = angular.module('vxUserFormModule');
vxUserFormModule.factory('vxUserFormService', ['vxRestApiService', '$base64', '$location',
    function (vxRestApiService, $base64, $location) {
        var VxUserForm = function () {
            var self = this;
            self.registerResult = "";
            self.createUser = function (userRegister) {
                vxRestApiService.createUser(
                    {},
                    {
                        password: $base64.encode(btoa(userRegister.userName + "|" + userRegister.password)),
                        name: userRegister.name,
                        userName: userRegister.userName,
                        email: userRegister.email,
                    },
                    function (response) {
                        var sesionData = {"userName": userRegister.userName};
                        localStorage.setItem('vx-sesion-data', JSON.stringify(sesionData));
                        $location.path("/dashboard");
                    }, function (error) {
                        console.log(error);
                        self.registerResult = "El usuario ya existe, intenta con otro nombre de usuario o recupera tu contraseña"
                    });
            };
        };
        var vxUserForm = new VxUserForm();
        return vxUserForm;
    }]);
