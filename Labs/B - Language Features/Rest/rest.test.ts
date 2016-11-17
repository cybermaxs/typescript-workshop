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

        // TODO : update this method to fix this test (Note : do not use array methods)
        function iTakeItAll(first, second, ...all) {
<<<<<<< HEAD

=======
>>>>>>> 1d4c19808b4a957e333aa3099939cd17269026e9
                return all; 
        }

        var actual = iTakeItAll(1, 2, 4, 8, 16);
        chai.expect(actual).to.be.deep.equal([4,8, 16]);
    })
})
