setup = require('setup');

module.exports = {
    'INSERT DATA { <a> <b> <c> }': function(test) {
        query = 'INSERT DATA { <a> <b> <c> }'
        common.sparql('/sparqlTest', query, function(r) {
            test.ok(r.status == 200, 'failed status code: ' + r.status);
            //TODO: test the data
            test.done();
        });
    },
    'DELETE DATA { <a> <b> <c> }': function(test) {
        query = 'DELETE DATA { <a> <b> <c> }'
        common.sparql('/sparqlTest', query, function(r) {
            test.ok(r.status == 200, 'failed status code: ' + r.status);
            //TODO: test the data
            test.done();
        });
    },
    'INSERT DATA { <a> <b> <c> }; DELETE DATA { <a> <b> <c> }': function(test) {
        query = 'INSERT DATA { <a> <b> <c> }; DELETE DATA { <a> <b> <c> }'
        common.sparql('/sparqlTest', query, function(r) {
            test.ok(r.status == 200, 'failed status code: ' + r.status);
            //TODO: test the data
            test.done();
        });
    },
};
