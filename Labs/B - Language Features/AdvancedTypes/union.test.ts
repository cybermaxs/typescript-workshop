import * as chai from 'chai'

describe('union', () => {
    it('arguments', () => {

        // TODO : extend the command parameter with an union type to fix errors and this test
        function trim(command: string /* FILL_ME_IN */) {
            var line = '';
            if (typeof command === 'string') {
                line = command.trim();
            } else {
                line = command.join(' ').trim();
            }
            return line;
        }

        var n_actual = trim('  hello  ');
        chai.expect(n_actual).to.be.an('string');
        chai.expect(n_actual).to.be.equal('hello');
        var s_actual = trim(['  hello', 'world', '!  ']);
        chai.expect(s_actual).to.be.an('string');
        chai.expect(s_actual).to.be.equal('hello world !');
    })
    it('shape', () => {
        class Bird {
            constructor(public name:string) {}
            fly()  : void {
                console.log('flying');
            }
        }

        class Fish {
            constructor(public name:string) {}
            swim()  : void {
                console.log('swimming');
            }
        }

        // TODO : create a function petFactory that returns an union Fish or Bird to fix this test
        function petFactory(flying:boolean) {

        }
        

        var bird = petFactory(true);
        chai.expect(bird).to.be.an('object');
        chai.expect(bird.name).to.be.equal('Angry Bird');
        var fish = petFactory(false);
        chai.expect(fish).to.be.an('object');
        chai.expect(fish.name).to.be.equal('Nemo');
      
    })
})
