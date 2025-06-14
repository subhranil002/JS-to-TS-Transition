/* Types in typescript

    Below are all primitive types in TS 

    string -> store text
    number -> integers, real
    boolean
    undefined
    null
    bigint 
    symbol

    var <variable_name> : number = <value>; // type annotation or type signature

*/

let id: number = 5;
let firstName = "Subhranil"; // TS understands firstName will store strings
// firstName = 12; TSC throws error
const lastName: string = "Chakraborty";
// lastName = 13; TSC throws error
console.log(id, firstName);

//  Union of types
let userId: number | string = "hello";
userId = 10;

let x: any = 10; 
x = "subh";
x = false;
console.log(x);
