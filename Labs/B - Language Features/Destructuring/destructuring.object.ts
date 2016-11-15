import * as chai from 'chai'

describe('Object destructuring', () => {
    it('simple object', () => {
        var rect = { x: 10, y: 20, z: 30};
        // TODO : create and assign these three variables in a single ligne of code
        // Note : use destructuring
        var {x,y,z}=rect;
        chai.expect(x).to.be.equal(10);
        chai.expect(y).to.be.equal(20);
        chai.expect(z).to.be.equal(30);
    })
    it('renaming', () => {
        // TODO : assign o.b and o.c to respectively firstname and lastname in a single ligne of code
        // Note : use destructuring
        let o = {
            a: 'Hello',
            b: 'John',
            c: 'Smith',
        } 

         var {b:firstname,c:lastname}=o;
        chai.expect(firstname).to.be.an('string');
        chai.expect(firstname).to.be.equal('John');

        chai.expect(lastname).to.be.an('string');
        chai.expect(lastname).to.be.equal('Smith')
    })
    it('nested', () => {
        // TODO : assign obj["some property"] to a new var someProperty
        // Note : use destructuring
        const obj = {"some property": "a value"};

        var {"some property":someProperty}=obj;
        /* ...FILL_ME_IN... */
        chai.expect(someProperty).to.be.an('string');
        chai.expect(someProperty).to.be.equal("a value")
    })
})