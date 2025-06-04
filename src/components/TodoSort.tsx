import type { SortTodos } from "../types/SortTodos";

type TodoSortProps = {
    sortTodo: SortTodos;
    setSortTodo: (value: SortTodos) => void; 
}; 

export const TodoSort = ({sortTodo, setSortTodo}: TodoSortProps) => {
    return (
    <div className="flex justify-end items-center gap-2 mx-8 mb-4">
        <label htmlFor="sorting" className="font-[Karla] font-bold text-[#004aad]">Sortera:</label>
        <select name="" id="sorting" value={sortTodo} onChange={(e) => setSortTodo(e.target.value as SortTodos)} 
        className="font-[karla] text-m px-2 py-1 border border-[#004aad] rounded cursor-pointer">
            <option value="default"></option>
            <option value="newest">Nyast</option>
            <option value="alphabetical">Alfabetisk</option>
            <option value="unfinished">Ofärdiga-Färdiga</option>
            <option value="default">Ingen sortering</option>
        </select>
    </div>
    )
};