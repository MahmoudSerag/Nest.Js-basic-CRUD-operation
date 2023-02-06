export class Product {
  constructor(
    public id: string,
    public name: string,
    public title: string,
    public description: string,
    public price: number,
  ) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}
