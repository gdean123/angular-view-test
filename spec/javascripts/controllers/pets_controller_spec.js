describe("PetsController", function () {
    beforeEach(inject(function ($rootScope, $controller) {
        this.$scope = $rootScope.$new();
        $controller('PetsController', { $scope: this.$scope });
    }));

    it("sets the pet name on the scope", function () {
        expect(this.$scope.name).toEqual("Fluffy");
    });
});
