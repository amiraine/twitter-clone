export class Tweet {
  public replies: number = 0;
  public retweets: number = 0;
  public likes: number = 0;
  constructor(public name:string, public username:string,public tweet: string){ }
}
