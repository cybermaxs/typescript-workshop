import * as chai from 'chai'

describe('class#implement', () => {
    it('interface', () => {
        interface Shape {
            size : number;
        }

        class Rectangle implements Shape {
            size:number;
            constructor(width:number,length:number) {
                this.size=width*length;
            }
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
        class Vector3D extends Vector2D {
            constructor(public x:number, public y:number, public z:number) {
                super(x,y);
            }
        }
        
        var v = new Vector3D(100,200, 300);
        
        chai.expect(v).to.be.an('object');
        chai.expect(v.x).to.be.equal(100);
        chai.expect(v.y).to.be.equal(200);
        chai.expect(v.z).to.be.equal(300);
    })
    it('super', () => {
        class WelcomeBase {
            protected GetWelcomeMessage() {
                return 'hello world';
            }
        }

        class Program extends WelcomeBase {
            run(){
                return super.GetWelcomeMessage();
                // TODO : call the base class here to return the welcome message
            }
        }
                   
        var program = new Program();
        var actual = program.run();
        chai.expect(actual).to.be.equal('hello world');
    })
    it('abstract', ()=> {

        abstract class Generator {      
            abstract IsTrue() : boolean; 
        }

        class TrueGenerator implements Generator {
            IsTrue() {
                return true;
            }
        }


        // TODO : implements the abstract class in a class named 'TrueGenerator'
        var generator = new TrueGenerator();
        var actual = generator.IsTrue();
        chai.expect(actual).to.be.true;
    })
})