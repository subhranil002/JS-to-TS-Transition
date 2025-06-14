type pairOfNumbers = [any, any];
type pairOfNumberAndString = [number, string];

function linearSearch<T, R>(array: T[], x: T, y: R): [number, T] {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) return [i, array[i]];
    }
    console.log(y);
    return [-1, x];
}

// function linearSearchForString(array : string[], x : string) : pairOfNumberAndString {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] == x) return [i, array[i]];
//     }
//     return [-1, ""];
// }

const array: number[] = [1, 2, 5, 1, 2, 3, 54, 0, 6, -2, 3];
console.log(linearSearch<number, string>(array, 12, "abc"));

const stringArray: string[] = ["abc", "def", "ghi", "jk"];
console.log(linearSearch<string, number>(stringArray, "jk", -2));




class Stack<T> {
    private array: T[];
    constructor() {
        this.array = [];
    }

    push(x: T): void {
        this.array.push(x);
    }

    pop(): void {
        this.array.pop();
    }

    top(): T {
        return this.array[this.array.length - 1];
    }

    display(): void {
        console.log(this.array);
    }
}

const st = new Stack<number>();
st.push(1);
st.push(2);
st.push(3);
st.display();

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}





class node<T> {
    data: T;
    next: node<T> | null;
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: node<T> | null;

    constructor() {
        this.head = null;
    }

    addAtHead(x: T): void {
        if (this.head == null) {
            this.head = new node(x);
            return;
        }
        let newNode: node<T> = new node(x);
        newNode.next = this.head;
        this.head = newNode;
    }

    display(): void {
        let temp: node<T> | null = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let ll = new LinkedList<Person>();

ll.addAtHead(new Person("subh"));
ll.addAtHead(new Person("ra"));
ll.addAtHead(new Person("nil"));
ll.display();




interface customInterface<T1, T2> {
    property: T1;
    moreProperty: T2;
}

const obj : customInterface<string, number> = {
    property: "10",
    moreProperty: 20
}

console.log(obj);