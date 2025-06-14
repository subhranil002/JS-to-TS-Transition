function sum(
    a: number,
    b?: number /** b is a optional parameter */
): number /** return type */ {
    return a + (b || 0);
}

console.log(sum(10));

function fun(): void {
    // return type is void
    console.log("hello");
}

console.log(fun());

function multi(): number | string {
    // return type is union of number and string
    return "hello";
}

console.log(multi());
