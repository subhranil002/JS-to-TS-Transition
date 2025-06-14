/**
 *
 * arrays
 *
 * let <variable_name> : type[]  = [val1, val2, ....];
 *
 */

let ids: number[] = [1, 2, 3, 4, 5];
let hetero: any[] = [1, 2, false, "123", null];

let data: (number | string | boolean)[] = [1, true, "subh"];

console.log(ids, hetero, data);

// arrays in form of typed tuple
let data1: [number, string, boolean] = [1, "subh", true];
