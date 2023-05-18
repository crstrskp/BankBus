"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./Account"));
const EventBus_1 = __importDefault(require("./EventBus"));
const Bank_1 = __importDefault(require("./Bank"));
const eventBus = new EventBus_1.default();
const bank = new Bank_1.default(eventBus);
function main() {
    // subscribe to events
    eventBus.subscribe("AccountCreatedEvent", (event) => {
        console.log(`Account created with number ${event.account.getAccountNumber()}`);
    });
    eventBus.subscribe("MoneyTransferredEvent", (event) => {
        console.log(`Transferred $${event.amount} from account ${event.fromAccount.getAccountNumber()} to account ${event.toAccount.getAccountNumber()}`);
    });
    bank.createAccount("123456789", 1000);
    bank.createAccount("987654321", 500);
    // Transfer money
    const fromAccount = new Account_1.default("123456789", 1000);
    const toAccount = new Account_1.default("987654321", 500);
    bank.transferMoney(fromAccount, toAccount, 200);
}
main();
