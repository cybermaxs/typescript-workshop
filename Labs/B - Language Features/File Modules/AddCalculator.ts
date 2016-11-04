import {Calculator} from './Calculator'

class AddCalculator implements Calculator {
    Calculate (opA:number, opB:number) {
        return opA+opB;
    }
    multiply (opA:number, opB:number) {
        return opA*opB;
    }
    subsctract (opA:number, opB:number) {
        return opA-opB;
    }
}

export default AddCalculator;