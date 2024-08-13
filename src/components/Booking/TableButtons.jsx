import TableButton from "../RadioButton/TableButton";

function TableButtons({ selectedTables, onTableChange }) {
  const tableOptions = ['Main hall', 'Terrace', 'Garden'];

  return (
    <div className="flex space-x-2">
      {tableOptions.map((option) => (
        <TableButton
          key={option}
          selected={selectedTables === option}
          onClick={() => onTableChange(option)}
        >
          {option}
        </TableButton>
      ))}
    </div>
  );
}

export default TableButtons;