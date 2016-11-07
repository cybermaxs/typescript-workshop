import * as chai from 'chai'

describe('alias', () => {
    it('simplealias', () => {
        // TODO : create a type alias StrOrNum and assign a value to call this method
              
        var n_actual:StrOrNum=null;
        var s_actual:StrOrNum=null;

        chai.expect(n_actual).to.be.an('number');
        chai.expect(n_actual).to.be.equal(123);

        chai.expect(s_actual).to.be.an('string');
        chai.expect(s_actual).to.be.equal('123');
    })
})
