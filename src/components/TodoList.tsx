import type { Todo } from "../models/Todo";

type TodoListProps = {
    todos: Todo[]; 
    handleClick: (id: number) => void; 
    handleDelete: (id: number) => void;
};

export const TodoList = ({todos, handleClick, handleDelete}: TodoListProps) => {
    return(
    <>
    <ul>
        {todos.map((todo => (
            <li key={todo.id}>
                <label className={todo.isDone ? 'done' : ''} >
                    <input type="checkbox" checked={todo.isDone} onChange={() => handleClick(todo.id)} />
                    {todo.todoText} - {new Date(todo.date).toLocaleDateString()}
                </label>
                <button className="delete-btn" onClick={() => handleDelete(todo.id)}>Ta bort</button>
            </li>
        )))}
    </ul>
    </>
    )
};