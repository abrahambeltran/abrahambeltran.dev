import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="container p-2 mx-auto">
                <div className="flex flex-row flex-wrap py-4">
                    <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
                        <div className="sticky top-0 p-4 bg-white rounded-xl w-full">
                            <ul className="nav flex flex-col overflow-hidden">
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-purple-800 hover:text-purple-600 truncate"
                                        href="/#home"
                                    >
                                        <span className="fa fa-home mr-2"></span>{" "}
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-purple-800 hover:text-purple-600"
                                        href="/#reports"
                                    >
                                        <span className="fa fa-chart-bar mr-2"></span>{" "}
                                        Blog{" "}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-purple-800 hover:text-purple-600"
                                        href="/#int"
                                    >
                                        <span className="fa fa-layer-group mr-2"></span>{" "}
                                        About{" "}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-purple-800 hover:text-purple-600"
                                        href="/#reports"
                                    >
                                        <span className="fa fa-chart-bar mr-2"></span>{" "}
                                        Guest Book{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <main
                        role="main"
                        className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2"
                    >
                        <h1 className="text-2xl" id="home">
                            Main Content
                        </h1>
                        <p>
                            Let's look at the base Tailwind classNamees that are
                            used for this layout. There are 2 columns. The left
                            sidebar (aside), and the main content area on the
                            right.{" "}
                        </p>
                        <p className="pt-4">
                            {" "}
                            The flexbox (parent) container:{" "}
                        </p>
                        <ul>
                            <li>
                                <span className="text-purple-700">flex</span> -
                                for <code>dislay:flex</code>
                            </li>
                            <li>
                                flex-row - for <code>flex-direction: row</code>
                            </li>
                            <li>
                                flex-wrap - for <code>flex-wrap: wrap</code>
                            </li>
                            <li>
                                py-4 - for{" "}
                                <code>padding-(top|bottom): 1rem</code>
                            </li>
                        </ul>
                        <p className="pt-4"> The aside (left) column: </p>
                        <ul>
                            <li>w-full - for 100% width</li>
                            <li>sm:w-1/3 - for 33% width on sm and larger</li>
                            <li>md:w-1/4 - for 25% width on md and larger</li>
                            <li>
                                px-2 - for{" "}
                                <code>padding-(left|right): .5rem</code>
                            </li>
                        </ul>
                        <p className="pt-4"> The main (right) column: </p>
                        <ul>
                            <li>w-full - for 100% width</li>
                            <li>sm:w-1/3 - for 66% width on sm and larger</li>
                            <li>md:w-1/4 - for 75% width on md and larger</li>
                            <li>
                                pt-1 - for <code>padding-top: .25rem</code>
                            </li>
                            <li>
                                px-2 - for{" "}
                                <code>padding-(left|right): .5rem</code>
                            </li>
                        </ul>
                    </main>
                </div>
            </div>
        </>
    );
}

export default App;
