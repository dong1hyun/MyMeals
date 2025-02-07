import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});

function FavoritesContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds((prev) => [...prev, id]);
    };

    function removeFavorite(removeId) {
        setFavoriteMealIds((prev) => prev.filter((id) => id !== removeId));
    };

    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;