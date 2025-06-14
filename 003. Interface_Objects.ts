/**
 *
 * How to define types for objects
 *  - classes -> data members, member functions
 *  - interface -> its a contract
 */

// class Car {
//     name : string
//     constructor(name : string) {
//         this.name = name;
//     }

//     display() {
//         console.log(this.name);
//     }
// };

interface Product {
    name: string;
    price: number;
    brand: string;

    display(): void;
}

let p1: Product = {
    name: "Iphone",
    price: 100000,
    brand: "Apple",
    display: () => {
        console.log("display");
    },
};

console.log(p1);

/**
 * We want to define a common type for authentication forms
 * this common type will take multiple parameters
 *  - name of the form
 *  - how to handle submission of the form
 *  - how to handle reset of the form
 *  - what should be the text of the submitting button
 */

interface AuthForm {
    name: string;
    submitButtonText: string;
    onReset: (e: any) => void;
    onSubmit: (e: any) => void;
}

const loginForm: AuthForm = {
    name: "Login form",
    submitButtonText: "Login",
    onReset: (e) => {
        // some implementation
    },
    onSubmit: (e) => {
        // some implementation
    },
};

console.log(loginForm);
