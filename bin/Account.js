"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Account.ts
class Account {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
}
exports.default = Account;
