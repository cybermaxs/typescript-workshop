import * as chai from 'chai'

describe('spread', () => {
    it('callFunction', () => {
        function foo(x:number, y:number, z:number) { 
            return x+y+z;
         } 
        var args = [1, 2, 3]; 
        
        // TODO : call foo method using the spread operator and args
        var actual = foo(...args);

        chai.expect(actual).to.be.equal(6);
    })
    it('expandArray', () => {
        var list = [1, 2]; 

        // TODO : expand 'list' to 0,1,2,3,4 using the spead operator
        list=[0,...list,3,4];

        chai.expect(list).to.be.deep.equal([0,1,2,3,4]);
    })
})
