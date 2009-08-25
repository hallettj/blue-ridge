/*extern Smoke */

Smoke.Mock.ArgumentMatchers = (function() {
    return {
        any_args: {
            match: function(actual) {
                return true;
            }
        },

        anything: {
            match: function(actual) {
                return true;
            }
        },

        no_args: {
            match: function(actual) {
                return actual instanceof Array && actual.length === 0;
            }
        },

        kind_of: function(type) {
            return {
                match: function(actual) {
                    if (type == Number) {
                        return Number(actual) === actual;
                    } else {
                        return actual instanceof type;
                    }
                }
            };
        },

        any_function: {
            match: function(actual) {
                return actual instanceof Function;
            }
        },

        any_object: {
            match: function(actual) {
                return actual instanceof Object;
            }
        }
    };
})();
