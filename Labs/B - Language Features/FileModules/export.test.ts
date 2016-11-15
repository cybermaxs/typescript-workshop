import * as chai from 'chai'
import * as calc from './calculators'
import * as mymodule from './mymodule'

describe('export', () => {
    it('shouldGetAnswerAndIncrementCalls', () => {
        // TODO : create a file module in mymodule.ts to pass this test
        // DO NOT Change this test
        var answser = mymodule.GetAnswer();

        chai.expect(answser).to.be.equal(42)
    })
    it('re-export', () => {
        // TODO : alter allcalculators.ts to reexport all calculators
        // DO NOT Change this test
        var sub = new calc.SubstractCalculator();
        var actual = sub.Calculate(1231432543,1231432501);
        
        chai.expect(actual).to.be.equal(42)
    })
})