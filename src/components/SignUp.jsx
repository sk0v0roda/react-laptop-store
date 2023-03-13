import {Form} from './Form';
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/catalogue')
                })
            .catch(console.error)
    }

    return (
        <div>
            <Form
                title="Зарегистрируйтесь"
                handleClick={handleRegister}
            />
        </div>)
}
export {SignUp}