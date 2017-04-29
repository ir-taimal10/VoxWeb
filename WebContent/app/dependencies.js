require('./../index.jade');
require('./vendors.js');

require('../app/appConfig.js');

/**
 * Global styles
 * styles of controls should be in each module
 **/
/*require('../app/styles/css/bootstrap.less');
 require('../app/styles/css/bootstrap-theme.less');*/
require('../app/styles/css/font-awesome.less');
require('../app/styles/css/app.less');
require('../app/styles/css/materialize.less');

/**
 * Internationalization = i18n
 **/
require('../app/i18n/i18nModule.js');
require('../app/i18n/i18nDirective.js');
require('../app/i18n/i18nService.js');

//REST  API
require('../app/vxRestApi/vxRestApiModule.js');
require('../app/vxRestApi/vxRestApiService.js');
/**
 * common Directives
 **/
require('../app/commons/directives/commonDirectivesModule.js');
require('../app/commons/directives/ripple/rippleDirective.js');
require('../app/commons/directives/parallax/parallax.js');
require('../app/commons/directives/ripple/ripple.less');

//vxLoginModule
require('../app/vxLogin/vxLoginModule.js');
require('../app/vxLogin/vxLoginComponent.js');
require('../app/vxLogin/vxLoginService.js');
require('../app/vxLogin/vxLogin.less');

//vxUserFormModule
require('../app/vxUserForm/vxUserFormModule.js');
require('../app/vxUserForm/vxUserFormComponent.js');
require('../app/vxUserForm/vxUserFormService.js');
require('../app/vxUserForm/vxUserForm.less');

//vxFooterModule
require('../app/vxFooter/vxFooterModule.js');
require('../app/vxFooter/vxFooterComponent.js');
require('../app/vxFooter/vxFooterService.js');
require('../app/vxFooter/vxFooter.less');

//vxTeamModule
require('../app/vxTeam/vxTeamModule.js');
require('../app/vxTeam/vxTeamComponent.js');
require('../app/vxTeam/vxTeamService.js');
require('../app/vxTeam/vxTeam.less');

//vxHeaderModule
require('../app/vxHeader/vxHeaderModule.js');
require('../app/vxHeader/vxHeaderComponent.js');
require('../app/vxHeader/vxHeaderService.js');
require('../app/vxHeader/vxHeader.less');

//vxPublicityModule
require('../app/vxPublicity/vxPublicityModule.js');
require('../app/vxPublicity/vxPublicityComponent.js');
require('../app/vxPublicity/vxPublicityService.js');
require('../app/vxPublicity/vxPublicity.less');

//vxDashboardModule
require('../app/vxDashboard/vxDashboardModule.js');
require('../app/vxDashboard/vxDashboardComponent.js');
require('../app/vxDashboard/vxDashboardService.js');
require('../app/vxDashboard/vxDashboard.less');

//vxHomeModule
require('../app/vxHome/vxHomeModule.js');
require('../app/vxHome/vxHomeComponent.js');
require('../app/vxHome/vxHomeService.js');
require('../app/vxHome/vxHome.less');

//vxAnnouncementFormModule
require('../app/vxAnnouncementForm/vxAnnouncementFormModule.js');
require('../app/vxAnnouncementForm/vxAnnouncementFormComponent.js');
require('../app/vxAnnouncementForm/vxAnnouncementFormService.js');
require('../app/vxAnnouncementForm/vxAnnouncementForm.less');

//vxAnnouncementHomeModule
require('../app/vxAnnouncementHome/vxAnnouncementHomeModule.js');
require('../app/vxAnnouncementHome/vxAnnouncementHomeComponent.js');
require('../app/vxAnnouncementHome/vxAnnouncementHomeService.js');
require('../app/vxAnnouncementHome/vxAnnouncementHome.less');

//vxVoiceFormModule
require('../app/vxVoiceForm/vxVoiceFormModule.js');
require('../app/vxVoiceForm/vxVoiceFormComponent.js');
require('../app/vxVoiceForm/vxVoiceFormService.js');
require('../app/vxVoiceForm/vxVoiceForm.less');

//vxVoiceModule
require('../app/vxVoice/vxVoiceModule.js');
require('../app/vxVoice/vxVoiceComponent.js');
require('../app/vxVoice/vxVoiceService.js');
require('../app/vxVoice/vxVoice.less');