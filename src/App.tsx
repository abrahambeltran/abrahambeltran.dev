import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Guestbook from "./components/Guestbook";

function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="grid grid-cols-5">
                    <div className="col-span-1">
                        <Nav />
                    </div>
                    <div className="col-span-4">
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="guestbook" element={<Guestbook />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
        
    );
}

export default App;
