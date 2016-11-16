import * as chai from 'chai'

describe('interface#extend', () => {
    it('extendInterface', () => {
        interface Shape {
            color: string;
        }

        // TODO : extend Shape to a new interface Square with a new property sideLength
        interface Square extends Shape {
            sideLength:number;
        }

        let square:Square = { color:'blue', sideLength:10};

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
        class Label implements SelectableControl {
            constructor(public name:string) {

            }
            select() {
                return true;
            }
        }

        let lbl:SelectableControl=new Label('mylabel');

        chai.expect(lbl).to.be.an('object');
        chai.expect(lbl.name).to.be.equal('mylabel');
        chai.expect(lbl.select()).to.be.true;
    })
})