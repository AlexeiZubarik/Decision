export class Decision {
  public id: number;
  public name: string;
  public note: string;
  public decisionArray: DecisionArray[];
  constructor(){}
  

  get _id():number{
    return this.id
  }
  set _id(id:number)
  {
    this.id = id;
  }
  get _name():string{
    return this.name
  }
  set _name(name:string)
  {
    this.name = name;
  }
  get _note():string{
    return this.note
  }
  set _note(note:string)
  {
    this.note = note;
  }
  get _decisionArray():DecisionArray[]{
    return this.decisionArray
  }
  set _decisionArray(decisionArray:DecisionArray[])
  {
    this.decisionArray = decisionArray;
  }
}

export class DecisionArray {
  constructor(
    public id: number,
    public name: string,
    public url: string = '',
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
