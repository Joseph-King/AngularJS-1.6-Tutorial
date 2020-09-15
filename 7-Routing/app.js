var app = angular.module('firstAngularApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider 
        .state('home', {
            url:'/',
            templateUrl: 'home.html'
        })
        .state('posts', {
            url:'/posts',
            templateUrl: "./posts-list/posts-list-call.html" //<posts-list></posts-list> was not working, set up a html file to be called with that as the source html
        })
})

app.controller('mainCtrl', function(mainSvc) {
    this.fruits = ['apple', 'orange', 'grape'];
});

app.filter('makePlural', function() {
    return function(input) {
        return input + 's';
    }
});

app.service('mainSvc', function($http) {
    this.getPosts = function() {
        return $http.get('https://jsonplaceholder.typicode.com/posts');
    }
})

/*app.factory('mainSvc', function($http) {
    var getPosts = function() {
        return $http.get('https://jsonplaceholder.typicode.com/posts');
    }

    return {
        getPosts: getPosts
    }
})*/