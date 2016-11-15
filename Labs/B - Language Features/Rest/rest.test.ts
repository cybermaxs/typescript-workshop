import * as chai from 'chai'

describe('rest', () => {
    it('callMethodWithRestParams', () => {
        function iTakeItAll(first, second, ...allOthers) {
                return allOthers; 
        }

        // TODO : call iTakeItAll to fix this test
        var actual = iTakeItAll('my', 'name', 'is', 'Carl');

        chai.expect(actual).to.be.deep.equal(['is', 'Carl']);
    })
    it('implementRestParams', () => {

<<<<<<< 0d607390be670129a6b46ef27e02579ce90d000a
        // TODO : change parameters to fix this test (Note : do not use array methods)
        function iTakeItAll(first, second, third, fourth, fifth) {
=======
        // TODO : update this method to fix this test (Note : do not use array methods)
        function iTakeItAll(first, second, ...all) {
>>>>>>> more answers
                return all; 
        }

        var actual = iTakeItAll(1, 2, 4, 8, 16);
        chai.expect(actual).to.be.deep.equal([4,8, 16]);
    })
})
