import TablePageContent from "../components/TablePageContent";
import {useCallback, useEffect, useState} from "react";
import {loadItemsList} from "../network/items";

function IndexPage() {
    const [items, setItem] = useState([]);
    const [offset, setOffset] = useState(null);

    useEffect(() => {
        (async () => {
            const { offset: newOffset, records } = await loadItemsList(10, null);
            setOffset(newOffset);
            setItem(records);
        })()
    }, [])

    const loadMoreItems = useCallback(async () => {
        const { offset: newOffset, records } = await loadItemsList(10, offset);

        setOffset(newOffset);
        setItem(items => ([...items, ...records]));
    }, [offset])

    return <TablePageContent items={items} loadItems={loadMoreItems}/>
}

export default IndexPage;