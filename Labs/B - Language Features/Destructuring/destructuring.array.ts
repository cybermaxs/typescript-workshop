import * as chai from 'chai'

describe('Array destructuring', () => {
    it('simple', () => {
        let input = [1, 2];
        // TODO : assign input[0] to x and input[1] to by using a single ligne of code
        var [x,y]=input;
<<<<<<< HEAD

=======
>>>>>>> 1d4c19808b4a957e333aa3099939cd17269026e9
        chai.expect(x).to.be.equal(1)
        chai.expect(y).to.be.equal(2)
    })
    it('swap variables', () => {
        var x = 10
        var y = 20; 
        // TODO : swap variables without a third variable and by using a single ligne of code
        var [x,y]=[y,x];
        chai.expect(x).to.be.equal(20)
        chai.expect(y).to.be.equal(10)
    })
    it('rest parameters', () => {
        var inputs = [10,20,30,40];
        // TODO : assign two first values to x/y and the others parameters to an array called 'remainging' with a single ligne of code
        var [x,y,...remaining]=inputs;
<<<<<<< HEAD

=======
>>>>>>> 1d4c19808b4a957e333aa3099939cd17269026e9
        chai.expect(x).to.be.equal(10)
        chai.expect(y).to.be.equal(20)
        chai.expect(remaining).to.be.deep.equal([30,40]);
    })
    it('ignore parameters', () => {
        var inputs = [10,20,30,40];
        // TODO : assign first value to x, skip the second item and the others parameters to an array called 'remainging' with a single ligne of code
        var [x,,...remaining]=inputs;
<<<<<<< HEAD

=======
>>>>>>> 1d4c19808b4a957e333aa3099939cd17269026e9
        chai.expect(x).to.be.equal(10)
        chai.expect(remaining).to.be.deep.equal([30,40]);
    })
})