import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice";
import {useAuth} from "../hooks/use-auth";
import Button from 'react-bootstrap/Button';

function Header() {
    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();
    return (isAuth ?
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>Laptop-store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link class="nav-link" to="/">Главная</Link>
                                <Link class="nav-link" to="/catalogue">Каталог</Link>
                                <Link class="nav-link" to="/login">Войти</Link>
                                <Button variant="outline-danger"
                                        size="sm"
                                    onClick={() => dispatch(removeUser())}
                                >Выйти из профиля
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </> :
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>Laptop-store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link class="nav-link" to="/">Главная</Link>
                                <Link class="nav-link" to="/catalogue">Каталог</Link>
                                <Link class="nav-link" to="/login">Войти</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
    );
}

export default Header;