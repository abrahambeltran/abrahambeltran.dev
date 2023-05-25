import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="flex flex-col top-0 bg-white rounded-xl w-full">
                <Link
                    className="flex justify-center mb-2 font-bold text-xl nav-link"
                    to="/"
                >
                    Abe Dev
                </Link>
                <nav className="flex list-none justify-center mb-6">
                    <li>
                        <Link
                            className="nav-link text-purple-800 hover:text-purple-600 truncate"
                            to="/"
                        >
                            <span className="fa fa-home mr-2"></span> Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link text-purple-800 hover:text-purple-600"
                            to="/blog"
                        >
                            <span className="fa fa-chart-bar mr-2"></span> Blog{" "}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link text-purple-800 hover:text-purple-600"
                            to="https://github.com/abrahambeltran"
                        >
                            <span className="fa fa-layer-group mr-2"></span>{" "}
                            GitHub{" "}
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="nav-link text-purple-800 hover:text-purple-600"
                            to="/guestbook"
                        >
                            <span className="fa fa-chart-bar mr-2"></span> Guest
                            Book{" "}
                        </Link>
                    </li>
                </nav>
            </div>

            <Outlet />
        </>
    );
};

export default Layout;
