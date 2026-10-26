import useFetchPhotos from '../Hooks/useFetchPhotos';
import Loading from './Loading';
import PhotoCard from './PhotoCard';

const Gallery = () => {
    const { photos, loading, error } = useFetchPhotos();

    if (loading) {
        return (
            <Loading></Loading>
        );
    }

    if (error) {
        return (
            <div
                role="alert"
                className="mx-auto max-w-lg rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center"
            >
                <h2 className="text-lg font-semibold text-red-800">
                    Couldn&apos;t load photos
                </h2>
                <p className="mt-2 text-sm text-red-700">{error}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {photos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </div>
    );
};

export default Gallery;
