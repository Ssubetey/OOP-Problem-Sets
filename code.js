//Hello 
/*Problem Set 1: Person Constructor
class Person {
    constructor(name, country){
        this.name = name;
        this.currentAge = 0;
        this.country = country;
    }
    get age(){
        return this.currentAge;
    } 
    set age(age){
        if(age >= 0 && age%1 == 0){
            this.currentAge = age;
        }else{
            console.log("Error, invalid value for age.");
        }
    }
    get displayInfo(){
       console.log(`Name: ${this.name} \nAge: ${this.age} \nCountry: ${this.country} \n`); 
    }
    updateAge(){
        this.age = this.age + 1;
    }
    compareAge(otherPerson){
        if(otherPerson.age > this.age){
            return otherPerson.age;
        }else if(otherPerson.age == this.age){
            console.log("They're the same age!");
        }
        return this.age;
    }
}

let massInfoArray = ["Subetey", 17, "Canada", "Hwei", 32, "Koyehn", "Kohana", 16, "Canada"];
let listOfPeople = [];
for(let i = 0; i<3; i++){
    let human = new Person(massInfoArray[i*3], massInfoArray[i*3+2]);
    human.age = massInfoArray[i*3 + 1];
    listOfPeople.push(human);
}
for(let human of listOfPeople){
    human.displayInfo;
}
*/
/*Problem Set 1: ASCII Rectangle Constructor
class Rectangle{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.cwidth = width;
        this.cheight = height;
        this.checkDimensions();
        this.draw();
    }

    draw(){
        let widthSide = "";
        let emptyWidth = "";
        for(let i = 0; i<this.width; i++){
            //Double dash so the width and height *generally* match on squares and otherwise
            widthSide = widthSide + "--";
            emptyWidth = emptyWidth + "  ";
        }
        console.log("O" + widthSide + "O");
        //Holding space thing was required because the console will collapes similar lines, so I have to make the lines different for them to stack
        let holdingSpace = false;
        for(let i = 0; i< (this.height - 2); i++){
            if(holdingSpace){
                console.log("|" + emptyWidth + "| ");
                holdingSpace = false;
            }else{
                console.log("|" + emptyWidth + "|");
                holdingSpace = true;
            }
        }
        console.log("O" + widthSide + "O");
    }
    checkDimensions(){
        if(typeof this.width == "number" && typeof this.height == "number"){
            //Writes area and perimeter
            this.carea = this.width*this.height;
            this.cperimeter = this.width/2 + this.height/2;
        }else{
            this.carea = 0;
            this.cperimeter = 0;
            console.log("One of you dimension values are non-numeric, so area and perimeter have been set to 0");
        }
    }

    get area(){
        return this.carea;
    }
    get width(){
        return this.cwidth;
    }
    get height(){
        return this.cheight;
    }
    set width(width){
        this.cwidth = width;
        this.checkDimensions();
    }
    set height(height){
        this.cheight = height;
        this.checkDimensions();
    }

    compareArea(otherRect){
        if(otherRect.area > this.area){
            return otherRect.area;
        }else if(otherRect.area == this.area){
            console.log("They have the same area!");
        }
        return this.age;
    }
}

let rect1 = new Rectangle(0, 0, 5, 5);
let rect2 = new Rectangle(0, 0, 6, 5);
*/
/*Problem Set 2: Car
let currentYear = 2025;
class Vehicle {
    constructor(make, model, year){
        this.vehicleMake = make;        
        this.vehicleModel = model;
        if(typeof year == "number"){
            this.vehicleYear = year;
        }else{
            console.log("Invalid value for vehicle year, set to 2000");
            this.vehicleYear = 2000;
        }
        this.vehicleAge = currentYear - this.vehicleYear;
    }
    get make(){
        return this.vehicleMake
    }
    get model(){
        return this.vehicleModel
    }
    get year(){
        return this.vehicleYear
    }
    get age(){
        return this.vehicleAge;
    }
    printDescription(){
        console.log(`Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nAge: ${this.age} years\n`);
    }
    printAge(){
        console.log(`Requested vehicle is ${this.age} years old.`);
    }
        
}
//There are only setters for the values in car because these values can be altered by adding/removing doors or modifying the engine to change fuel efficiency
class Car extends Vehicle{
    constructor(make, model, year, doors, fuelEfficiency){
        super(make, model, year);
        if(typeof doors == "number"){
            this.doors = doors;
        }else{
            console.log("Invalid value for doors, # of doors set to 0");
            this.doors = 0;
        }
        if(typeof fuelEfficiency == "number"){
            this.fuelEfficiency = fuelEfficiency;
        }else{
            console.log("Invalid value for fuel efficiency, set to an average of 8.6L / 100km");
            this.fuelEfficiency = 8.6;
        }
        if(this.age > 25){
            this.vintage = true;
        }else{
            this.vintage = false;
        }
    }
    get doorNum(){
        return this.doors;
    }
    set doorNum(newDoors){
        this.doors = newDoors;
    };
    get fuelEff(){
        return this.fuelEfficiency;
    }
    set fuelEff(newFuelEff){
        this.fuelEfficiency = newFuelEff;
    };
    get isVintage(){
        return this.vintage;
    }
    printVintageStatus(){
        if(this.isVintage){
            console.log("The requested car is vintage");
        }else{
            console.log("The requested car is not vintage");
        }
    }
    printDescription(){
        console.log(`Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nAge: ${this.age} years\n# of Doors: ${this.doors}\nFuel Efficiency: ${this.fuelEff}L / 100km\n`);
    }
}

let vroom = new Car("Minecraft", "Caves & Cliffs", 2024, 4, 5.3);
vroom.printDescription();
*/
/*Problem Set 3: Shape Class And Subclasses
class Shape{
    constructor(currentWidth, currentHeight){
        this.currentWidth = currentWidth;
        this.currentHeight = currentHeight;
    }
    get width(){
        return this.currentWidth;
    }
    get height(){
        return this.currentHeight;
    }
    calculateArea(){
        return this.width * this.height;
    }
}
//Using oval because it can actually use the width and height effectively, plus funsies
class Oval extends Shape{
    constructor(currentWidth, currentHeight){
        super(currentWidth, currentHeight);
    }
    calculateArea(){
        return 3.14159 * this.width/2 * this.height/2;
    }
}

//Only makes isosceles/equilateral triangles 
class Triangle extends Shape{
    constructor(currentWidth, currentHeight){
        super(currentWidth, currentHeight);
    }
    calculateArea(){
        return (this.width * this.height)/2;
    }
}

let tri = new Triangle(5, 4);
console.log(tri.calculateArea());
let cir = new Oval(3.5, 3.65);
console.log(cir.calculateArea());
*/
/*Problem Set 3: Employee & Manager Salary
class Employee{
    constructor(legalName, salary){
        this.legalName = legalName;
        this.salary = salary;
    }
    get name(){
        return this.legalName;
    }
    get monthlySalary(){
        return this.salary;
    }
    calculateAnnualSalary(){
        return this.monthlySalary * 12;
    }
}
class Manager extends Employee{
    constructor(legalName, salary, department){
        super(legalName, salary);
        this.department = department;
    }
    calculateAnnualSalary(bonus){
        return this.monthlySalary * 12 + bonus;
    }
}

let Jim = new Manager("Jim", 10000, "Sales");
let Mark = new Manager("Mark", 12000, "Human Resources");
console.log(Jim.calculateAnnualSalary(1800));
console.log(Mark.calculateAnnualSalary(1200));
*/
/*Problem Set 3: Book and Ebook
class Book{
    constructor(bookTitle, bookAuthor, bookPublicationYear){
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookPublicationYear = bookPublicationYear;
    }
    get title(){
        return this.bookTitle;
    }
    get author(){
        return this.bookAuthor;
    }
    get publicationYear(){
        return this.bookPublicationYear;
    }
    displayDetails(){
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPublication Year: ${this.publicationYear}`);
    }
}
class Ebook extends Book{
    constructor(bookTitle, bookAuthor, bookPublicationYear, bookPrice){
        super(bookTitle, bookAuthor, bookPublicationYear);
        this.bookPrice = bookPrice;
    }
    get price(){
        return this.bookPrice;
    }
    displayDetails(){
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPublication Year: ${this.publicationYear}\nPrice: ${this.price}`);
    }
}
*/
/*Problem Set 3: Animal and Dog Sound
class Animal{
    constructor(animalSpecies, animalSound){
        this.animalSpecies = animalSpecies;
        this.animalSound = animalSound;
    }
    get species(){
        return this.animalSpecies;
    }
    get sound(){
        return this.animalSound;
    }
    makeSound(){
        console.log(`The ${this.species} says ${this.sound}`);
    }
}
class Dog extends Animal{
    constructor(animalSpecies, animalSound, animalColor){
        super(animalSpecies, animalSound);
        this.animalColor = animalColor;
    }
    get color(){
        return this.animalColor;
    }
    makeSound(){
        console.log(`The ${this.color} ${this.species} says ${this.sound}`);
    }
}

let Max = new Dog("bloodhound", "woof", "brown");
Max.makeSound();
*/
/*Problem Set 3: Product and PersonalCareProduct Prices
class Product{
    constructor(productID, productName, productPrice){
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
    }
    get ID(){
        return this.productID;
    }
    get name(){
        return this.productName;
    }
    get price(){
        return this.productPrice;
    }
    totalPrice(numOfItems){
        return numOfItems * this.productPrice;
    }
}

//Using warranty price so it can actually be used in the price calculations, cause warranty period is time lol
class PersonalCareProduct extends Product{
    constructor(productID, productName, productPrice, productWarrantyPrice){
        super(productID, productName, productPrice);
        this.productWarrantyPrice = productWarrantyPrice;
    }
    get warrantyPrice(){
        return this.productWarrantyPrice;
    }
    totalPrice(numOfItems){
        return numOfItems * this.productPrice + this.warrantyPrice;
    }
}
*/
/*Problem Set 3: University Departments 
class University{
    constructor(uniName, initialDepartment){
        this.uniName = uniName;
        this.uniDepartmentList = [initialDepartment];
    }
    get name(){
        return this.uniName;
    }
    get departmentList(){
        return this.uniDepartmentList;
    }
    addDepartment(newDepartment){
        this.departmentList.push(newDepartment);
    }
    deleteDepartment(deleteRequest){
        this.departmentList.splice(this.departmentList.indexOf(deleteRequest), 1);
    }
    displayDepartments(){
        console.log(`${this.name} Department List:\n${this.departmentList.join("\n")}`);
    }
}

let uni = new University("UofC", "Com Sci");
uni.addDepartment("Magic");
uni.addDepartment("Firearms");
uni.deleteDepartment("Magic");
uni.displayDepartments();
*/
