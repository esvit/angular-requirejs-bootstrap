'use strict';

require.config({
    shim: {
    },
    paths: {
        'jquery': '../../bower_components/jquery/jquery',
        'angular': '../../bower_components/angular/angular'
    }
});


define(['jquery', 'angular'], function ($) {

    angular.bootstrap(document.documentElement, []);

});