import Account from "./Account";

// Events.ts
class AccountCreatedEvent {
    constructor(public account: Account) { }
}
class MoneyTransferredEvent {
    constructor(
        public fromAccount: Account,
        public toAccount: Account,
        public amount: number
    ) { }
}

export { AccountCreatedEvent, MoneyTransferredEvent };