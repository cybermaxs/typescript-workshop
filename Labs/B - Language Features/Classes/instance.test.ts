import * as chai from 'chai'

describe('class#instance', () => {
    it('new', () => {
        class Program {
            private name:string;
            constructor (name:string) {
                this.name=name;
            }
            HasName():boolean {
                return !!this.name;
            }
        }

        // TODO : create an instance of Program named 'myprogram' to fix these tests
        var myprogram = new Program('carliot');
        chai.expect(myprogram).to.be.an('object');
        chai.expect(myprogram.HasName()).to.be.true;
    })
})