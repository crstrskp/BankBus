// Account.ts
export default class Account {
    private balance: number;

    constructor(private accountNumber: string, initialBalance: number) {
        this.balance = initialBalance;
    }

    withdraw(amount: number): boolean {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    getAccountNumber(): string {
        return this.accountNumber;
    }
}
