export class Decision {
  id: number;

  constructor(
    public title: string,
    public decisionArray: DecisionArray[]
  ) {}
}

export class DecisionArray {
  id: number;

  constructor(
    public name: string,
    public finalRate: number = 1,
    public criteriaArray: CriteriaArray[] = []
  ) {}
}

export class CriteriaArray {
  id: number;

  constructor(
    public name: string = '',
    public rate: number = 1,
    public value: string = '',
    public valueRate: number = 1,
    public criterionPriority: number = 1,
    public valuePriority: number = 1
  ) {}
}