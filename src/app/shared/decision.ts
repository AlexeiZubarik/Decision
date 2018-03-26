export class Decision {
  id: number;

  constructor(
    public title: string,
    public dateCreate: Date,
    public note: string,
    public decisionArray: DecisionArray[],
    public compareCriteria: any []
  ) {}
}

export class DecisionArray {
  constructor(
    public id: number,
    public name: string,
    public finalRate: number = 1,
    public criteriaArray: CriteriaArray[] = []
  ) {}
}

export class CriteriaArray {
  constructor(
    public id: number,
    public name: string = '',
    public rate: number = null,
    public value: string = null,
    public valueRate: number = null,
    public criterionPriority: number = null,
    public valuePriority: number = null
  ) {}
}
