import { createContext, useContext } from 'react'
import { useState, useEffect } from "react";

import { loadFavorites, saveFavorites } from '../services/favorite';


const FavoriteContext = createContext();


export function FavoriteProvider({ children }) {

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    loadFavorites().then(setFavorites);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((current) => {
      const next = current.includes(id)
        ? current.filter(movieId => movieId !== id)
        : [...current, id];

      saveFavorites(next);
      return next;
    });
  }

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}


export function useFavorite() {
  return useContext(FavoriteContext);
}