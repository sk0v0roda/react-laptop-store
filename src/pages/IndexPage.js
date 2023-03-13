import TablePageContent from "../components/TablePageContent";
import {useCallback, useEffect, useState} from "react";
import {loadItemsList} from "../network/items";
import {useAuth} from "../hooks/use-auth";

function IndexPage() {
    const {isAuth, email} = useAuth();
    const [items, setItem] = useState([]);
    const [offset, setOffset] = useState(null);

    useEffect(() => {
        (async () => {
            const {offset: newOffset, records} = await loadItemsList(10, null);
            setOffset(newOffset);
            setItem(records);
        })()
    }, [])

    const loadMoreItems = useCallback(async () => {
        const {offset: newOffset, records} = await loadItemsList(10, offset);

        setOffset(newOffset);
        setItem(items => ([...items, ...records]));
    }, [offset])

    return isAuth ? <TablePageContent items={items} loadItems={loadMoreItems}/> :
        (
            <div>
                <h1>Для просмотра каталога нужно зарегистрироваться</h1>
            </div>
        )
}

export default IndexPage;