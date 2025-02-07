// ===================== Primitive Data Types (Copied by Value) =====================
// Example 1: String
let name = "Rehana";
let name1 = name;
name1 = "Admin";

console.log(name1); // Output: "Admin"
console.log(name);  // Output: "Rehana" (Unchanged)

// Example 2: Number
let age = 19;
let newAge = age;
newAge = 20;

console.log(newAge); // 20
console.log(age);    // 19 (Unchanged)

// Example 3: Boolean
let isStudent = true;
let isUser = isStudent;
isUser = false;

console.log(isUser);   // false
console.log(isStudent); // true (Unchanged)

// Example 4: Undefined
let x;
let y = x;

console.log(x); // undefined
console.log(y); // undefined

// Example 5: Null
let a = null;
let b = a;
b = "Changed Value";

console.log(b); // "Changed Value"
console.log(a); // null (Unchanged)

// ===================== Non-Primitive Data Types (Copied by Reference) =====================
// Example 6: Array
let colors = ["Red", "Green", "Blue"];
let colorsCopy = colors;
colorsCopy[1] = "Yellow"; // Changing colorsCopy affects colors

console.log(colorsCopy); // ["Red", "Yellow", "Blue"]
console.log(colors);     // ["Red", "Yellow", "Blue"] (Both changed)

// Example 7: Object
let person = { name: "Gulshan", age: 22 };
let person1 = person;
person1.age = 22;

console.log(person1); // { name: "Alice", age: 30 }
console.log(person);  // { name: "Alice", age: 30 } (Both changed)

// Example 8: Nested Objects
let student = {
    name: "rehana",
    marks: {
        math: 90,
        science: 85
    }
};

let studentCopy = student;
studentCopy.marks.math = 95;

console.log(studentCopy.marks.math); // 95
console.log(student.marks.math);     // 95 (Both changed)
