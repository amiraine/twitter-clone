export class User {
  public tweets:number = 0;
  public followers:number = 0;
  public following:number = 0;
  constructor(public displayName: string, public handle: string){ }
}
