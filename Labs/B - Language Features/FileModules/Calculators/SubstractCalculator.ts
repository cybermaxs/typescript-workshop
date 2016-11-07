import {Calculator} from './Calculator'

class SubstractCalculator implements Calculator {
    Calculate (left:number, right:number) {
        return left-right;
    }
}

export default SubstractCalculator;