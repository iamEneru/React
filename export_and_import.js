// person.js
const person = {
  name: "Max",
};

export default person;

// utility.js
export const clean = () => {};
export const baseData = 10;

// app.js
import person from "./person.js";
import prs from "./person.js";

import { baseData } from "./utility.js";
import { clean } from "./utility.js";

// default export
// import person from './person.js'
// import prs from './person.js'

// named export
// import { smth } from './utility.js'
// import { smth as Smth } from './utility.js'
// import * as bundled from './utility.js'