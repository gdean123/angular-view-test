describe("PetsController", function () {
    beforeEach(inject(function ($scope, $controller) {
        this.$scope = $scope;
        $controller('PetsController', { $scope: this.$scope });
    }));

    it("sets the pet name on the scope", function () {
        expect(this.$scope.name).toEqual("Fluffy");
    });
});
