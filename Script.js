//=====================Task 1: Access Nested Object Properties===========================
// Company object
let company = {
    name: "Tech Solutions",
    employees: {
        emp1: { name: "Ali", role: "Developer", salary: 80000 },
        emp2: { name: "Sara", role: "Designer", salary: 70000 }
    }
};

// Log Ali's role
console.log("Ali's role:", company.employees.emp1.role);

// Log Sara's salary
console.log("Sara's salary:", company.employees.emp2.salary);




//========================Task 2: Update Object Property============================
// Product object
let product = {
    id: 101,
    name: "Headphones",
    price: 3500
};

// Update price
product.price = 4000;

// Log updated product
console.log("Updated Product:", product);



//===========================Task 3: Object with Array=============================
// Student profile
let student = {
    name: "Ahmed",
    age: 20,
    subjects: ["Math", "Physics", "Computer"]
};

// Log all subjects
console.log("Subjects:", student.subjects);

// Log second subject
console.log("Second subject:", student.subjects[1]);




//============================Task 4: Array of Objects================================
// Multiple students
let students = [
    { name: "Ayesha", marks: 85 },
    { name: "Bilal", marks: 78 },
    { name: "Hina", marks: 92 }
];

// Log name of first student
console.log("First student name:", students[0].name);

// Log marks of last student
console.log("Last student marks:", students[students.length - 1].marks);



//===============================Task 5: Nested Object===================================
// User profile
let user = {
    username: "user123",
    profile: {
        email: "user@mail.com",
        address: {
            city: "Karachi",
            zip: "75000"
        }
    }
};

// Log user's email
console.log("User email:", user.profile.email);

// Log city name
console.log("City:", user.profile.address.city);



//==========================Task 6: Modify Nested Object Value=================================
// Order object
let order = {
    orderId: 555,
    delivery: {
        status: "Pending",
        days: 5
    }
};

// Change status to Delivered
order.delivery.status = "Delivered";

// Log updated order
console.log("Updated Order:", order);



//========================Task 7: Object with Array of Objects================================
// Shopping cart
let cart = {
    items: [
        { name: "Shirt", price: 2000 },
        { name: "Shoes", price: 5000 }
    ]
};

// Log price of Shoes
console.log("Price of Shoes:", cart.items[1].price);

// Change Shirt price to 2200
cart.items[0].price = 2200;

// Log updated items array
console.log("Updated Items:", cart.items);




//==========================Task 8: Add New Property===================================
// Mobile object
let mobile = {
    brand: "Samsung",
    model: "S21"
};

// Add new property price
mobile.price = 120000;

// Log complete object
console.log("Mobile Object:", mobile);



//==========================Task 9: Loop Through Object Properties=============================
// Car object
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

// Loop through keys and values
for(let key in car){
    console.log(key + ":", car[key]);
}



//============================Task 10: Mini Real-World Object====================================
// Menu item
let menuItem = {
    name: "Burger",
    price: 450,
    available: true
};

// Log item name and price
console.log("Item:", menuItem.name);
console.log("Price:", menuItem.price);

// Change availability to false
menuItem.available = false;

// Log updated menu item
console.log("Updated availability:", menuItem.available);