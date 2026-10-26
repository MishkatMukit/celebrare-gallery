import Gallery from '../Components/Gallery';

const Home = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <header className="mb-10 text-center">
                    <p className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">
                        Celebrare
                    </p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
                        Photo Gallery
                    </h1>
                    <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
                        A curated stream of photos from Picsum.
                    </p>
                </header>

                <Gallery />
            </div>
        </main>
    );
};

export default Home;
