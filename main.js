var __extends = (this && this.__extends) || (function () {
      var extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          if (typeof b !== "function" && b !== null)
              throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  var Vehicle = /** @class */ (function () {
      function Vehicle(make, model, year) {
          this.make = make;
          this.model = model;
          this.year = year;
          this.rented = false;
      }
      Vehicle.prototype.getMake = function () {
          return this.make;
      };
      Vehicle.prototype.getModel = function () {
          return this.model;
      };
      Vehicle.prototype.getYear = function () {
          return this.year;
      };
      Vehicle.prototype.isRented = function () {
          return this.rented;
      };
      Vehicle.prototype.setRented = function (rented) {
          this.rented = rented;
      };
      Vehicle.prototype.rent = function () {
          if (this.isRented()) {
              console.log("Sorry, ".concat(this.getMake(), " ").concat(this.getModel(), " is already rented."));
          }
          else {
              this.setRented(true);
              console.log("You have rented a ".concat(this.getMake(), " ").concat(this.getModel(), "."));
          }
      };
      Vehicle.prototype.return = function () {
          if (this.isRented()) {
              this.setRented(false);
              console.log("Thank you for returning the ".concat(this.getMake(), " ").concat(this.getModel(), "."));
          }
          else {
              console.log("The ".concat(this.getMake(), " ").concat(this.getModel(), " was not rented."));
          }
      };
      return Vehicle;
  }());
  var Car = /** @class */ (function (_super) {
      __extends(Car, _super);
      function Car(make, model, year, numOfDoors, numOfPassengers) {
          var _this = _super.call(this, make, model, year) || this;
          _this.numOfDoors = numOfDoors;
          _this.numOfPassengers = numOfPassengers;
          return _this;
      }
      Car.prototype.rentalRate = function () {
          return 50; // 50 per day
      };
      Car.prototype.getNumOfDoors = function () {
          return this.numOfDoors;
      };
      Car.prototype.getNumOfPassengers = function () {
          return this.numOfPassengers;
      };
      return Car;
  }(Vehicle));
  var Truck = /** @class */ (function (_super) {
      __extends(Truck, _super);
      function Truck(make, model, year, payloadCapacity) {
          var _this = _super.call(this, make, model, year) || this;
          _this.payloadCapacity = payloadCapacity;
          return _this;
      }
      Truck.prototype.rentalRate = function () {
          return 100; // 100 per day
      };
      Truck.prototype.getPayloadCapacity = function () {
          return this.payloadCapacity;
      };
      return Truck;
  }(Vehicle));
  var Motorcycle = /** @class */ (function (_super) {
      __extends(Motorcycle, _super);
      function Motorcycle(make, model, year, engineSize) {
          var _this = _super.call(this, make, model, year) || this;
          _this.engineSize = engineSize;
          return _this;
      }
      Motorcycle.prototype.rentalRate = function () {
          return 25; // 25 per day
      };
      Motorcycle.prototype.getEngineSize = function () {
          return this.engineSize;
      };
      return Motorcycle;
  }(Vehicle));
  // Testing
  var car = new Car('Honda', 'Civic', 2019, 4, 5);
  var truck = new Truck('Ford', 'F-150', 2020, 2000);
  var motorcycle = new Motorcycle('Yamaha', 'YZF-R6', 2021, 600);
  console.log(car.getMake(), car.getModel(), car.getYear(), car.getNumOfDoors(), car.getNumOfPassengers());
  car.rent(); // You have rented a Honda Civic.
  car.rent(); // Sorry, Honda Civic is already rented.
  car.return(); // Thank you for returning the Honda Civic.
  console.log(truck.getMake(), truck.getModel(), truck.getYear(), truck.getPayloadCapacity());
  truck.rent();
  