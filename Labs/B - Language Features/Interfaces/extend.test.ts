import * as chai from 'chai'

describe('interface#extend', () => {
    it('extendInterface', () => {
        interface Shape {
            color: string;
        }

        // TODO : extend Shape to a new interface Square with a new property sideLength

        let square:Square = { color:'n/a', sideLength:0};

        chai.expect(square).to.be.an('object');
        chai.expect(square.color).to.be.equal('blue');
        chai.expect(square.sideLength).to.be.equal(10);
    })
    it('extendClass', () => {
        class ControlBase {
            name: string;
        }

        interface SelectableControl extends ControlBase {
            select():boolean;
        }

        // TODO : implement SelectableControl in a new class Label

        let lbl:SelectableControl=new Label('mylabel');

        chai.expect(lbl).to.be.an('object');
        chai.expect(lbl.name).to.be.equal('mylabel');
        chai.expect(lbl.select()).to.be.true;
    })
})