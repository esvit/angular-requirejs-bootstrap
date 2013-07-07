'use strict';

require.config({
    shim: {
        'select2': { deps: ['jquery'] },
        'angular-ui-select2': { deps: ['select2', 'angular'] }
    },
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'angular': '../bower_components/angular/angular',
        'select2': '../../bower_components/select2/select2',
        'angular-ui-select2': '../../bower_components/angular-ui-select2/src/select2'
    }
});


define(['jquery', 'angular', 'main'], function ($) {

    angular.bootstrap(document.documentElement, ['app']);

});