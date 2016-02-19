var locator = require('./index')();
var obj = {
    testerFile : function() {
        console.log('THIS HAPPENED');
    },
    second: function() {
        console.log('blahhh');
    }
};
locator.register('test',obj);
var call = locator.get('test','second');
call()

