export class Comment{ // Class za6toto 6te createvame comments
  static nextId = 0;
  id = ++Comment.nextId;
  constructor(public author: string,
  public text: string){}
} 

