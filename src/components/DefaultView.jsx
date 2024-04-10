import NoProjectImg from '../assets/no-projects.png';
import Button from './Button';

export default function DefaultView({ onNewProject }) {
    return (<div className='mt-24 text-center w-full'>
        <img className='w-16 h-16 object-contain mx-auto' src={NoProjectImg} />
        <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
        <Button type='button' onClick={onNewProject}>Create new project</Button>
    </div>)
}