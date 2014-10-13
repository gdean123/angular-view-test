viewTest.config(function ($routeProvider) {
    return $routeProvider
        .otherwise({
            templateUrl: 'templates/pets',
            controller: 'PetsController'
        });
});
