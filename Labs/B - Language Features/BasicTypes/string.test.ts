import * as chai from 'chai'

describe('Simple Strings', () => {
    it('defineUsingSimpleQuotes', () => {
        // TODO : define a string using simple quotes '
        var s ='FILL_Me_IN';
        chai.expect(s).to.be.an('string');
        chai.expect(s).to.be.equal("I'm a string")
    })
    it('defineUsingDoubledQuotes', () => {
        // TODO : define a string using double quotes "
        var s ="FILL_Me_IN";
        chai.expect(s).to.be.an('string');
        chai.expect(s).to.be.equal("I'm a string")
    })
})

describe('Template Strings', () => {
    it('multiline', () => {
        // TODO : define a string on multiple lines ( do not use \ : js)
        var s; /*= "this string 
        should be defined 
        on multiline";*/
        chai.expect(s).to.be.an('string');
        chai.expect(s).to.be.equal("this string should be defined on multiline")
    })
    it('interpolated', () => {
        // TODO : create an interpolated string (note : do not use the + operator)
        var tag = "Carl";
        var s = "Hello, my name is FILL_ME_IN."
        chai.expect(s).to.be.an('string');
        chai.expect(s).to.be.equal("Hello, my name is Carl.")
    })
    it('interpolatedExpression', () => {
        // TODO : define an expression in the interpolated string ( do not use 2)
       var s = `1 and 1 make FILL_ME_IN`;

        chai.expect(s).to.be.an('string');
        chai.expect(s).to.be.equal("1 and 1 make 2")
    })
})
describe('String Literal', () => {
    it('define', () => {
        // TODO : define a string literal 'visibility' allowing only two states : 'visible' and 'hidden'

       var vis : visibility = 'Visible';
       chai.expect(vis).to.be.an('string');
       chai.expect(vis).to.be.equal('Visible');

       var hid : visibility = 'Hidden';
       chai.expect(hid).to.be.an('string');
       chai.expect(hid).to.be.equal('Hidden');
       // node : transpiled js is still valid, even if we have a ts warning
       var collapsed : visibility = 'Collapsed';
       chai.expect(collapsed).to.be.undefined;
    }) 
})
