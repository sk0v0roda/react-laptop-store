import {Button, Spinner, Table} from "react-bootstrap";
import TableRow from "./TableRow";

function TablePageContent({items, loadItems}) {

    return (
        <>
            <h1>Список товаров</h1>
            {!items[0] ? (
                <>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <h2>Loading...</h2>
                </>
            ) : (
                <>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Название</th>
                            <th>Цена</th>
                            <th>Дата выпуска</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map(item => <TableRow key={item.Name} item={item}/>)}
                        </tbody>
                    </Table>
                    <Button onClick={loadItems}>Загрузить ещё</Button>
                </>
            )}
        </>
    )

}

export default TablePageContent;