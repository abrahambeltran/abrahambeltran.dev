import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Guestbook from "./components/Guestbook";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="guestbook" element={<Guestbook />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
