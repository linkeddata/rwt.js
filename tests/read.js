setup = require('setup');

module.exports = {
    'OPTIONS /': {
        setUp: setup.OPTIONS('/'),
        tearDown: function (callback) { callback(); },

        'r.status == 200': function (test) {
            //test.expect(1);
            test.equals(this.response.status, 200);
            test.done();
        },

        'r.headers[access-control-allow-origin]': function(test) {
            test.equal(this.response.headers['access-control-allow-origin'], 'https://linkeddata.github.com');
            test.done();
        },

        'r.headers[access-control-allow-method]': function(test) {
            common.matchtest(test, this.response.headers['access-control-allow-methods'], /GET(,|$)/);
            test.done();
        },

    },
};
