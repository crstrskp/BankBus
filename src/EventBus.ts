// EventBus.ts
export default class EventBus {
    private subscribers: Map<string, Array<Function>> = new Map();

    publish(event: any): void {
        const eventType = event.constructor.name;
        const eventSubscribers = this.subscribers.get(eventType);

        if (eventSubscribers) {
            eventSubscribers.forEach((subscriber) => subscriber(event));
        }
    }

    subscribe(eventType: string, handler: Function): void {
        const eventSubscribers = this.subscribers.get(eventType) || [];
        eventSubscribers.push(handler);
        this.subscribers.set(eventType, eventSubscribers);
    }
}
