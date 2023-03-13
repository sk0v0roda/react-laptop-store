import {Alert} from "react-bootstrap";

function MainPage() {
    return (
        <Alert key="primary" variant="primary">
            Вы находитесь на главной странице. Чтобы просматривать товары, авторизируйтесь.
        </Alert>
    );
}

export default MainPage;