// Import modules
import {Date} from './date.js';
import {Produce} from './produce.js';
import {Recipe} from './recipe.js';
import {UI} from './ui.js';

// Instantiate classes
const date = new Date();
const produce = new Produce();
const recipe = new Recipe();
const ui = new UI();

// Event listeners

// Console.log tests
console.log(date.print);
console.log(produce.print);
console.log(recipe.print);
console.log(ui.print);