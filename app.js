var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 25;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Lady");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Ania", "ania");
console.log(person.name, person.username);
person.printAge();
//INHERITANCE
var Anna = (function (_super) {
    __extends(Anna, _super);
    function Anna(name, username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.name = "Anna";
        _this.username = "someGreatUsername";
        console.log(_this.age);
        return _this;
    }
    return Anna;
}(Person));
var anna = new Anna("randomName", "myUsername");
console.log(anna);
//GETTERS AND SETTERS
var Plant = (function () {
    function Plant() {
        this._species = "Default plant";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value.toUpperCase() + ' - what a great name for a plant!';
            }
            else {
                this._species = "Default plant";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant;
console.log(plant);
plant.species = "YY";
console.log(plant);
plant.species = "Forget-me-not";
console.log(plant);
//STATIC PROPERTIES METHODS
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumstance = function (diameter) {
        return this.PI * diameter;
    };
    return Helpers;
}());
Helpers.PI = 3.13;
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumstance(8));
//ABSTRACT CLASSES - they are to be inherited from, blueprints
//this class needs to be extended
var Project = (function () {
    function Project() {
        this.projectName = "Default project name";
        this.budget = 100;
    }
    Project.prototype.calcBudget = function (value) {
        console.log(this.budget * value);
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject;
newProject.calcBudget(44);
console.log(newProject);
newProject.changeName("HR Project");
console.log(newProject);
//# sourceMappingURL=app.js.map