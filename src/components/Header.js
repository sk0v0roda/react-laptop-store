import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice";

function Header() {
    const dispatch = useDispatch();

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Laptop-store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link style={{padding: 10}} to="/">Главная</Link>
                            <Link style={{padding: 10}} to="/catalogue">Каталог</Link>
                            <Link style={{padding: 10}} to="/login">Войти</Link>
                            <button
                                onClick={() => dispatch(removeUser())}
                            >Выйти из профиля</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;