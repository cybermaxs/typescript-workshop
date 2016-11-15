import * as chai from 'chai'

// tests : do not change anything
describe('function#call', () => {
    it('simple call', () => {
        // TODO : call myconverter with correct parameter to fix this test
        var myConverter = function (s: string, radix: number) {
            return parseInt(s, radix);
        };
        var actual = myConverter('FILL_ME_IN');
        chai.expect(actual).to.be.an('number');
        chai.expect(actual).to.be.equal(12);
    })
    it('complex call', () => {
        // TODO : call log with correct parameter to fix this test
        var log = function (log: { ts: number, msg: string }) {
            return log.ts.toString() + '=>' + log.msg;
        };

        chai.expect(actual).to.be.an('string');
        chai.expect(actual).to.be.equal('123 => hello');
    })
    it('call with optional parameter', () => {
        // TODO : call fn to fix this test + warning
        var fn = function (a: number, b: number = 99) { return a };

        var actual = "CALL_FN";
        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.equal(2)
    })
})

