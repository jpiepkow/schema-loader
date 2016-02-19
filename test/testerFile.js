var locator = require('./../index')();
/*
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
*/

locator.registerAll('./testDir');


var filetwo = locator.get('testTwo');
var filetwo_two = locator.get('testTwo', 'two');
var fileone = locator.get('test_one');
var fileone_two = locator.get('test_one','two');



filetwo();
filetwo_two();
fileone();
fileone_two();

