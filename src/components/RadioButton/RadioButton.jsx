import React from 'react'

function RadioButton({children, selected, onClick}) {
const textColor = selected ? "rgb(244,206,20)" : "rgb(73,94,87)";
return (
    <button type="radio" className='font-heading h-10 w-10 font-bold rounded-full' style={{backgroundColor: selected ? "rgb(73,94,87)" : "rgb(244,206,20)", color: textColor}} onClick={onClick}>
            {children}
    </button>
)
}

export default RadioButton