import Account from "./Account";
import { AccountCreatedEvent, MoneyTransferredEvent } from "./Event";
import EventBus from "./EventBus";
import Bank from "./Bank";


const eventBus = new EventBus();
const bank = new Bank(eventBus);


function main() {
    // subscribe to events
    eventBus.subscribe("AccountCreatedEvent", (event: AccountCreatedEvent) => {
        console.log(`Account created with number ${event.account.getAccountNumber()}`);
    });
    
    eventBus.subscribe("MoneyTransferredEvent", (event: MoneyTransferredEvent) => {
        console.log(
            `Transferred $${event.amount} from account ${event.fromAccount.getAccountNumber()} to account ${event.toAccount.getAccountNumber()}`
            );
        });


    bank.createAccount("123456789", 1000);
    bank.createAccount("987654321", 500);
    
    // Transfer money
    const fromAccount = new Account("123456789", 1000);
    const toAccount = new Account("987654321", 500);
    bank.transferMoney(fromAccount, toAccount, 200);
}


main();