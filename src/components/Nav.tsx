import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="flex flex-row top-0 bg-white rounded-xl w-full lg:flex-col">
                <p className="lg:flex justify-center mb-2 font-bold text-xl nav-link hidden lg:visible">
                    ┌─ Abe Dev ────┐
                </p>
                <nav className="flex flex-row items-end list-none m-6 space-x-2 lg:flex-col">
                    <Link
                        className="inline-block w-full text-center"
                        to="/"
                    >   
                        <div className="inline-block w-full text-end hover:bg-amber-500">
                            Home
                        </div>
                    </Link>

                    <Link
                        className="inline-block w-full text-center"
                        to="/blog"
                    >
                        <div className="inline-block w-full text-end hover:bg-amber-500">
                            Blog
                        </div>
                    </Link>

                    <Link
                        className="inline-block w-full text-center"
                        to="https://github.com/abrahambeltran"
                    >
                        <div className="inline-block w-full text-end hover:bg-amber-500">
                            GitHub
                        </div>
                    </Link>

                    <Link
                        className="inline-block w-full text-center"
                        to="/guestbook"
                    >
                        <div className="inline-block w-full text-end hover:bg-amber-500">
                            Guest
                        </div>
                    </Link>
                </nav>
                <p className="lg:flex justify-center mb-2 font-bold text-xl nav-link hidden lg:visible">
                    └────────────┘
                </p>
            </div>

            <Outlet />
        </>
    );
};

export default Layout;
