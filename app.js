(function () {
  'use strict';

  angular.module('myApp', [
    'angularAudioRecorder'
  ])
    .controller('myCtrl', function ($scope, $timeout) {
      console.log("Loaded");

    })
    .config(function (recorderServiceProvider) {
      recorderServiceProvider
        .forceSwf(window.location.search.indexOf('forceFlash') > -1)
        .setSwfUrl('lib/recorder.swf')
        .withMp3Conversion(true);
    });

})();