import * as chai from 'chai'

// tests : do not change anything
describe('function#call', () => {
    it('simple call', () => {
        // TODO : call myconverter with correct parameter to fix this test
        var myConverter = function (s: string, radix: number) {
            return parseInt(s, radix);
        };
        var actual = myConverter('FILL_ME_IN');
        chai.expect(actual).to.be.an('number');
        chai.expect(actual).to.be.equal(12);
    })
    it('complex call', () => {
        // TODO : call log with correct parameter to fix this test
        var log = function (log: { ts: number, msg: string }) {
            return log.ts.toString() + '=>' + log.msg;
        };

        chai.expect(actual).to.be.an('string');
        chai.expect(actual).to.be.equal('123 => hello');
    })
    it('call with optional parameter', () => {
        // TODO : call fn to fix this test + warning
        var fn = function (a: number, b: number = 99) { return a };

        var actual = "CALL_FN";
        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.equal(2)
    })
    it('call overload', () => {
        // TODO : newPoint with correct parameters to fix this test
        function newPoint(x: number, y: number): { x: number, y: number };
        function newPoint(x: number, y: number, z: number): { x: number, y: number, z: number };
        function newPoint(x: number, y: number, z?: number): any {
            if (!z) {
                return { x: x, y: y };
            }
            else {
                return {
                    x: x,
                    y: y,
                    z: z || 0
                };
            }
        }

        let point2D = newPoint(10,20);
        chai.expect(point2D).to.be.an('object');
        chai.expect(point2D.x).to.be.equal(10);
        chai.expect(point2D.y).to.be.equal(20);

        let point3D = newPoint(10,20);
        chai.expect(point3D).to.be.an('object');
        chai.expect(point3D.x).to.be.equal(10);
        chai.expect(point3D.y).to.be.equal(20);
        chai.expect(point3D.z).to.be.equal(30);
    })
})

