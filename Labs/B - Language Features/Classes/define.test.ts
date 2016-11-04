import * as chai from 'chai'

describe('class#define', () => {
    it('defineClass', () => {
        // TODO : define class Point with two properties x/y and a constructor
        var p = new Point(100,200);
        
        chai.expect(p).to.be.an('object');
        chai.expect(p.x).to.be.equal(100);
        chai.expect(p.y).to.be.equal(200);
    })
    it('defineClassUsingConstructor', () => {
        // TODO : define a class Point having two properties x/y by just using a constructor (Help : use access modifiers in ctor) 
        var p = new Point(100,200);
        
        chai.expect(p).to.be.an('object');
        chai.expect(p.x).to.be.equal(100);
        chai.expect(p.y).to.be.equal(200);
    })
    it('readonly', () => {
        class Location {
            readonly x:number;
            readonly y:number;
        }

        // TODO : add a constructor to Location to fill readonly proerties
        var loc = new Location();

        chai.expect(loc).to.be.an('object');
        chai.expect(loc.x).to.be.equal(10);
        chai.expect(loc.y).to.be.equal(10);
    })
})