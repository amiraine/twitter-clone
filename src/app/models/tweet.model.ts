export class Tweet {
  constructor(
    public name:string,
    public username:string,
    public icon: string, 
    public tweet: string,
    public img:string,
    public replies: number,
    public retweets: number, 
    public likes: number){ }
}
