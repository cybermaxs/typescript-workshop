import {Calculator} from './Calculator'

export class SubstractCalculator implements Calculator {
    Calculate (left:number, right:number) {
        return left-right;
    }
}