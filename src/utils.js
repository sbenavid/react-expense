console.log('estoy en la biblioteca de utilerias');

const square = (x) => x * x;

const add = (a,b) => a + b;
// default method
const substract = (a, b) => a - b;

export { square, add, substract as default };
