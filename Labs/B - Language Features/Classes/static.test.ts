import * as chai from 'chai'

describe('class#static', () => {
    it('staticField', ()=> {
        // TODO : add a static field 'instances' that counts the number of objects created
        class Something {      
            public static instances:number=0;
            constructor() {        
                Something.instances++; 
            } 
        }
        
        new Something()
        new Something()
        chai.expect(Something.instances).to.be.equal(2);
    })
    it('staticMethod', ()=> {
        // TODO : add a static method 'run' to Program that returns 0
        class Program {      
            static run() {
                return 0;
            }
        }

        var actual = Program.run();
        chai.expect(actual).to.be.equal(0);
    })
})