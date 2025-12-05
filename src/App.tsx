import {BrowserRouter, Route, Routes} from "react-router";
import Detail from "./pages/Detail.tsx";
import Home from "./pages/Home.tsx";
import {Reset} from "styled-reset";
import Search from "./pages/Search.tsx";

function App() {
    return (
        <BrowserRouter>
            <Reset/>
            <Routes>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;