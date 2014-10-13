describe("Pets", function () {
    beforeEach(inject(function ($scope, renderTemplate) {
        $scope.name = "Sox";
        this.view = renderTemplate('pets', $scope);
    }));

    it("displays the pet name", function () {
        expect(this.view).toHaveText("Pet name: Sox");
    });
});