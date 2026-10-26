const SearchBar = ({ value, onChange }) => {
    return (
        <div className="w-full">
            <label
                htmlFor="photo-search"
                className="mb-2 block text-sm font-medium text-slate-700"
            >
                Search by author
            </label>

            <div className="relative">
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="pointer-events-none absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-slate-400"
                >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                </svg>

                <input
                    id="photo-search"
                    type="search"
                    value={value}
                    onChange={onChange}
                    placeholder="e.g. Alejandro Escamilla"
                    autoComplete="off"
                    spellCheck={false}
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pr-4 pl-11 text-base text-slate-900 shadow-sm transition outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
            </div>
        </div>
    );
};

export default SearchBar;
