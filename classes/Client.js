class Client {
    constructor(clientId, dni, password, name, surname, balance, overdraftFacility, creditCardNumber, creditCardDueDate, hasDolarSavingsAccount, dolarSavingsAccount){
        this.id = clientId
        this.dni = dni
        this.password = password 
        this.name = name
        this.surname = surname
        this.balance = balance
        this.overdraftFacility = overdraftFacility
        this.creditCardNumber = creditCardNumber
        this.creditCardDueDate = creditCardDueDate
        this.hasDolarBalance = hasDolarSavingsAccount
        this.dolarBalance = dolarSavingsAccount
    }
}

const clients = [
    new Client(1, '12345678A', 'password1', 'John', 'Doe', 1000, true, '1111 2222 3333 4444', '01/25', true, 500),
    new Client(2, '87654321B', 'password2', 'Jane', 'Smith', 1500, false, '5555 6666 7777 8888', '02/26', false, 0),
    new Client(3, '11111111C', 'password3', 'Alice', 'Johnson', 2000, true, '9999 8888 7777 6666', '03/27', true, 700),
    new Client(4, '22222222D', 'password4', 'Bob', 'Williams', 2500, false, '4444 3333 2222 1111', '04/28', false, 0),
    new Client(5, '33333333E', 'password5', 'Michael', 'Brown', 3000, true, '3333 4444 5555 6666', '05/29', true, 800),
    new Client(6, '44444444F', 'password6', 'Emily', 'Davis', 3500, false, '7777 8888 9999 0000', '06/30', false, 0),
    new Client(7, '55555555G', 'password7', 'William', 'Miller', 4000, true, '8888 7777 6666 5555', '07/31', true, 900),
    new Client(8, '66666666H', 'password8', 'Olivia', 'Wilson', 4500, false, '2222 3333 4444 5555', '08/32', false, 0),
    new Client(9, '77777777I', 'password9', 'James', 'Taylor', 5000, true, '5555 4444 3333 2222', '09/33', true, 1000),
    new Client(10, '88888888J', 'password10', 'Emma', 'Moore', 5500, false, '9999 8888 7777 6666', '10/34', false, 0)
];

console.log("Clientes:", clients);
