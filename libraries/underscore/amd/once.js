define(['./before', './partial'], function (before, partial) {

	// Returns a function that will be executed at most one time, no matter how
	// often you call it. Useful for lazy initialization.
	var once = partial(before, 2);

	return once;

});
