import { useState, type ChangeEvent, type FormEvent } from "react";

type AddTodoProps = {
    addTodo: (todoText: string) => void; 
};

export const AddTodo = ({addTodo}: AddTodoProps) => {
    const [addContent, setAddContent] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.type === "text") {
        setAddContent(e.target.value);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addTodo(addContent);
        setAddContent(""); 

    };

    return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo-input">Lägg till en todo: </label>
            <input type="text" id="todo-input" value={addContent} onChange={handleChange} placeholder="Lägg till en todo" required />
            <button>Lägg till</button>
        </form>
    </div>
    </>
    )
};