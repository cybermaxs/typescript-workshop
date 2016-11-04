import * as chai from 'chai'

describe('class#implement', () => {
    it('interface', () => {
        interface Shape {
            size : number;
        }
               
        // TODO : implements this interface in a class named 'Rectangle'
        
        var r = new Rectangle(100,200);
        chai.expect(r).to.be.an('object');
        chai.expect(r.size).not.to.be.equal(0);
    })
    it('extend', () => {
        class Vector2D {
            constructor(public x:number, public y:number) {

            }
        }
        // TODO : extend the class Vector2D with a third property z in a new class Vector3D
        
        var v = new Vector3D(100,200, 300);
        
        chai.expect(v).to.be.an('object');
        chai.expect(v.x).to.be.equal(100);
        chai.expect(v.y).to.be.equal(200);
        chai.expect(v.z).to.be.equal(300);
    })
    it('abstract', ()=> {

        abstract class Generator {      
            abstract IsTrue() : boolean; 
        }


        // TODO : implements the abstract class in a class named 'TrueGenerator'
        var generator = new TrueGenerator();
        var actual = generator.isTrue();
        chai.expect(actual).to.be.true;
    })
})