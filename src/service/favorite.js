export const FAVORITES_KEY = "app:v1:movies";


export async function loadFavorites() {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } 
  catch (error) {
    console.error("Errore caricamento favoriti:", error);
    return [];
  }
}

export async function saveFavorites(ids) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
  } 
  catch (error) {
    console.error("Errore salvataggio favoriti:", error);
  }
}