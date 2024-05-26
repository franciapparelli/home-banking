let clientId = 1

const DOLLAR_SAVINGS_ACCOUNT = "dollar"
const PESOS_SAVINGS_ACCOUNT = "pesos"

class Client {
    constructor(dni, password, name, surname, overdraftLimit, hasDolarSavingsAccount){
        this.id = clientId
        clientId++

        this.dni = dni
        this.password = password 
        this.name = name
        this.surname = surname

        this.balance = 0
        this.overdraftFacility = overdraftLimit
        this.creditCardNumber = 777777777777 + this.id
        
        let currentDate = new Date() 
        this.creditCardDueDate = new Date(currentDate.getFullYear() + 3, currentDate.getMonth(), currentDate.getDay())
        
        if(hasDolarSavingsAccount == true){
            this.dolarBalance = 0
        }
        else {
            this.dolarBalance = -1
        }
        
    }

    takeMoney(ammount, type){
        if(type !== PESOS_SAVINGS_ACCOUNT && type !== DOLLAR_SAVINGS_ACCOUNT)
            return false;

        if(type === DOLLAR_SAVINGS_ACCOUNT && this.dolarBalance < 0)
            return false;

        if(type === PESOS_SAVINGS_ACCOUNT) {
            if((this.balance + this.overdraftLimit) >= ammount) {
                this.balance -= ammount;
                return true;
            }
            else {
                return false;
            }
        }
        else {
            if(this.dolarBalance >= ammount) {
                this.dolarBalance -= ammount;
                return true;
            }
            else {
                return false;
            }
        }
    }

}

const clients = [
    new Client('12345678A', 'password1', 'John', 'Doe', 1000, true),
    new Client('87654321B', 'password2', 'Jane', 'Smith', 1500, false),
    new Client('11111111C', 'password3', 'Alice', 'Johnson', 2000, true),
    new Client('22222222D', 'password4', 'Bob', 'Williams', 2500, false),
    new Client('33333333E', 'password5', 'Michael', 'Brown', 3000, true),
    new Client('44444444F', 'password6', 'Emily', 'Davis', 3500, false),
    new Client('55555555G', 'password7', 'William', 'Miller', 4000, true),
    new Client('66666666H', 'password8', 'Olivia', 'Wilson', 4500, false),
    new Client('77777777I', 'password9', 'James', 'Taylor', 5000, true),
    new Client('88888888J', 'password10', 'Emma', 'Moore', 5500, false)
];

console.log("Clientes:", clients);
