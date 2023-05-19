import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Guestbook from "./components/Guestbook";

function App() {
    return (
        <BrowserRouter>
            <div className="p-2 m-0 mx-4 mt-8 md:mt-20 lg:mt-32">
                <div className="flex md:flex-row py-4 flex-col">
                    <Routes>
                        <Route path="/" element={<Nav />}>
                            <Route index element={<Home />} />
                            <Route path="blog" element={<Blog />} />
                            <Route path="about" element={<About />} />
                            <Route path="guestbook" element={<Guestbook />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
