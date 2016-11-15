import {Calculator} from './Calculator'

export class MultiplyCalculator implements Calculator {
    Calculate (left:number, right:number) {
        return left*right;
    }
}

