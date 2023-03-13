import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <div style={{ padding: 10}}>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/catalogue" element={<IndexPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
