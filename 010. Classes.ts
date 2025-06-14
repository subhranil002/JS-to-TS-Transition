class Product {
    public name: string; // public members are read/write from anywhere
    private price: number | undefined; // private members are read/write from inside the class
    readonly category: string; // readonly members are cannot be reassigned
    readonly tags: string[];

    constructor(name: string, category: string, price?: number) {
        this.name = name;
        this.category = category; // 1st time we are assigning a value to a readonly member
        this.price = price;
        this.tags = ["electronics", "mobile"];
    }

    display(): void {
        this.tags[0] = "Something"; // Though we are not allowed to reassign the value of readonly members we can still change the value of the object members
        console.log("Product name is", this.name, " and price is ", this.price);
    }

    setPrice(p: number): void {
        if (p <= 0) return;
        this.price = p;
    }
}

const p1 = new Product("Iphone", "electronics", 1000000);
p1.setPrice(-20);
const arr = [10, 20];
arr[0] = 0;
console.log(p1);
