import { Injectable } from '@angular/core';
import { Decision } from 'app/shared/decision';

@Injectable()
export class DecisionWithCompareArray {
    constructor(public decision:Decision,
                public compareArray: number[][]){
                }

    get _decision():Decision{
        return this.decision;
    }
    set _decision(decision:Decision)
    {
        this.decision = decision;
    }

    get _compareCriteria():number[][]{
        return this.compareArray;
    }
    set _compareCriteria(compareCriteria:number[][])
    {
        this.compareArray = compareCriteria;
    }
}