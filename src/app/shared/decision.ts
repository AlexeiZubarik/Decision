export class Decision {
  id: number;

  constructor(
    public title: string,
    public dateCreate: Date,
    public note: string,
    public decisionArray: DecisionArray[]
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
    public rate: number = 1,
    public value: string = '',
    public valueRate: number = 1,
    public criterionPriority: number = 1,
    public valuePriority: number = 1
  ) {}
}
