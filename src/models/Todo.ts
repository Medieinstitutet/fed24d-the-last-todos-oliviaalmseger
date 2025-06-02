export class Todo {
    id: number;
    text: string; 
    isDone: boolean;
    date: number; 

    constructor(text: string, isDone: boolean, date: number = Date.now()) {
        this.id = Date.now();
        this.text = text;
        this.isDone = isDone; 
        this.date = date;
    }
};