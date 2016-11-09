import * as chai from 'chai'

// tests : do not change anything
describe('Array', ()=> {
    it('createLikeJs', ()=> {
        // TODO : create an array 'myarray' with 3 values 1,2,3 using []
        var myarray = null;

        chai.expect(myarray).to.be.an('array');
        chai.expect(myarray.length).to.be.equal(3);
        chai.expect(myarray).to.be.deep.equal([1,2,3]);
    })

    it('createUsingGeneric', ()=> {
        // TODO : create an array 'myarray' with 3 values 1,2,3 using Array<number>
        var myarray = null;

        chai.expect(myarray).to.be.an('array');
        chai.expect(myarray.length).to.be.equal(3);
        chai.expect(myarray).to.be.deep.equal([1,2,3]);
    })
    it('multipleTypes', ()=> {
        // TODO : create an array with 3 values : 'ok', 1, true (Tip : this is just an array...)
        var myarray = null;

        chai.expect(myarray).to.be.an('array');
        chai.expect(myarray.length).to.be.equal(3);
        chai.expect(myarray[0]).to.be.equal('ok');
        chai.expect(myarray[1]).to.be.equal(1);
        chai.expect(myarray[2]).to.be.equal(true);
    })
})