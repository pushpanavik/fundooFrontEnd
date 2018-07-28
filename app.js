var app=angular.module('fundooApp',['ui.router','ngMaterial','content-editable']);
app.config(function($stateProvider,$urlRouterProvider)
{
  $stateProvider
  .state('Register',
  {
    url:'/Register',
    templateUrl:'templates/register.html',
    controller:'userCtrl'
  })
  .state('Login',
{
  url:'/login',
  templateUrl:'templates/login.html',
  controller:'userCtrl'
})
.state('forgotPassword',
{
  url:'/forgotPassword',
  templateUrl:'templates/forgotPassword.html',
  controller:'userCtrl'
})
.state('resetPassword',
{
url:'/resetPassword/:token',
templateUrl: 'templates/resetPassword.html',
controller:'userCtrl',
params: {
        token: null,
}
})
.state('home',
 {
   url:'/home',
   templateUrl:'templates/home.html',
   controller:'noteCtrl'
})
.state('home.dashboard',
 {
   url:'/dashboard',
   templateUrl:'templates/dashboard.html',
   controller:'noteCtrl'
})
.state('home.trash',
{
  url:'/trash',
  templateUrl:'templates/trash.html',
  controller:'noteCtrl'
})
.state('home.archive',
{
  url:'/Archive',
  templateUrl:'templates/archive.html',
  controller:'noteCtrl'
})
.state('home.reminder',
{
  url:'/reminder',
  templateUrl:'templates/reminder.html',
  controller:'noteCtrl'
})

// $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/Register")
});
