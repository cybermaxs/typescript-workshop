import * as chai from 'chai'

// tests : do not change anything
describe('Function', () => {
    it('returnType', () => {
        // TODO : fix the return type to fix this error
        var fn= function(a:number, b:number):string { return a+b};

        chai.expect(fn).to.be.an('function');
        chai.expect(fn(1,2)).to.be.an('string');
    })
    it('missingReturnType', () => {
        // TODO : replace FILL_ME_IN by the correct type (Tip : use intellisense ...)
        var fn= function(a:string, b:string) { return !!(a||b)};

        chai.expect(fn).to.be.an('function');
        chai.expect(fn("1","code")).to.be.an('FILL_ME_IN');
    })
    it('optional parameter', () => {
        // TODO : define an optional parameter to fix this test + warning
        var fn= function(a:number, b:number=99) { return a};

        chai.expect(fn).to.be.an('function');
        chai.expect("CALL_FN").to.be.equal(2)
    })
    it('default value', (done) => {
        // TODO : assign a default value to a parameter to fix this test
        var fn= function(a:number, b:number) { return a+b};

        chai.expect(fn).to.be.an('function');
        chai.expect(fn(1)).to.be.equal(3)
    })
})

