export class Todo {
    id: number;
    todoText: string; 
    isDone: boolean;
    date: number; 

    constructor(todoText: string, isDone: boolean, date: number = Date.now()) {
        this.id = Date.now();
        this.todoText = todoText;
        this.isDone = isDone; 
        this.date = date;
    }
};