const Home = () => {
    return (
        <main className="flex-auto w-full pt-1 px-2 font-serif flex-row">
            <h1 className="text-2xl font-bold" id="home">
                Welcome to the endgame!
            </h1>
            <p className="my-4">
                This is my personal website which is currently under
                construction. Plans are to have the sections currently seen on
                the left with login added so that posts can have
                comments/likes/user posts/profiles
            </p>
            <h1 className="text-xl font-bold" id="home">
                What is this all about?
            </h1>
            <p className="my-4">
                My name is Abraham, some people coming here may also know me as
                727.
            </p>
            <p className="my-3 mb-8">
                I'm actually currently looking for a software engineering
                position so if you stumble upon this website and are hiring or
                this was attached to an application, browse around and make sure
                to contact me.
            </p>
            <p className="my-4">
                <p className="text-md font-bold">Topics of discussion:</p>
                <ul className="list-disc mx-4">
                    <li>Building and fixing my car</li>
                    <li>Technical tidbits about important software</li>
                </ul>
            </p>
            <p className="my-4">
                <p className="text-md font-bold">Interests:</p>
                <ul className="list-disc mx-4">
                    <li>Building things</li>
                    <li>Breaking things</li>
                    <li>Learning about how the universe functions</li>
                    <li>Improving my engineering skills</li>
                    <li>Hiking with my cat</li>
                </ul>
            </p>

            <p className="my-4 mt-10">
                This website is mainly going to be for voicing my opinions while
                sharing different technical thoughts and learnings as I progress
                as a developer. Although I don't have a lot of experience
                writing, I do thoroughly enjoy it and have always been
                interested in starting a blog which will be hosted here!
            </p>
            <p className="my-4">
                Most of what you currently see will undoubtedly change over time
                and evolve as I evolve as a developer. Due to this, things are
                constantly changing and some of the website's core
                functionalities and technologies might also change.
            </p>
            <p className="my-4">
                If for whatever reason you are expecting to link to something
                here and it is not here, there will be a chat where you can
                submit issues/thoughts/etc soon enough.
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
