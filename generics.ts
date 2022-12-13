class Queue<T> {
    private data: T[] = [];

    add(item: T) {
        this.data.push(item);
    }

    remove(){
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add("shazeen");
nameQueue.add("Shazeen");

const numberQueue = new Queue<number>();
numberQueue.add(1);
numberQueue.add(2);