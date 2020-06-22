## [](#coding-style)Coding Style
We generally follow the [ESLint](https://eslint.org/docs/rule) ES6 rules.
This code of conduct will outline some of the most important rules and showcase some of the use-cases.

It is recommended to use Visual Studio Code with all recommended Extensions when working on code
with the agency or under the agency’s supervision. Use the built-in code quality
improvement tool `Prettier` as often as possible. It does not only help you to keep
focus and be more efficient, it also improves the code quality tremendously.

All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

The following rules are one of the most important.
- Try to keep the line length below `80`. The maximum line length is `120`.

**Bad**
```typescript
let foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };
```

**Good**
```typescript
let foo = {
 "bar": "This is a bar.",
 "baz": { "qux": "This is a qux" },
 "easier": "to read",
};
```

- Use double quotes instead of single quotes

**Bad**
```typescript
let test = 'test';
```
**Good**
```typescript
let test = "test";
```

- These are the allowed comments standards:
```typescript
/**
 * This is a multiline header comment.
 */
 
/**
 * This is a multiline header comment.
 * It has multiple sentences.
 */
 
 /*
  * This is a multiline comment
  */
 
 /*
  * This is a multiline comment.
  * It has multiple sentences.
  */
 
//> This is a header and can introduce following, related comments

/* This is a single line comment preffered to use in Typescript */

// This is a single line comment preffered to use in Javascript

// This is a single line comment preffered to use in Javascript. 
// It has multiple sentences.

/**
 * This is a multiline header comment which contains single line JSDoc tags.
 * @description And that's why you should never add dots here
 * @description Or here
 */
 
 /**
  * This is a multiline header comment which contains multiline JSDoc tags.
  * @description And that's why you should 
  *              add dots here.
  * @description Or
  *              here.
  */
```

- Use regions if you have more than 3 distinct areas in your file.
- (Such as imports, classes, functions, exports, …). This helps to organize the file.

```typescript
//#region > Classes
/**
 * @class Short class description
 * @description Longer class description
 */
class Foo {
  constructor()
}
//#endregion
```
- These are the default regions to use for organizing:
    * Imports
    * Interfaces
    * Classes
    * Functions
    * Exports
    
- Custom regions can also be definied if none of the above regions fits for the case.

- A class should be structued using static, abstract fields & methods
```typescript
//> Static Fields
//> Abstract Fields
//> Fields

//> Static Methods
//> Abstract Methods
//> Methods
```
- Fields:
```typescript
//> Fields
/**
 * @description Necessary for status
 */
boolean: status;
```
- Abstract Fields:
```typescript
//> Abstract Fields
/**
 * @description Necessary for database processing.
 */
abstract id: number;
```
- Static Fields:
```typescript
//> Static Fields
/**
 * @static
 * @description Provides access to the SOAssembler to provide functionality
 *              like create, all, filter,...
 *
 * @tutorial Usage: "public static objects =
 *                   StatementObject.getObjects(osmModel);"
 */
static objects: SOAssembler;
```
- Methods:
```typescript
//> Methods
/**
 * Render object.
 *
 * @param filter List of keys to filter by.
 * @returns {any} The filtered object.
 * @description Filter the object by a list of keys.
 */
render(filter: string[]): any {
  return helper.general.squeezer(this, filter);
}
```
- Abstract Methods:
```typescript
//> Abstract Methods
/**
 * @abstract
 * @returns {Boolean} A check if the database write process was successful.
 * @description Writes the statement object to the database.
 */
abstract save(): void;
```
- Static Methods:
```typescript
//> Static Methods
/**
 * @static
 * @param self A implementation of a statement object.
 * @returns {SOAssembler} A SOAssembler object.
 * @description Generate a new SOAssembler object, with the provided osm
 *              model.
 */
static getObjects(self: any) {
  return new SOAssembler(self);
}
```

- Get and Set should also by commented using this style:
```typescript
//> Getter
get pointer(): number {
  return this._pointer;
}

//> Setter
set pointer(values: number) {
  if(this.repositories.length >= value + 1){
    this._pointer += 1;
  } else {
    console.error(`
Pointer cannot be increased. The maximum has already been reached.
`);
  }
}
```

- Try to keep the line count in one single file below 400.
- After declaring variables, add a new line.

```typescript
const a = 1;
const b = 2;

return a + b === 3 ? true : false;
```

- The indentation must be 2 spaces.
- Use `const` and `let` where ever possible. Do not use `var` if not required.
- Variable should be named in camel case.

**Bad**
```typescript
let my_test = "test";
```
**Good**
```typescript
let myTest = "test";
```

- There should be a newline after calling the super() function.

```typescript
constructor(args: ITest) {
  super();

  this.test = "test";
}
```
- There should be a newline after initializing the variables.
```typescript
createTest(fields: any): Test {
  let test = Test.objects.create(fields);
  
  return test;
}
```
- There should be a newline after an if statement.
```typescript
checkTest(fields: any): Boolean {
  if (fields === null) {
    return false;
  }
  
  return true;
}

```
- There should be a newline after a multiple line variable declaration

**Bad**
```typescript
const testA = {
  a: "",
  b: "",
}
const testB = {
  b: "",
  a: "",
};
const a = "a";
const b = "b";
```
**Good**
```typescript
const testA = {
  a: "",
  b: "",
}

const testB = {
  b: "",
  a: "",
};

const a = "a";
const b = "b";
```

- Create a new line if the code is logically seperated.
**Bad**
```typescript
let a = 81;
let b = 1701;

a = a + 5;
a = 2 / 1;
a = a % 10;
b = b - 2000;
b = b * 1.5;
console.log();
console.log();
```
**Good**
```typescript
let a = 81;
let b = 1701;

a = a + 5;
a = 2 / 1;
a = a % 10;

b = b - 2000;
b = b * 1.5;

console.log();
console.log();
```
- Local imports should be placed below external imports.
```typescript
import moment from "moment";

import { FooComponent } from "../../foo";
```
