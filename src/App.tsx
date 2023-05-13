import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="p-2 m-0 mx-4 mt-8 md:mt-20 lg:mt-32">
                <div className="flex md:flex-row py-4 flex-col">
                    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
                        <div className="sticky top-0 p-4 bg-white rounded-xl w-full">
                            <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
                                <nav
                                    className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                                    id="nav"
                                >
                                    <li>
                                        <a
                                            className="nav-link text-purple-800 hover:text-purple-600 truncate"
                                            href="/#home"
                                        >
                                            <span className="fa fa-home mr-2"></span>{" "}
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="nav-link text-purple-800 hover:text-purple-600"
                                            href="/#blog"
                                        >
                                            <span className="fa fa-chart-bar mr-2"></span>{" "}
                                            Blog{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="nav-link text-purple-800 hover:text-purple-600"
                                            href="/#about"
                                        >
                                            <span className="fa fa-layer-group mr-2"></span>{" "}
                                            About{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="nav-link text-purple-800 hover:text-purple-600"
                                            href="/#GuestBook"
                                        >
                                            <span className="fa fa-chart-bar mr-2"></span>{" "}
                                            Guest Book{" "}
                                        </a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </aside>
                    <main className="flex-auto w-full sm:w-2/3 md:w-3/4 pt-1 px-2 font-serif flex-row">
                        <h1 className="text-2xl font-bold" id="home">
                            Abraham Beltran
                        </h1>
                        <p className="my-4">
                            This is my personal website which is currently under
                            construction. Plans are to have the sections
                            currently seen on the left with login added so that
                            posts can have comments/likes/user posts/profiles
                        </p>
                        <p className="my-4">
                            This website will be developed slowly over the
                            course of 2023. More features and styling coming
                            soon!
                        </p>
                        <p className="my-4">
                            {" "}
                            This page is hosted using nginx on an ubuntu
                            instance hosted by DigitalOcean{" "}
                        </p>
                    </main>
                </div>
            </div>
        </>
    );
}

export default App;
