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
            <label htmlFor="todo-input" className="font-[Karla] text-2xl mb-16 text-[#004aad] font-bold">Ny att göra-post: </label>
            <div className="flex flex-col items-center gap-2 bg-white">
                <input type="text" id="todo-input" value={addContent} onChange={handleChange} placeholder="Vad ska göras?" className="w-full p-1.5 mt-2.5 border-2 border-[#004aad] rounded font-[Coming_Soon] focus:border-[3px] focus:border-black outline-none" required />
                <button className="bg-[#004aad] text-white px-4 py-2 mt-1.5 text-s border border-[#004aad] rounded hover:bg-[#3a69a7] transition-colors duration-200 font-[Karla]">Lägg till</button>
            </div>
        </form>
    </div>
    </>
    )
};