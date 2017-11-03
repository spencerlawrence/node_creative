var app = window.angular.module('app', [])

app.factory('teamFetcher', teamFetcher)
app.controller('mainCtrl', mainCtrl)

function teamFetcher ($http) {
  
  var API_ROOT = 'teams'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }
}

function mainCtrl ($scope, teamFetcher,$http) {

  $scope.teams = []

  teamFetcher.get()
    .then(function (data) {
      $scope.teams = data
    })
}
