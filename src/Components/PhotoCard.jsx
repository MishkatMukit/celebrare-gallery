const PhotoCard = ({ photo, isFavourite = false, onToggleFavourite }) => {
    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
            <div className="aspect-4/3 overflow-hidden bg-slate-100">
                <img
                    src={`https://picsum.photos/id/${photo.id}/600/400`}
                    alt={`Photo by ${photo.author}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                <p className="min-w-0 truncate text-sm font-medium text-slate-800">
                    {photo.author}
                </p>

                <button
                    type="button"
                    onClick={() => onToggleFavourite?.(photo.id)}
                    aria-pressed={isFavourite}
                    aria-label={
                        isFavourite
                            ? `Remove photo by ${photo.author} from favourites`
                            : `Add photo by ${photo.author} to favourites`
                    }
                    className={`grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:outline-none ${
                        isFavourite
                            ? 'bg-rose-50 text-rose-500'
                            : 'text-slate-400 hover:bg-slate-100 hover:text-rose-500'
                    }`}
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill={isFavourite ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                    </svg>
                </button>
            </div>
        </article>
    );
};

export default PhotoCard;
