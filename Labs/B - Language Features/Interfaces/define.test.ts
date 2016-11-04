import * as chai from 'chai'

describe('interface#definition', () => {
    it('define', () => {
        // TODO : define the interface Vehicule (Note : Vehicule should not be empty)


        class Car implements Vehicule {
            name:string;
            speed:number;
            constructor(name:string) {
                this.name=name;
            }
        }

        
        var lbl=new Car();
        lbl.name='mylabel';
        chai.expect(lbl).to.be.an('object');
        chai.expect(lbl.name).to.be.equal('mylabel');
        chai.expect(lbl.select()).to.be.true;;
    })
})