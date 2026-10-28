import { useState, useReducer, useEffect, useCallback, useMemo } from "react";
import useFetchPhotos from "../Hooks/useFetchPhotos";
import {
  favouritesReducer,
  TOGGLE_FAVOURITE,
} from "../reducers/favouritesReducer";
import SearchBar from "./SearchBar";
import PhotoCard from "./PhotoCard";
import Loading from "./Loading";
import Error from "./Error";

const STORAGE_KEY = "favourites";
function loadFavourites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function Gallery() {

  const { photos, loading, error } = useFetchPhotos();

  const [favourites, dispatch] = useReducer(favouritesReducer,[],loadFavourites);
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  }, [favourites]);
  
  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  const handleToggle = (id) => {
    dispatch({ type: TOGGLE_FAVOURITE, id });
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <section className="space-y-8">
      <div className="mx-auto w-full max-w-xl">
        <SearchBar value={searchTerm} onChange={handleSearch} />
      </div>

      {filteredPhotos.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center text-sm text-slate-500">
          No photos found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Gallery;