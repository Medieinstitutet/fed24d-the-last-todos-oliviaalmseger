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
                <button className="font-karla ml-auto px-3 py-1 text-sm border border-[#004aad] rounded text-[#004aad] hover:bg-[#f1f4fd] transition-colors duration-200 " onClick={() => handleDelete(todo.id)}>Ta bort</button>
            </li>
        )))}
    </ul>
    </>
    )
};