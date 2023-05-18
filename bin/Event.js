"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyTransferredEvent = exports.AccountCreatedEvent = void 0;
// Events.ts
class AccountCreatedEvent {
    constructor(account) {
        this.account = account;
    }
}
exports.AccountCreatedEvent = AccountCreatedEvent;
class MoneyTransferredEvent {
    constructor(fromAccount, toAccount, amount) {
        this.fromAccount = fromAccount;
        this.toAccount = toAccount;
        this.amount = amount;
    }
}
exports.MoneyTransferredEvent = MoneyTransferredEvent;
