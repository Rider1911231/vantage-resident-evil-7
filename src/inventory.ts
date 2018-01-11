import { Stream } from 'libvantage';

interface InventorySlot {

}

export class Inventory {

    private stream : Stream;
    public inventory : InventorySlot[];

    constructor(stream: Stream) {
        this.stream = stream;
        
    }
    private readInventoryItems(): void {

    }
}