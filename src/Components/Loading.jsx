const Loading = () => {
    return (
        <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center justify-center gap-4 py-24"
        >
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600 motion-reduce:animate-none motion-reduce:border-indigo-600" />
            <p className="text-sm font-medium text-slate-500">Loading photos…</p>
        </div>
    );
};

export default Loading;
