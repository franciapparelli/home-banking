class CreditCard {
    constructor(cardId, clientId, cardType, supplier, dueDate, balance, paymentInterest){
        this.cardId = cardId
        this.clientId = clientId
        this.cardType = cardType
        this.supplier = supplier
        this.dueDate = dueDate
        this.balance = balance
        this.paymentInterest = paymentInterest
    }
}

const creditCards = [
    new CreditCard(1, 1, 'Gold', 'Visa', '01/25', 800, 0.15),
    new CreditCard(2, 2, 'Silver', 'Mastercard', '02/26', 1200, 0.12),
    new CreditCard(3, 3, 'Platinum', 'American Express', '03/27', 1500, 0.1),
    new CreditCard(4, 4, 'Gold', 'Visa', '04/28', 2000, 0.15),
    new CreditCard(5, 5, 'Silver', 'Mastercard', '05/29', 2500, 0.12),
    new CreditCard(6, 6, 'Platinum', 'American Express', '06/30', 3000, 0.1),
    new CreditCard(7, 7, 'Gold', 'Visa', '07/31', 3500, 0.15),
    new CreditCard(8, 8, 'Silver', 'Mastercard', '08/32', 4000, 0.12),
    new CreditCard(9, 9, 'Platinum', 'American Express', '09/33', 4500, 0.1),
    new CreditCard(10, 10, 'Gold', 'Visa', '10/34', 5000, 0.15)
];

console.log("Tarjetas de Crédito:", creditCards);

