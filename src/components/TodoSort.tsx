import type { SortTodos } from "../types/SortTodos";

type TodoSortProps = {
    sortTodo: SortTodos;
    setSortTodo: (value: SortTodos) => void; 
}; 

export const TodoSort = ({sortTodo, setSortTodo}: TodoSortProps) => {
    return (
    <>
    <label htmlFor="sorting">Sortera:</label>
    <select name="" id="sorting" value={sortTodo} onChange={(e) => setSortTodo(e.target.value as SortTodos)}>
        <option value="default"></option>
        <option value="newest">Nyast</option>
        <option value="alphabetical">Alfabetisk</option>
        <option value="unfinished">Ofärdiga-Färdiga</option>
        <option value="default">Ingen sortering</option>
    </select>
    </>
    )
};