function TableButton({children, selected, onClick}) {
    const textColor = selected ? "rgb(244,206,20)" : "rgb(73,94,87)";
    return (
        <button type="button" className='font-heading font-bold rounded-2xl px-2 p-1' style={{backgroundColor: selected ? "rgb(73,94,87)" : "rgb(244,206,20)", color: textColor}} onClick={onClick}>
                {children}
        </button>
    )
    }
    export default TableButton