abstract class Vehicle {
      protected make: string;
      protected model: string;
      protected year: number;
      protected rented: boolean;
    
      constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
      }
    
      getMake(): string {
        return this.make;
      }
    
      getModel(): string {
        return this.model;
      }
    
      getYear(): number {
        return this.year;
      }
    
      isRented(): boolean {
        return this.rented;
      }
    
      setRented(rented: boolean): void {
        this.rented = rented;
      }
    
      abstract rentalRate(): number;
    
      rent(): void {
        if (this.isRented()) {
          console.log(`Sorry, ${this.getMake()} ${this.getModel()} is already rented.`);
        } else {
          this.setRented(true);
          console.log(`You have rented a ${this.getMake()} ${this.getModel()}.`);
        }
      }
    
      return(): void {
        if (this.isRented()) {
          this.setRented(false);
          console.log(`Thank you for returning the ${this.getMake()} ${this.getModel()}.`);
        } else {
          console.log(`The ${this.getMake()} ${this.getModel()} was not rented.`);
        }
      }
    }
    
    class Car extends Vehicle {
      private numOfDoors: number;
      private numOfPassengers: number;
    
      constructor(make: string, model: string, year: number, numOfDoors: number, numOfPassengers: number) {
        super(make, model, year);
        this.numOfDoors = numOfDoors;
        this.numOfPassengers = numOfPassengers;
      }
    
      rentalRate(): number {
        return 50; // 50 per day
      }
    
      getNumOfDoors(): number {
        return this.numOfDoors;
      }
    
      getNumOfPassengers(): number {
        return this.numOfPassengers;
      }
    }
    
    class Truck extends Vehicle {
      private payloadCapacity: number;
    
      constructor(make: string, model: string, year: number, payloadCapacity: number) {
        super(make, model, year);
        this.payloadCapacity = payloadCapacity;
      }
    
      rentalRate(): number {
        return 100; // 100 per day
      }
    
      getPayloadCapacity(): number {
        return this.payloadCapacity;
      }
    }
    
    class Motorcycle extends Vehicle {
      private engineSize: number;
    
      constructor(make: string, model: string, year: number, engineSize: number) {
        super(make, model, year);
        this.engineSize = engineSize;
      }
    
      rentalRate(): number {
        return 25; // 25 per day
      }
    
      getEngineSize(): number {
        return this.engineSize;
      }
    }
    
    // Testing
    const car = new Car('Honda', 'Civic', 2019, 4, 5);
    const truck = new Truck('Ford', 'F-150', 2020, 2000);
    const motorcycle = new Motorcycle('Yamaha', 'YZF-R6', 2021, 600);
    
    console.log(car.getMake(), car.getModel(), car.getYear(), car.getNumOfDoors(), car.getNumOfPassengers());
    car.rent(); // You have rented a Honda Civic.
    car.rent(); // Sorry, Honda Civic is already rented.
    car.return(); // Thank you for returning the Honda Civic.
    
    console.log(truck.getMake(), truck.getModel(), truck.getYear(), truck.getPayloadCapacity());
    truck.rent();
    