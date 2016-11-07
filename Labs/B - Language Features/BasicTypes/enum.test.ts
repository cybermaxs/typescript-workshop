import * as chai from 'chai'

// tests : do not change anything
describe('Enum', ()=> {
    it('defineEnumAsInt', ()=> {
        // TODO : define an enum with 3 values (Zero, One, Two) to fix this test

        chai.expect(MyEnum.Zero).to.be.equal(0);
        chai.expect(MyEnum.One).to.be.equal(1);
        chai.expect(MyEnum.Two).to.be.equal(2);
    })
    it('defineEnumAsString', ()=> {
        // TODO : define an enum with 3 values (Zero, One, Two) to fix this test

        chai.expect(MyEnum["Zero"]).to.be.equal(0);
        chai.expect(MyEnum["One"]).to.be.equal(1);
        chai.expect(MyEnum["Two"]).to.be.equal(2);
    })
    it('startingIndex', ()=> {
        // TODO : define an enum 'MyEnum' with 2 values (Ten, Eleven) to fix this test

        chai.expect(MyEnum.Ten).to.be.equal(10);
        chai.expect(MyEnum.Eleven).to.be.equal(11);
    })

    it('defineTwice', ()=> {

        enum Number {
            Zero,
            Two,
            Four
        }       
        // TODO : define a new enum with the same name and 2 values (One, Three) 
        // Note : do not change the existing declaration

        chai.expect(Number.Zero).to.be.equal(0);
        chai.expect(Number.One).not.to.be.undefined;
        chai.expect(Number.Three).not.to.be.undefined;
    })
})

describe('Flags', ()=> {
    it('defineAsFlags', ()=> {
        // TODO : define an enum 'MyEnum' with Flags to fix this test

        chai.expect(MyEnum.Ten).to.be.equal(10);
        chai.expect(MyEnum.Eleven).to.be.equal(11);
    })
})