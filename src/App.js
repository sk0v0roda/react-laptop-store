import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {Provider} from "react-redux";
import {store} from "./store";
import './firebase';
function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
            <div style={{padding: 10}}>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/catalogue" element={<IndexPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </Provider>
</BrowserRouter>
)
    ;
}

export default App;
