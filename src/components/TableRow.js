function TableRow({item}) {
    return (
        <tr>
            <td>{item.Name}</td>
            <td>{item.price}</td>
            <td>{item.in_stock}</td>
        </tr>)
}

export default TableRow;