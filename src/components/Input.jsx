import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = '',
    ...props
}, ref){
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label className='block mb-1' htmlFor={id}>{label}</label>}
            <input 
                type={type} 
                className={`${className} px-3 py-2 rounded-lg outline-none focus:bg-blue-500 duration-200 text-black bg-white border-blue-800 w-full`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input