import {Calculator} from './Calculator'

class AddCalculator implements Calculator {
    Calculate (left:number, right:number) {
        return left+right;
    }
}

export default AddCalculator;