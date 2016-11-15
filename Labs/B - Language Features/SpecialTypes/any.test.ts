import * as chai from 'chai'

describe('any', ()=> {
    it('any', ()=> {
        // TODO : fix the test by using the any type annotation
        function MyToString(obj:any) {
            return obj.ToString();
        }

        var n_actual = MyToString(123);
        chai.expect(n_actual).to.be.equal('123');

        var a_actual = MyToString([1,2,3]);
        chai.expect(a_actual).to.be.equal('1,2,3');

        var n_actual = MyToString('123');
        chai.expect(n_actual).to.be.equal('123');
    })
})