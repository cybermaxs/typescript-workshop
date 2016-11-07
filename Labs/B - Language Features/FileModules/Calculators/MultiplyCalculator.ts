import {Calculator} from './Calculator'

class MultiplyCalculator implements Calculator {
    Calculate (left:number, right:number) {
        return left*right;
    }
}

export default MultiplyCalculator;