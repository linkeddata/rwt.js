setup = require('setup');

module.exports = {
    label: 'OPTIONS /',
    setUp: setup.options,
    tearDown: function (callback) { callback(); },
    testStatusEquals200: function (test) {
        test.expect(1);
        test.equals(this.status, 200);
        test.done();
    },
};
