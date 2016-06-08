<!DOCTYPE html>
<html lang="en" ng-app="myApp">
    <head>
        <title>Simple Application</title>

        <!-- Load Bootstrap CSS -->
        <link href="<?= asset('bower_components/bootstrap/dist/css/bootstrap.min.css') ?>" rel="stylesheet">

        <link href="<?= asset('css/main.css') ?>" rel="stylesheet">
        <script>var baseUrl = "{{ url('/') }}/";</script>
    </head>
    <body>
        <div class="container" ng-controller="globalController">
            <div ng-include="global.navUrl"></div>
        </div>
        <div class="header-bottom-line"></div>
        <div class="container">
            <div class="ng-view"></div>
        </div>


        <!-- Load Javascript Libraries (AngularJS, JQuery, Bootstrap) -->
        <script src="<?= asset('bower_components/angular/angular.min.js') ?>"></script>
        <script src="<?= asset('bower_components/angular-route/angular-route.min.js') ?>"></script>
        <script src="<?= asset('bower_components/angular-cookies/angular-cookies.min.js') ?>"></script>
        <script src="<?= asset('bower_components/jquery/dist/jquery.min.js') ?>"></script>
        <script src="<?= asset('bower_components/bootstrap/dist/js/bootstrap.min.js') ?>"></script>

        <!-- AngularJS Application Scripts -->
        <script src="<?= asset('js/app.js') ?>"></script>
        <script src="<?= asset('js/controllers.js') ?>"></script>
    </body>
</html>
