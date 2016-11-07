// TODO : import the chai module

// tests : do not change anything
describe('externalModule', () => {
    it('usingchai', () => {
        var actual = 1 +1;
        var expected  = 2;

        // TODO : use the should property of chai to validate that 1+1=2
        // Note : yes, you're writing a test :)
        chai.assert.equal(actual, expected+1);
    })
})