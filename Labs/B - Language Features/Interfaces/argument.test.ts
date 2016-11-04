import * as chai from 'chai'

describe('interface#arguments', () => {
    it('callInline', () => {
        var fn= function(control: { label: string }) { 
            return control.label;
        };
        // TODO : call this method
        var actual = fn(/*FILL_ME_IN */);

        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.an('string');
    })
    it('callViaInterface', () => {
        interface Control {
            label: string
        }
        // TODO : call this method
        var fn= function(control:Control) { 
            return control.label;
        };

         // TODO : call this method
        var actual = fn(/*FILL_ME_IN */);

        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.an('string');
    })
    it('optional', () => {
        interface MyConfig {
            path:string
            debug?: boolean,
            recursive?:boolean,
            pattern?:string
        }

        var run= function(config:MyConfig) { 
            let command = config.path
            if (config.debug) {
                command+= " --debug";
            }
            if (config.recursive) {
                 command+= " --recursive";
            }
            if (config.pattern) {
                 command+= " --grep="+config.pattern;
            }
            return command;
        };

        // TODO : call the method run with the correct parameters (Replace FILL_ME_IN)
        //simple call
        var command = run({path:"FILL_ME_INFO"});
        chai.expect(command).to.be.an('string');
        chai.expect(command).to.be.equal('myprogram.exe');
        //simple call
        var command = run({path:"FILL_ME_INFO"});
        chai.expect(command).to.be.an('string');
        chai.expect(command).to.be.equal('myprogram.exe --debug --grep=**/*test.js');
    })
})