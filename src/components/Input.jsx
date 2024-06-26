import { forwardRef, useRef, useImperativeHandle } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    const input = useRef();
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

    useImperativeHandle(ref, () => {
        return {
            value() { return input.current.value; }
        }
    });

    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textarea ?
            <textarea ref={input} className={classes}  {...props} /> :
            <input ref={input} className={classes} {...props} />
        }
    </p>
})

export default Input;