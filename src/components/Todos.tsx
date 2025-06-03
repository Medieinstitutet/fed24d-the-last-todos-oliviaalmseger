import '../styles/Todos.css'; 
import { useState } from 'react';
import { Todo } from '../models/Todo';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

export const Todos = () => {
    const heading = 'Att göra:'

    const startTodos = [
        new Todo('Dricka kaffe', false),
        new Todo('Skjutsa C till skolan', false),
        new Todo('Springa', false),
        new Todo('Äta frukost', false),
        new Todo('Vattna i växthuset', false),
        new Todo('Skola', false),
    ];

    const [todos, setTodos] = useState<Todo[]>(
        JSON.parse(localStorage.getItem('todos') || JSON.stringify(startTodos))
    );

    const handleChange = (id: number) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, isDone: !todo.isDone};
            } 
            return todo;
        });
        setTodos(updatedTodos);
    }; 
        // const filtered = storedTodos.filter(todo => todo.id !== id);
        // setStoredTodos(filtered);


    const addTodo = (todoText: string) => { 
        const newTodo = new Todo(todoText, false); 
        setTodos([...todos, newTodo]);
    };


    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos)); 


    return (
    <>
    <div className='todos-container'>
        <h1>{heading}</h1>
        <TodoList todos={todos} handleClick={handleChange}/>
        {/* <ul>
            {todos.map((todo => (
                <li className={todo.isDone ? 'done' : ''} key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.isDone} onChange={() => handleChange(todo.id)} />
                    {todo.todoText} - {new Date(todo.date).toLocaleDateString()}
                    </label>
                </li>
            )))}
        </ul> */}
    </div>
    <div className='add-todo-container'>
        <AddTodo addTodo={addTodo}/>
    </div>
    </>
    )
};
