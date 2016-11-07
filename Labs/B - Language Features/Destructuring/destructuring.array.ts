import * as chai from 'chai'

describe('Array destructuring', () => {
    it('swap variables', () => {
        var x = 10
        var y = 20; 
        // TODO : swap variables without a third variable and by using a single ligne of code
        /* ...FILL_ME_IN... */
        chai.expect(x).to.be.equal(20)
        chai.expect(y).to.be.equal(10)
    })
    it('rest parameters', () => {
        var inputs = [10,20,30,40];
        // TODO : assign two first values to x/y and the others parameters to an array called 'remainging' with a single ligne of code
        /* ...FILL_ME_IN... */
        chai.expect(x).to.be.equal(10)
        chai.expect(y).to.be.equal(20)
        chai.expect(remaining).to.be.deep.equal([30,40]);
    })
    it('ignore parameters', () => {
        var inputs = [10,20,30,40];
        // TODO : assign first value to x, skip the second item and the others parameters to an array called 'remainging' with a single ligne of code
        /* ...FILL_ME_IN... */
        chai.expect(x).to.be.equal(10)
        chai.expect(remaining).to.be.deep.equal([30,40]);
    })
})