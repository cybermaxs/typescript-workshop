import {Calculator} from './Calculator'

class SubstractCalculator implements Calculator {
    Calculate (opA:number, opB:number) {
        return opA-opB;
    }
}

export default SubstractCalculator;