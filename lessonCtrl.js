angular.module('lessonApp').controller('lessonCtrl', function($scope, lessonService){
  $scope.lessons = lessonService.lessonArray;
  $scope.test = "Two way binding!";
  $scope.announceDay = function(lesson, day){
    if (day === undefined){
      alert (lesson + ' is not active');
      return;
    }
    alert (lesson + ' is active on ' + day + '.')
  }
})
