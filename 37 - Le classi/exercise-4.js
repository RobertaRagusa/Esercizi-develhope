class BankAccount {
    constructor(money) {
        this.money = money;
    }
    deposit(otherMoney) {
        return this.money += otherMoney;
    }
    withdraw(otherMoney) {
        return this.money -= otherMoney;
    }
    view() {
        console.log(this.money);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
