"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./Account"));
const Event_1 = require("./Event");
// Bank.ts
class Bank {
    constructor(eventBus) {
        this.eventBus = eventBus;
    }
    createAccount(accountNumber, initialBalance) {
        const account = new Account_1.default(accountNumber, initialBalance);
        this.eventBus.publish(new Event_1.AccountCreatedEvent(account));
    }
    transferMoney(fromAccount, toAccount, amount) {
        if (fromAccount.withdraw(amount)) {
            toAccount.deposit(amount);
            this.eventBus.publish(new Event_1.MoneyTransferredEvent(fromAccount, toAccount, amount));
        }
    }
}
exports.default = Bank;
