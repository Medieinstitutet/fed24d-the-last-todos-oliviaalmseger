import type { Todo } from "../models/Todo";

type TodoListProps = {
    todos: Todo[]; 
    handleClick: (id: number) => void; 
    handleDelete: (id: number) => void;
};

export const TodoList = ({todos, handleClick, handleDelete}: TodoListProps) => {
    return(
    <>
    <ul className="list-none p-0 m-0">
        {todos.map((todo => (
            <li key={todo.id} className="font-[Coming_soon] flex items-center justify-between w-full py-2">
                <label className={`${todo.isDone ? 'line-through opacity-60' : ''}`}>
                    <input type="checkbox" checked={todo.isDone} onChange={() => handleClick(todo.id)} className="mr-2.5  w-4 h-4 
                    border-2 border-[#004aad] rounded cursor-pointer appearance-none relative 
                    checked:after:content-['✓'] checked:after:text-[#004aad] checked:after:absolute checked:after:top-[-4px] checked:after:left-[2px] 
                    hover:ring-1 hover:ring-[#004aad] align-middle"/>
                    {todo.todoText} - {new Date(todo.date).toLocaleDateString()}
                </label>
                <button className="font-[Karla] ml-auto px-3 py-1 text-sm border border-[#004aad] rounded text-[#004aad] hover:bg-[#f1f4fd] transition-colors duration-200 whitespace-nowrap" onClick={() => handleDelete(todo.id)}>Ta bort</button>
            </li>
        )))}
    </ul>
    </>
    )
};