import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
                <div className="sticky top-0 p-4 bg-white rounded-xl w-full">
                    <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
                        <nav
                            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                            id="nav"
                        >
                            <li>
                                <Link
                                    className="nav-link text-purple-800 hover:text-purple-600 truncate"
                                    to="/"
                                >
                                    <span className="fa fa-home mr-2"></span>{" "}
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link text-purple-800 hover:text-purple-600"
                                    to="/blog"
                                >
                                    <span className="fa fa-chart-bar mr-2"></span>{" "}
                                    Blog{" "}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link text-purple-800 hover:text-purple-600"
                                    to="/about"
                                >
                                    <span className="fa fa-layer-group mr-2"></span>{" "}
                                    About{" "}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link text-purple-800 hover:text-purple-600"
                                    to="/guestbook"
                                >
                                    <span className="fa fa-chart-bar mr-2"></span>{" "}
                                    Guest Book{" "}
                                </Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </aside>

            <Outlet />
        </>
    );
};

export default Layout;
