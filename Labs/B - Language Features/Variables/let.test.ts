import * as chai from 'chai'

describe('Let', () => {
    it('BlockScope', () => {
        // TODO : use let keyword to fix this test
        var foo = 123;
        if (true) {
            var foo = 456;
        }
        chai.expect(foo).to.be.equal(123);
    })
    it('Loop', () => {
        // TODO : use let keyword to fix this test
        const nbItems = 3;
        var funcs = [];
        var results = [];
        for (var i = 0; i < nbItems; i++) {
            funcs.push(function () {
                results.push(i);
            })
        }
        //call them
        for (var j = 0; j < nbItems; j++) {
            funcs[j]();
        }
        chai.assert.deepEqual(results, [0, 1, 2]);
    })
})
