import * as chai from 'chai'

describe('generic', () => {
    it('reverse', () => {
        function reverse<T>(items: T[]): T[] {
            // TODO : fill the reverse method to fix this test
        }

        var actual = reverse([1,2,3,4,5]);
        chai.expect(actual).to.be.an('array');
        chai.expect(actual).to.be.deep.equal([5,4,3,2,1]);
    })
    it('instantateGenericClass', () => {
        // TODO : fill Result<T> class to fix this test
        class Result<T> {

        }

        var s_actual = new Result(false, '{error: 42}');
        chai.expect(s_actual).to.be.an('object');
        chai.expect(s_actual.wasSuccessful).to.be.false;
        chai.expect(s_actual.data).to.be.equal('{error: 42}');

        var n_actual = new Result(true, 200);
        chai.expect(n_actual).to.be.an('object');
        chai.expect(n_actual.wasSuccessful).to.be.true;
        chai.expect(n_actual.data).to.be.equal(200);
    })
    it('implementGenericInterface', () => {
       interface IRunnable<T, U> {
            run(input: T): U;
        }

        // TODO : implement this interface in a new class Runnable (string, number);

        var runnable: IRunnable<string, number> = new Program();
        var result = runnable.run('hello');
        chai.expect(result).to.be.equal(123456789);
    })
})
