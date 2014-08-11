angular.module('customFilters', []).
filter('titlecase', function () {
	return function (input) {
		var i,
			words,
			output = '';
		if (angular.isString(input)) {
			output = input.toLowerCase();
			words = output.split(' ');
			for (i = 0; i < words.length; i = i + 1) {
				words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length);
			}
			output = words.join(' ');
			return output;
		} else {
			return input;
		}
	};
}).
filter('unique', function () {
	return function (input) {
		var i,
			find,
			output = [];
		for (i = 0; i < input.length; i = i + 1) {
			find = false;
			for (var j = 0; j < output.length; j = j + 1) {
				if (input[i] == output[j]) {
					find = true;
				}
			}
			if (!find) {
				output.push(input[i]);
			}
		}
		return output;
	};
});