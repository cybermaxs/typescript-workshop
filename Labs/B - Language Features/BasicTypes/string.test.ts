import * as chai from 'chai'

describe('Simple Strings', () => {
    it('defineUsingSimpleQuotes', () => {
        // TODO : define a string using simple quotes '
        var s = 'FILL_Me_IN';
        chai.expect(s).to.be.an('string');
        chai.expect(s).to.be.equal("I'm a string")
    })
    it('defineUsingDoubledQuotes', () => {
        // TODO : define a string using double quotes "
        var s = "FILL_Me_IN";
        chai.expect(s).to.be.an('string');
        chai.expect(s).to.be.equal("I'm a string")
    })
})

describe('Template Strings', () => {
    it('interpolated', () => {
        // TODO : create an interpolated string (note : do not use the + operator)
        var tag = "Carl";
        var s = `Hello, my name is FILL_ME_IN.`;
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
    it('basic', () => {
        // TODO : define a string literal 'visibility' allowing only two states : 'Visible' and 'Hidden'

        visibility = 'Visible';
        chai.expect(visibility).to.be.an('string');
        chai.expect(visibility).to.be.equal('Visible');

        visibility = 'Hidden';
        chai.expect(visibility).to.be.an('string');
        chai.expect(visibility).to.be.equal('Hidden');

        // try to assign another string value to visibility. any error ?
    })
    it('customtype', () => {
        // TODO : replace FILL_ME_IN by allowed string value to fix this test
        type visibility = 'Visible' | 'Hidden';

        var vis: visibility = 'FILL_ME_IN';
        chai.expect(vis).to.be.an('string');
        chai.expect(vis).to.be.equal('Visible');

        var hid: visibility = 'FILL_ME_IN';
        chai.expect(hid).to.be.an('string');
        chai.expect(hid).to.be.equal('Hidden');
        // note : transpiled js is still valid, even if we have a ts warning
        var collapsed: visibility = 'Collapsed';
        chai.expect(collapsed).to.be.equal('Collapsed');
    })
})
