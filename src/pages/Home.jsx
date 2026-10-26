import Gallery from '../Components/Gallery';

const Home = () => {
    return (
        <main className="min-h-screen bg-slate-50 antialiased">
            <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <header className="mb-10 text-center">
                    <span className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-indigo-700 uppercase">
                        Celebrare
                    </span>

                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Photo Gallery
                    </h1>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
                        Browse a curated stream of photos from Picsum. Search by
                        author, and tap a heart to keep the ones you like.
                    </p>
                </header>

                <Gallery />
            </div>
        </main>
    );
};

export default Home;
