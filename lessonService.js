angular.module('lessonApp').service('lessonService', function($http, $q){
  this.lessonArray = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  this.getSchedule = function() {
    return $http.get('schedule.json');
  }
})
