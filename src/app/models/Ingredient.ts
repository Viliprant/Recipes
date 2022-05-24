export default class Ingredient {
    public Name: String = "";
    public Quantity: Number = 0;

    constructor(name: string, quantity: number = 1) {
        this.Name = name;
        this.Quantity = quantity;
    }
}