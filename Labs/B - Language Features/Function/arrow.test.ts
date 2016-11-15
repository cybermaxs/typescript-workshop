import * as chai from 'chai'

describe('function#arrow', () => {
    it('simple', () => {
        // TODO : define an arrow function (lambda) that returns the power of 2 of its argument by using the => operator
        // aka convert fn to an arrow function
        var fn= function(x) { return 'x**x'};

        var actual = fn(2);
        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.equal(4)
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
        },100);
    })
})

