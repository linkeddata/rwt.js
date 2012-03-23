setup = require('setup');

module.exports = {
    'OPTIONS /': {
        setUp: setup.OPTIONS('/'),
        tearDown: function (callback) { callback(); },

        'r.headers[ms-author-via]': function(test) {
            common.matchtest(test, this.response.headers['ms-author-via'], /DAV(,|$)/);
            common.matchtest(test, this.response.headers['ms-author-via'], /SPARQL(,|$)/);
            test.done();
        },

        'r.headers[allow]': function(test) {
            common.matchtest(test, this.response.headers.allow, /POST(,|$)/);
            common.matchtest(test, this.response.headers.allow, /PUT(,|$)/);
            common.matchtest(test, this.response.headers.allow, /DELETE(,|$)/);
            common.matchtest(test, this.response.headers.allow, /MKCOL(,|$)/);
            common.matchtest(test, this.response.headers.allow, /PATCH(,|$)/);
            test.done();
        },

        'r.headers[access-control-allow-origin]': function(test) {
            test.equal(this.response.headers['access-control-allow-origin'], 'https://linkeddata.github.com');
            test.done();
        },

        'r.headers[access-control-allow-method]': function(test) {
            common.matchtest(test, this.response.headers['access-control-allow-methods'], /POST(,|$)/);
            common.matchtest(test, this.response.headers['access-control-allow-methods'], /PUT(,|$)/);
            common.matchtest(test, this.response.headers['access-control-allow-methods'], /DELETE(,|$)/);
            common.matchtest(test, this.response.headers['access-control-allow-methods'], /MKCOL(,|$)/);
            common.matchtest(test, this.response.headers['access-control-allow-methods'], /PATCH(,|$)/);
            test.done();
        },

    },
};
