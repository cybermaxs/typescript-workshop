import * as chai from 'chai'

describe('Object destructuring', () => {
    it('single object', () => {
        var rect = { x: 10, y: 20, z: 30};
        // TODO : create and assign these three variables in a single ligne of code
        /* ...FILL_ME_IN... */
        chai.expect(x).to.be.equal(10)
        chai.expect(y).to.be.equal(20)
        chai.expect(z).to.be.equal(30)
    })
    it('nested', () => {
        //structure 
        const obj = {"some property": "a value"};
        /* ...FILL_ME_IN... */
        chai.expect(someProperty).to.be.an('string');
        chai.expect(someProperty).to.be.equal("a value")
    })
})