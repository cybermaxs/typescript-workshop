import * as chai from 'chai'

describe('rest', () => {
    it('callMethodWithRestParams', () => {
        function iTakeItAll(first, second, ...allOthers) {
                return allOthers; 
        }

        // TODO : call iTakeItAll to fix this test
        var actual = iTakeItAll('my', 'name');

        chai.expect(actual).to.be.deep.equal(['is', 'Carl']);
    })
    it('implementRestParams', () => {

        // TODO : call this method (Note : do not use array methods)
        function iTakeItAll(first, second, third, fourth, fifth) {
                return first; 
        }

        var actual = iTakeItAll(1, 2, 4, 8, 16);
        chai.expect(actual).to.be.deep.equal([4,8, 16]);
    })
})
