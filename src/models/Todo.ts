export class Todo {
    id: number;
    todoText: string; 
    isDone: boolean;
    createdAt: number; 

    constructor(todoText: string, isDone: boolean, createdAt: number = Date.now()) {
        this.id = Date.now() + Math.random();
        this.todoText = todoText;
        this.isDone = isDone; 
        this.createdAt = createdAt;
    }
};