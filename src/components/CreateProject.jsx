import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";

export default function CreateProject({ onCancel, onAddNewProject }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const newProject = {
        title: '',
        description: '',
        dueDate: 'dd.mm.yyyy'
    }

    function handleSubmit(e) {
        e.preventDefault();
        newProject.title = title.current.value();
        newProject.description = description.current.value();
        newProject.dueDate = dueDate.current.value();
        newProject.tasks = [];
        onAddNewProject(newProject);
    }

    return <form onSubmit={handleSubmit} className="mt-4">
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={onCancel} type="button" className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><Button type="submit">Save</Button></li>
            </menu>
            <Input ref={title} type="text" label="Title" />
            <Input textarea ref={description} label="Description" />
            <Input ref={dueDate} type="date" label="Due Date" />
        </div>
    </form>;
}