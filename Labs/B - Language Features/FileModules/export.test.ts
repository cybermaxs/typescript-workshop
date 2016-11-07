import * as chai from 'chai'
import * as mymodule from './mymodule'

describe('Export', () => {
    it('shouldGetAnswerAndIncrementCalls', () => {
        // TODO : create a file module in mymodule to pass this test
        var answser = mymodule.GetAnswer();
        mymodule.GetAnswer()
        chai.expect(answser).to.be.equal(42)
        chai.expect(mymodule.calls).to.be.equal(2);
    })
})