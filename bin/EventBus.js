"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// EventBus.ts
class EventBus {
    constructor() {
        this.subscribers = new Map();
    }
    publish(event) {
        const eventType = event.constructor.name;
        const eventSubscribers = this.subscribers.get(eventType);
        if (eventSubscribers) {
            eventSubscribers.forEach((subscriber) => subscriber(event));
        }
    }
    subscribe(eventType, handler) {
        const eventSubscribers = this.subscribers.get(eventType) || [];
        eventSubscribers.push(handler);
        this.subscribers.set(eventType, eventSubscribers);
    }
}
exports.default = EventBus;
