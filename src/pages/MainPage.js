import {Alert} from "react-bootstrap";
import {Link} from "react-router-dom";

function MainPage() {
    return (
        <Alert key="primary" variant="primary">
            Вы находитесь на главной странице. Чтобы просматривать товары, <Link to="/">авторизируйтесь</Link>.
        </Alert>
    );
}

export default MainPage;