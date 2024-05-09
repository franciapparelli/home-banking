class Consumption {
    constructor(compsumptionId, cardId, placeName, ammount){
        this.compsumptionId = compsumptionId
        this.cardId = cardId
        this.date = new Date()
        this.placeName = placeName
        this.ammount = ammount
    }
}

const consumptions = [
    new Consumption(1, 1, 'Restaurant A', 50),
    new Consumption(2, 2, 'Supermarket B', 100),
    new Consumption(3, 3, 'Cinema C', 30),
    new Consumption(4, 4, 'Gas Station D', 70),
    new Consumption(5, 5, 'Coffee Shop E', 20),
    new Consumption(6, 6, 'Clothing Store F', 200),
    new Consumption(7, 7, 'Electronics Store G', 500),
    new Consumption(8, 8, 'Bookstore H', 80),
    new Consumption(9, 9, 'Gym I', 120),
    new Consumption(10, 10, 'Travel Agency J', 1000)
];

console.log("Consumicion:", consumptions);