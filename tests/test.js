var assert = require('assert');

describe('String', function () {
    describe('#indexOf', function () {
        it('should return -1 when the substring is not present', function () {
            var myString = 'test';

            assert.equal(-1, myString.indexOf('x'));
            assert.equal(-1, myString.indexOf('y'));
        });
		it('should not return -1 when the substring is present', function () {
            var myString = 'testxtest';

            assert.notEqual(-1, myString.indexOf('x'));
            assert.notEqual(-1, myString.indexOf('y'));
        });
    });
});
