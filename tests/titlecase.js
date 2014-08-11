describe('titlecase filter', function () {
	beforeEach(angular.mock.module('customFilters'));
	it('should convert words separated by a space to titlecase', function () {
		angular.mock.inject(function (titlecaseFilter) {
			expect(titlecaseFilter('hello wor')).toEqual('Hello Wor');
		});
	});
	it('should convert words seperated by a hyphen to titlecase', function () {
		angular.mock.inject(function (titlecaseFilter) {
			expect(titlecaseFilter('mary-lo')).toEqual('Mary-lo');
		});
	});

});