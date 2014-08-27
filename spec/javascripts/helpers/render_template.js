viewTest.service('renderTemplate', function($templateCache, $interpolate, $compile) {
    return function renderTemplate(template, $scope) {
        var templateHtml = $templateCache.get('templates/' + template);
        var interpolatedTemplate = $interpolate(templateHtml)($scope);
        var linkFunction = $compile(interpolatedTemplate);

        return linkFunction($scope);
    }
});