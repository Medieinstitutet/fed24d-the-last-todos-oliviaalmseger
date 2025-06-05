import type { Todo } from "../models/Todo";

type TodoListProps = {
    todos: Todo[]; 
    handleClick: (id: number) => void; 
    handleDelete: (id: number) => void;
};

export const TodoList = ({todos, handleClick, handleDelete}: TodoListProps) => {
    return(
    <>
    <ul className="list-none p-0 ml-8 sm:ml-18">
        {todos.map((todo => (
            <li key={todo.id} className="font-[Coming_soon] flex items-center justify-between w-full py-2">
                <label className={`${todo.isDone ? 'line-through opacity-60' : ''}`}>
                    <input type="checkbox" checked={todo.isDone} onChange={() => handleClick(todo.id)} aria-checked={todo.isDone} 
                    className="mr-2.5  w-4 h-4 border-2 border-[#004aad] rounded cursor-pointer appearance-none relative 
                    checked:after:content-['✓'] checked:after:text-[#004aad] checked:after:absolute checked:after:top-[-4px] checked:after:left-[2px] 
                    hover:ring-1 hover:ring-[#004aad] align-middle"/>
                    {todo.todoText} 
                    <p className="text-xs"> Tillagd: {new Date(todo.createdAt).toLocaleDateString()}</p>
                </label>
                <button className="font-[Karla] ml-auto mr-7 px-3 py-1 text-sm border border-[#004aad] rounded text-[#004aad] hover:bg-[#e5eafc]  transition-colors duration-200 whitespace-nowrap sm:mr-8" onClick={() => handleDelete(todo.id)}>Ta bort</button>
            </li>
        )))}
    </ul>
    </>
    )
};