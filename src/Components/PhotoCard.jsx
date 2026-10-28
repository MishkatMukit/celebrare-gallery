function PhotoCard({ photo, isFavourite, onToggle }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={`Photo by ${photo.author}`}
        className="aspect-4/3 w-full bg-slate-100 object-cover"
        loading="lazy"
      />

      <div className="flex items-center justify-between gap-3 p-3">
        <p
          title={photo.author}
          className="min-w-0 truncate text-sm font-medium text-slate-700"
        >
          {photo.author}
        </p>

        <button
          type="button"
          onClick={() => onToggle(photo.id)}
          aria-pressed={isFavourite}
          aria-label={
            isFavourite ? "Remove from favourites" : "Add to favourites"
          }
          className={`grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none ${
            isFavourite
              ? "text-rose-500 hover:bg-rose-50"
              : "text-slate-400 hover:bg-slate-100 hover:text-rose-500"
          }`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill={isFavourite ? "currentColor" : "none"}
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
    </div>
  );
}

export default PhotoCard;
