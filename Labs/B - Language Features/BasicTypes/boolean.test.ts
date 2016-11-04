describe('boolean', ()=> {
    it('assignToLet', ()=> {
        // TODO : assign a value to the variable to fix this test
        let theboolean = 1;

        chai.expect(theboolean).to.be.true;
    })
    it('assignToVar', ()=> {
        // TODO : review the compiler error and fix this test
        var theboolean:boolean = "false";

        chai.expect(theboolean).to.be.false;
    })
})