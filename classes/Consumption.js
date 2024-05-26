let consumptionId = 1

class Consumption {
    constructor(cardId, date, placeName, ammount){
        this.consumptionId = consumptionId
        consumptionId++
        this.cardId = cardId
        this.date = date
        this.placeName = placeName
        this.ammount = ammount
    }
}

const consumptions = [
    new Consumption(1, new Date(), 'Restaurant A', 50),
    new Consumption(2, new Date(), 'Supermarket B', 100),
    new Consumption(3, new Date(), 'Cinema C', 30),
    new Consumption(4, new Date(), 'Gas Station D', 70),
    new Consumption(5, new Date(), 'Coffee Shop E', 20),
    new Consumption(6, new Date(), 'Clothing Store F', 200),
    new Consumption(7, new Date(), 'Electronics Store G', 500),
    new Consumption(8, new Date(), 'Bookstore H', 80),
    new Consumption(9, new Date(), 'Gym I', 120),
    new Consumption(10, new Date(), 'Travel Agency J', 1000)
];

console.log("Consumicion:", consumptions);