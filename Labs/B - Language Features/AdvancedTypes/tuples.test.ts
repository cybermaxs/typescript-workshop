import * as chai from 'chai'

describe('Tuple', () => {
    it('defineSimple', () => {
        // TODO : create a tuple that has two properties string/number
        tuple = ['hello', 10];
        
        chai.expect(tuple).to.be.an('array');
        chai.expect(tuple[0]).to.be.equal('hello');
        chai.expect(tuple[1]).to.be.equal(10);
    })
})
