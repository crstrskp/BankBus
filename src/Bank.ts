import Account from "./Account";
import { AccountCreatedEvent, MoneyTransferredEvent } from "./Event";
import EventBus from "./EventBus";

// Bank.ts
export default class Bank {
    private eventBus: EventBus;

    constructor(eventBus: EventBus) {
        this.eventBus = eventBus;
    }

    createAccount(accountNumber: string, initialBalance: number): void {
        const account = new Account(accountNumber, initialBalance);
        this.eventBus.publish(new AccountCreatedEvent(account));
    }

    transferMoney(
        fromAccount: Account,
        toAccount: Account,
        amount: number
    ): void {
        if (fromAccount.withdraw(amount)) {
            toAccount.deposit(amount);
            this.eventBus.publish(new MoneyTransferredEvent(fromAccount, toAccount, amount));
        }
    }
}
