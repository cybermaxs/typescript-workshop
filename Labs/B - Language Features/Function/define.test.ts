import * as chai from 'chai'

// tests : do not change anything
describe('function#define', () => {
    it('assign default value', (done) => {
        // TODO : assign a default value to a parameter in fn to fix this test
        var fn = function (a: number, b: number) { return a + b };

        var actual = fn(1);
        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.equal(3)
    })
    it('returnType', () => {
        // TODO : fix the return type to fix this error
        var fn = function (a: number, b: number): string { return a + b };

        var actual = fn(1, 2);
        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.an('string');
    })
    it('missingReturnType', () => {
        // TODO : replace FILL_ME_IN by the correct type (Tip : use intellisense ...)
        var fn = function (a: string, b: string) { return !!(a || b) };

        var actual = fn("1", "code");
        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.an('FILL_ME_IN??');
    })
    it('rest', () => {
        // TODO : replace FILL_ME_IN by the correct type (Tip : use intellisense ...)
        var buildName = function (firstName: string, ...restOfName: string[]) {
            return firstName + " " + restOfName.join(" ");
        }

        let joke1 = buildName('Cedie', 'Player');
        chai.expect(joke1).to.be.equal('FILL_ME_IN');

        let joke2 = buildName('Cristiano', 'Ronaldo' ,'dos Santos' ,'Aveiro');
        chai.expect(joke2).to.be.equal('FILL_ME_IN');
    })
})

