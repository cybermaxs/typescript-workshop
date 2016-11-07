import * as chai from 'chai'

// tests : do not change anything
describe('For...Of', () => {
    it('forofArray', () => {
        // TODO : use for...of to fix this test
        var results = [];
        var someArray = [9, 2, 5]; 
        for (var item in someArray) {
           results.push(item); // 0,1,2 
        }

        chai.expect(results).to.be.deep.equal([9, 2, 5]);
    })
    it('forOfString', () => {
        // TODO : use for...of to fix this test
        var results = [];
        var hello = "hello"; 
        for (var char in hello) {
            results.push(char);
        }
         chai.expect(results).to.be.deep.equal(['h','e','l','l','o']);
    })
})

