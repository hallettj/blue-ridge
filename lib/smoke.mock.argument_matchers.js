/*extern Smoke jQuery */

Smoke.Mock.ArgumentMatchers = (function($) {
    return {
        any_args: {
            match: function(expected, actual) {
                return true;
            },
            failure_message: function(expected, actual, not) {
                return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to be a arguments.';
            }
        },

        anything: {
            match: function(expected, actual) {
                return true;
            },
            failure_message: function(expected, actual, not) {
                return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to be an argument.';
            }
        },

        no_args: {
            match: function(expected, actual) {
                return actual instanceof Array && actual.length === 0;
            },
            failure_message: function(expected, actual, not) {
                return 'expected ' + $.print(actual) + (not ? '' : ' not') + ' to be any arguments.';
            }
        },

        any_function: {
            match: function(expected, actual) {
                return actual instanceof Function;
            },
            failure_message: function(expected, actual, not) {
                return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to be a function.';
            }
        },

        any_object: {
            match: function(expected, actual) {
                return actual instanceof Object;
            },
            failure_message: function(expected, actual, not) {
                return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to be an object.';
            }
        }
    };
})();
