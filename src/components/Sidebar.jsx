import Button from "./Button";

export default function Sidebar({ projects, onCreateNewProject, onEditProject }) {
    return (
        <aside className="h-screen bg-black text-stone-50 flex flex-col w-1/5 pl-10 pt-20">
            <h2 className="mb-8 font-bold uppercase md:text-xl">YOUR PROJECTS</h2>
            <Button onClick={onCreateNewProject}>+ Add Project</Button>
            <ul className="mt-8">
                {projects.map((project, i) =>
                    <li key={i}>
                        <button onClick={() => onEditProject(i)} type='button' className='w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'>
                            {project.title}
                        </button>
                    </li>)}
            </ul>
        </aside>)
}