import {Calculator} from './Calculator'

class MultiplyCalculator implements Calculator {
    Calculate (opA:number, opB:number) {
        return opA*opB;
    }
}

export default MultiplyCalculator;