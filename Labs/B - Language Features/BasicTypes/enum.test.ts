import * as chai from 'chai'

// tests : do not change anything
describe('enum', ()=> {
    it('defineEnumAsInt', ()=> {
        // TODO : define an enum with 3 values (Zero, One, Two) to fix this test
        enum MyEnum {
            Zero,
            One,
            Two
        }
        chai.expect(MyEnum.Zero).to.be.equal(0);
        chai.expect(MyEnum.One).to.be.equal(1);
        chai.expect(MyEnum.Two).to.be.equal(2);
    })
    it('defineEnumAsString', ()=> {
        // TODO : define an enum with 3 values (Zero, One, Two) to fix this test
        enum MyEnum {
            Zero,
            One,
            Two
        }
        chai.expect(MyEnum["Zero"]).to.be.equal(0);
        chai.expect(MyEnum["One"]).to.be.equal(1);
        chai.expect(MyEnum["Two"]).to.be.equal(2);
    })
    it('startingIndex', ()=> {
        // TODO : define an enum 'MyEnum' with 2 values (Ten, Eleven) to fix this test
        enum MyEnum {
            Ten=10,
            Eleven
        }
        chai.expect(MyEnum.Ten).to.be.equal(10);
        chai.expect(MyEnum.Eleven).to.be.equal(11);
    })

    it('openEnded', ()=> {

        enum Number {
            Zero,
            Two,
            Four
        }       
        // TODO : add a new enum with the same name and 2 values (One, Three) 
        // Note : do not change the existing declaration
        enum Number {
            One=5,
            Three
        }
        chai.expect(Number.Zero).to.be.equal(0);
        chai.expect(Number.One).not.to.be.undefined;
        chai.expect(Number.Three).not.to.be.undefined;
    })
})

describe('flags', ()=> {
    it('defineAsFlags', ()=> {
        // TODO : add a new value All in 'FileAccess' (with Flags) to fix this test
        enum FileAccess {
            Read    = 1,
            Write   = 2,
            All     = Read | All
        }

        var myaccess = FileAccess.All;
        var hasRead = (myaccess & FileAccess.Read) == FileAccess.Read;
        chai.expect(hasRead).to.be.true;
    })
})
