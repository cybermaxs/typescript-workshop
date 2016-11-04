import * as mymodule from './mymodule'
import * as chai from 'chai'
import DefaultCalculator from './AddCalculator'
import Calculator from './Calculator'

// IMPORTANT NOTE : tests should NOT be changed 
// we're working with import directives, so nothing should be changed below this comment

describe('Import', () => {
    it('existingModule', () => {
        // TODO : import the interface defined in calculator and implements your own calculator
        // Tip : import should be at he beginning of the file
        class MyCalculator implements Calculator {
            Calculate(op1:number, opB:number) {
                return 1;
            }
        }
        var mycalculator = new 
        chai.expect(answser).to.be.equal(42)
        chai.expect(mymodule.calls).to.be.equal(2);
    })
    it('importDefault', () => {
        // TODO : import the default calculator
        // Note : nothing to change in this test
        var calc = new DefaultCalculator();

        chai.expect(calc.add(1,2)).to.be.equal(3)
        chai.expect(calc.multiply(6,7)).to.be.equal(42);
        chai.expect(calc.subsctract(10,7)).to.be.equal(3);
    })
    it('createCustomModule', () => {
        // TODO : create a new module & export GetAnswer in mymodule.ts to pass this test
        var answser = mymodule.GetAnswer();
        mymodule.GetAnswer()
        chai.expect(answser).to.be.equal(42)
        chai.expect(mymodule.calls).to.be.equal(2);
    })
})

describe('Export', () => {
    it('shouldGetAnswerAndIncrementCalls', () => {
        // TODO : create a file module in mymodule to pass this test
        var answser = mymodule.GetAnswer();
        mymodule.GetAnswer()
        chai.expect(answser).to.be.equal(42)
        chai.expect(mymodule.calls).to.be.equal(2);
    })
})