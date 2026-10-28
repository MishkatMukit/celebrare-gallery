import { useCallback, useEffect, useReducer } from 'react';
const STORAGE_KEY = 'celebrare:favourites';
const readStoredFavourites = () => {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (!stored) return [];
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed.map(String) : [];
    } catch {
        return [];
    }
};

const favouritesReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return state.includes(action.id)
                ? state.filter((id) => id !== action.id)
                : [...state, action.id];
        default:
            return state;
    }
};

const useFavourites = () => {
    const [favourites, dispatch] = useReducer(
        favouritesReducer,
        undefined,
        readStoredFavourites
    );

    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
        } catch {
            // Private mode/quota can block writes; favourites still work in memory.
        }
    }, [favourites]);

    const isFavourite = useCallback(
        (id) => favourites.includes(String(id)),
        [favourites]
    );

    const toggleFavourite = useCallback((id) => {
        dispatch({ type: 'toggle', id: String(id) });
    }, []);
    return { favourites, isFavourite, toggleFavourite };
};

export default useFavourites;
