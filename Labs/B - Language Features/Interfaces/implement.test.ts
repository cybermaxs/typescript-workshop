import * as chai from 'chai'

describe('interface#implement', () => {
    it('class', () => {
        interface UIControl {
            name:string;
            select() : boolean;
        }

        // TODO : implement this interface in a class name Label and fix the test
        class Label implements UIControl {
            name:string;
            select() {
                return true;
            }
        }
        
        var lbl=new Label();
        lbl.name='mylabel';
        chai.expect(lbl).to.be.an('object');
        chai.expect(lbl.name).to.be.equal('mylabel');
        chai.expect(lbl.select()).to.be.true;;
    })
    it('function', () => {
        interface Select {
            (source: string): string;
        }
        // TODO : create an uppercase selector called fn (ie JUST a function) from this interface
        var fn : Select = s=> s.toUpperCase();
        var actual = fn("foobar");
        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.equal('FOOBAR');
    })
    it('indexer', () => {
        class MyType {
            constructor(public someVal: string) { }
        }

        interface IDictionary {   
            [name: string]: MyType;
        }

        var collection: IDictionary = {};

        // TODO : add new items to collection to fix this test 
        collection['item1']=new MyType('foobar');

        var actual = collection['item1'];
        chai.expect(actual).to.be.an('object');
        chai.expect(actual.someVal).to.be.equal('foobar');
    })
})