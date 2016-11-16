import * as chai from 'chai'

describe('interface#define', () => {
    it('classic', () => {
        // TODO : define the interface Vehicule (Note : Vehicule should not be empty)
        interface Vehicule {
            name: string;
            speed: number;
            accelerate(speed: number);
        }
        class Car implements Vehicule {
            name: string;
            speed: number;
            constructor(name: string) {
                this.name = name;
                this.speed = 0;
            }
            public accelerate(speed: number) {
                this.speed=speed;
                return speed;
            }
        }

        var car: Vehicule = new Car('Kit');

        chai.expect(car).to.be.an('object');
        chai.expect(car.name).to.be.equal('Kit');
        chai.expect(car.accelerate(50)).to.be.equal(50);
    })
    it('inline', () => {
        var car: {
            name: string,
            speed: number
        }

        // TODO : instanciate a new car
        var car = {name:'Kit', speed:75};

        chai.expect(car).to.be.an('object');
        chai.expect(car.name).to.be.equal('Kit');
        chai.expect(car.speed).to.be.equal(75);
    })
    it('optional', () => {
        interface MyConfig {
            path: string
            debug?: boolean,
            recursive?: boolean,
            pattern?: string
        }

        var run = function (config: MyConfig) {
            let command = config.path
            if (config.debug) {
                command += " --debug";
            }
            if (config.recursive) {
                command += " --recursive";
            }
            if (config.pattern) {
                command += " --grep=" + config.pattern;
            }
            return command;
        };

        // TODO : call the method run with the correct parameters (Replace FILL_ME_IN)
        //simple call
        var command = run({ path: 'myprogram.exe' });
        chai.expect(command).to.be.an('string');
        chai.expect(command).to.be.equal('myprogram.exe');
        //simple call
        var command = run({ path: 'myprogram.exe', debug:true, pattern: '**/*test.js'});
        chai.expect(command).to.be.an('string');
        chai.expect(command).to.be.equal('myprogram.exe --debug --grep=**/*test.js');
    })
    it('readonly', () => {
        interface Point {
            readonly x: number;
            readonly y: number;
        }
        var point:Point = {x:10, y:10};
        // TODO : create a new point WITHOUT declare a new class
        chai.expect(point).to.be.an('object');
        chai.expect(point.x).to.be.equal(10);
        chai.expect(point.y).to.be.equal(10);
    })
})