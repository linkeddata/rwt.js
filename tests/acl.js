setup = require('setup');

module.exports = {
    'OPTIONS /': {
        setUp: setup.OPTIONS('/'),
        tearDown: function (callback) { callback(); },

        'r.headers[link]': function(test) {
            common.matchtest(test, this.response.headers['link'], /; rel=meta$/);
            test.done();
        },

    },
};
