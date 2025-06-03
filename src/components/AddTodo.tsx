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
            <label htmlFor="todo-input" className="form-label">Ny att göra-post: </label>
            <div className="center-form-content">
                <input type="text" id="todo-input" value={addContent} onChange={handleChange} placeholder="Vad ska göras?" className="form-input" required />
                <button className="form-btn">Lägg till</button>

            </div>

        </form>
    </div>
    </>
    )
};