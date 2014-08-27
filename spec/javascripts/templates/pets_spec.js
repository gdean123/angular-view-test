describe("Pets", function () {
    beforeEach(inject(function ($rootScope, renderTemplate) {
        this.$scope = $rootScope.$new();
        this.$scope.name = "Sox";
        this.view = renderTemplate('pets', this.$scope);
    }));

    it("displays the pet name", function () {
        expect(this.view).toHaveText("Pet name: Sox");
    });
});
