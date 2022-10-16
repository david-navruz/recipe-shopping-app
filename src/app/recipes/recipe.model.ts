export class Recipe {

  public recipeName:string;
  public description:string;
  public imagePath:string;

  constructor(recipeName:string, description:string, imagePath:string){
    this.recipeName = recipeName;
    this.description = description;
    this.imagePath = imagePath;
  }

}
