import * as chai from 'chai'

// tests : do not change anything
describe('Arrow', () => {
    it('simple', () => {
        // TODO : define an arrow function (lambda) that returns the power of 2 of its argument by using the => operator
        var fn; /* should take x as arguments and returns x*x;*/
        chai.expect(fn).to.be.an('function');
        chai.expect(fn(2)).to.be.equal(4)
    })
    it('this', (done) => {
        // TODO : change growOld to an arrow to keep the this context
        function Person(age) {
            this.age = age;
            this.growOld = function() {
                this.age++;    
            } 
        } 
        var person = new Person(1); 
        setTimeout(person.growOld,500);
        setTimeout(function() {
           var aged = person.age;
           chai.expect(aged).to.be.equal(2); 
           done();
        },1000);
    })
})

