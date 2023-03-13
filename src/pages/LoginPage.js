import {Link} from "react-router-dom";
import {Login} from "../components/Login";

function LoginPage() {
    return (
    <div>
        <h1>Войдите в свой профиль</h1>
            <Login />
        <p>
            Или <Link to="/register">зарегистрируйтесь</Link>
        </p>
    </div>
    );
}

export default LoginPage;