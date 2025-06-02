import { useState } from 'react';
import '../styles/Todos.css'; 
import { Todo } from '../models/Todo';

export const Todos = () => {
    const heading = 'Att göra:'

    const [todos, setTodos] = useState<Todo[]>([
        new Todo('Dricka kaffe', false),
        new Todo('Skjutsa C till skolan', false),
        new Todo('Springa', false),
        new Todo('Äta frukost', false),
        new Todo('Skola', false),
    ]);
   
    return (
    <>
    <div>
        <h1>{heading}</h1>
        <ul>
            {todos.map((todo => (
                <li className={todo.isDone ? 'done' : ''} key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.isDone} />
                    {todo.todoText} - {new Date(todo.date).toLocaleDateString()}
                    </label>
                </li>
            )))}
        </ul>
    </div>
    </>
    )
};