import * as chai from 'chai'

describe('number', ()=> {
    it('assignToLet', ()=> {
        // TODO : assign the correct value to this variable to fix this test
        let thenumber = "12";

        chai.expect(thenumber).to.be.an('number');
        chai.expect(thenumber).to.be.equal(42);
    })
    it('assignToVar', ()=> {
        // TODO : review the compiler error, fix it and fix the test
        var thenumber:number = "12";

        chai.expect(thenumber).to.be.an('number');
        chai.expect(thenumber).to.be.equal(12);
    })
    it('sum', ()=> {
        let opeA = 1;
        let opeB = 2;

        // TODO : assign the correct value to sum variable to fix this test
        let sum = -1; 

        chai.expect(sum).to.be.an('number');
        chai.expect(sum).to.be.equal(3);
    })
    it('binary', ()=> {
        // TODO : assign the correct value (binary) to binary variable to fix this test
        let binary:number = 0b000; 

        chai.expect(binary).to.be.an('number');
        chai.expect(binary).to.be.equal(3);
    })
    it('hexa', ()=> {
        // TODO : assign the correct value (hexa) to variable to fix this test
        let binary:number = 0xAAA; 

        chai.expect(binary).to.be.an('number');
        chai.expect(binary).to.be.equal(17);
    })
})