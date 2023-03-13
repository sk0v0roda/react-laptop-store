import {Link} from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <h1>Not Found</h1>
            <Link to="/">Главная</Link>
        </>
    );

}

export default NotFoundPage;