var vxRestApiModule = angular.module('vxRestApiModule');
vxRestApiModule.factory('vxRestApiService', ['$resource', 'Upload',
    function ($resource, Upload) {
        var restApiService = $resource('api/user', {}, {
            createUser: {
                url: 'api/User',
                method: 'POST',
                isArray: false,
                params: {}
            },
            login: {
                url: 'api/User/login',
                method: 'POST',
                isArray: false,
                params: {}
            },
            loadAnnouncements: {
                url: 'api/User/:userId/Announcement',
                method: 'GET',
                isArray: true,
                params: {}
            },
            loadAnnouncement: {
                url: 'api/announcement/:announcementId',
                method: 'GET',
                isArray: false,
                params: {}
            },
            createAnnouncement: {
                url: 'api/User/:userId/Announcement',
                method: 'POST',
                isArray: false,
                params: {}
            },
            updateAnnouncement: {
                url: 'api/Announcement/:announcementId',
                method: 'PUT',
                isArray: false,
                params: {}
            },
            deleteAnnouncement: {
                url: 'api/Announcement/:announcementId',
                method: 'DELETE',
                isArray: false,
                params: {}
            },
            loadVoices: {
                url: 'api/announcement/:announcementId/voice',
                method: 'GET',
                isArray: true,
                params: {}
            }
        });
        restApiService.createVoice = function (params, data, done, error) {
            console.log('params :', params);
            console.log('data :', data);
            Upload.upload({
                url: '/api/announcement/' + params.announcementId + '/voice',
                data: data
            }).progress(function (evt) {
            }).success(function (responseData, status, headers, config) {
                done(responseData);
            });
        };
        return restApiService;
    }]);






