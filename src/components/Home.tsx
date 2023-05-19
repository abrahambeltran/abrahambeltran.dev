const Home = () => {
    return (
        <main className="flex-auto w-full sm:w-2/3 md:w-3/4 pt-1 px-2 font-serif flex-row">
            <h1 className="text-2xl font-bold" id="home">
                Abraham Beltran
            </h1>
            <p className="my-4">
                This is my personal website which is currently under
                construction. Plans are to have the sections currently seen on
                the left with login added so that posts can have
                comments/likes/user posts/profiles
            </p>
            <p className="my-4">
                This website will be developed slowly over the course of 2023.
                More features and styling coming soon!
            </p>
            <p className="my-4">
                {" "}
                This page is hosted using nginx on an ubuntu instance hosted by
                DigitalOcean{" "}
            </p>
        </main>
    );
};

export default Home;
