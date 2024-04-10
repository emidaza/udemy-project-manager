export default function Button({children, ...props}) {
    return <button className="w-fit	px-4 py-3 border-solid rounded-md bg-stone-700 text-sm text-stone-400 hover:bg-stone-600 hover:text-stone-100" {...props}>{children}</button>
}