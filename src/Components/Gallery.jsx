import { useCallback, useMemo, useState } from 'react';
import useFetchPhotos from '../Hooks/useFetchPhotos';
import useFavourites from '../Hooks/useFavourites';
import Loading from './Loading';
import PhotoCard from './PhotoCard';
import SearchBar from './SearchBar';

const Gallery = () => {
    const { photos, loading, error } = useFetchPhotos();
    const { isFavourite, toggleFavourite } = useFavourites();
    const [query, setQuery] = useState('');

    const handleSearchChange = useCallback((event) => {
        setQuery(event.target.value);
    }, []);

    const filteredPhotos = useMemo(() => {
        const term = query.trim().toLowerCase();
        if (!term) return photos;

        return photos.filter((photo) =>
            photo.author.toLowerCase().includes(term)
        );
    }, [photos, query]);

    const trimmedQuery = query.trim();

    return (
        <section className="space-y-8">
            <div className="mx-auto w-full max-w-xl">
                <SearchBar value={query} onChange={handleSearchChange} />
            </div>

            {loading && <Loading />}

            {!loading && error && (
                <div
                    role="alert"
                    className="mx-auto max-w-lg rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center"
                >
                    <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-red-100 text-red-600">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 8v5" />
                            <path d="M12 16h.01" />
                        </svg>
                    </div>

                    <h2 className="mt-4 text-lg font-semibold text-red-800">
                        Couldn&apos;t load photos
                    </h2>
                    <p className="mt-1 text-sm text-red-700">{error}</p>
                    <p className="mt-1 text-sm text-red-600">
                        Refresh the page to try again.
                    </p>
                </div>
            )}

            {!loading && !error && filteredPhotos.length === 0 && (
                <div className="mx-auto max-w-lg py-16 text-center">
                    <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-slate-100 text-slate-400">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" />
                        </svg>
                    </div>

                    <h2 className="mt-4 text-lg font-semibold text-slate-800">
                        {trimmedQuery ? 'No matching photos' : 'No photos to show'}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                        {trimmedQuery
                            ? `Nothing matches “${trimmedQuery}”. Try another author name.`
                            : 'Please try again later.'}
                    </p>
                </div>
            )}

            {!loading && !error && filteredPhotos.length > 0 && (
                <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {filteredPhotos.map((photo) => (
                        <PhotoCard
                            key={photo.id}
                            photo={photo}
                            isFavourite={isFavourite(photo.id)}
                            onToggleFavourite={toggleFavourite}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Gallery;
