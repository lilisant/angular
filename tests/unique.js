describe('unique filter', function () {
	beforeEach(angular.mock.module('customFilters'));
	it('should remove duplicates from an array', function () {
		angular.mock.inject(function (uniqueFilter) {
			expect(uniqueFilter(['Tom', 'Tom', 'liliana', 'Tom'])).toEqual(['Tom', 'liliana']);
		});
	});

});