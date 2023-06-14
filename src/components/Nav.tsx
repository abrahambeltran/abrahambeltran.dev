import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="flex flex-col top-0 bg-white rounded-xl w-full">
                <p className="flex justify-center mb-2 font-bold text-xl nav-link">
                    ┌─ Abe Dev ────┐
                </p>
                <nav className="flex flex-col items-end list-none m-6 ">
                    <Link
                        className="inline-block w-full text-center text-purple-800 hover:text-purple-600 "
                        to="/"
                    >   
                        <div className="inline-block w-full text-end hover:bg-amber-500">
                            Home
                        </div>
                    </Link>

                    <Link
                        className="inline-block w-full text-center text-purple-800 hover:text-purple-600"
                        to="/blog"
                    >
                        <div className="inline-block w-full text-end hover:bg-amber-500">
                            Blog
                        </div>
                    </Link>

                    <Link
                        className="inline-block w-full text-center text-purple-800 hover:text-purple-600"
                        to="https://github.com/abrahambeltran"
                    >
                        <div className="inline-block w-full text-end hover:bg-amber-500">
                            GitHub
                        </div>
                    </Link>

                    <Link
                        className="inline-block w-full text-center text-purple-800 hover:text-purple-600"
                        to="/guestbook"
                    >
                        <div className="inline-block w-full text-end hover:bg-amber-500">
                            Guest
                        </div>
                    </Link>
                </nav>
                <p className="flex justify-center mb-2 font-bold text-xl nav-link">
                    └────────────┘
                </p>
            </div>

            <Outlet />
        </>
    );
};

export default Layout;
