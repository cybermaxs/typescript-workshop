import * as chai from 'chai'

describe('interface#implement', () => {
    it('implementInterface', () => {
        interface UIControl {
            name:string;
            select() : boolean;
        }

        // TODO : implement this interface in a class name Label and fix the test

        
        var lbl=new Label();
        lbl.name='mylabel';
        chai.expect(lbl).to.be.an('object');
        chai.expect(lbl.name).to.be.equal('mylabel');
        chai.expect(lbl.select()).to.be.true;;
    })
    it('functionCanImplementInterface', () => {
        interface Select {
            (source: string): string;
        }
        // TODO : create an uppercase selector called fn (ie JUST a function) from this interface

        var actual = fn("foobar");
        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.equal('FOOBAR');
    })
})