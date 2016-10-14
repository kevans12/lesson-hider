angular.module('lessonApp').directive('lessonHider', function(){
  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    link: function(scope, element, attrs) {
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(schedule){
          if (schedule.lesson === scope.lesson){
            element.css('text-decoration', 'line-through');
            scope.lessonDay = schedule.weekday;
            return;
          }
        })
      });
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
      $scope.checkBox = function() {
    
        element.css('text-decoration', 'line-through');
      }
    }
  }
})
