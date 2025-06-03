import type { Todo } from "../models/Todo";

type TodoListProps = {
    todos: Todo[]; 
    handleClick: (id: number) => void; 
};

export const TodoList = ({todos, handleClick}: TodoListProps) => {
    return(
    <>
    <ul>
        {todos.map((todo => (
            <li className={todo.isDone ? 'done' : ''} key={todo.id}>
                <label>
                    <input type="checkbox" checked={todo.isDone} onChange={() => handleClick(todo.id)} />
                    {todo.todoText} - {new Date(todo.date).toLocaleDateString()}
                </label>
            </li>
        )))}
    </ul>
    </>
    )
};