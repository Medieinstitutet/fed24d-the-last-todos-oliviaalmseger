import '../styles/Todos.css'; 
import { useState } from 'react';
import { Todo } from '../models/Todo';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';
import { TodoSort } from './TodoSort';
import type { SortTodos } from '../types/SortTodos';

export const Todos = () => {
    const heading = 'Att göra:'

    const startTodos = [
        new Todo('Dricka kaffe', false),
        new Todo('Springa', false),
        new Todo('Äta frukost', false),
        new Todo('Vattna i växthuset', false),
        new Todo('Skola', false),
        new Todo('Baka kakor', false),
        new Todo('Hoppa i sängen', false),
        new Todo('Poppa popcorn', false),
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

    const addTodo = (todoText: string) => { 
        const newTodo = new Todo(todoText, false); 
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id: number) => {
        const todoToRemove = todos.find(todo => todo.id === id)
        if (!todoToRemove) return;
        if (!todoToRemove.isDone) {
            alert("Fuskis! Den är ju inte slutförd!");
        }
        const notRemoved = todos.filter(todo => todo.id !== id);
        setTodos(notRemoved);
    }; 

    const [sortTodo, setSortTodo] = useState<SortTodos>('');
    const sortedTodos = (): Todo[] => {
        const sorted = [...todos]; 
        if (sortTodo === 'default') {
            return [...todos];
        }

        if (sortTodo === 'newest') {
            sorted.sort((a, b) => b.date - a.date);
        } else if (sortTodo === 'alphabetical') {
            sorted.sort((a, b) => a.todoText.localeCompare(b.todoText));
        } else if (sortTodo === 'unfinished') {
            sorted.sort((a,b) => Number(a.isDone) - Number(b.isDone));
        }
        return sorted;
    };


    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos)); 


    return (
    <>
    <div className='todos-container'>
        <h1>{heading}</h1>
        <div className='todos-sorting'>
            <TodoSort sortTodo={sortTodo} setSortTodo={setSortTodo} />
        </div>
        <div className='the-todos'>
            <TodoList todos={sortedTodos()} handleClick={handleChange} handleDelete={removeTodo} />
        </div>
    </div>
    <div className='add-todo-container'>
        <AddTodo addTodo={addTodo}/>
    </div>
    </>
    )
};
