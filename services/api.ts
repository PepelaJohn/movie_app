export const TMDB_CONFIG = {
    BaseURL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_TMDB_API_ACCESS_KEY,
    headers:{
        accept:'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_ACCESS_KEY}`,
    }
}

export const fetchMovies = async ({query}:{query: string}) => {
    const endpoint = query ? `${TMDB_CONFIG.BaseURL}/search/movie?api_key=${TMDB_CONFIG.API_KEY}&query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.BaseURL}/discover/movie/?sort_by=popularity.desc&api_key=${TMDB_CONFIG.API_KEY}`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if(!response.ok) {
        throw new Error(`Error ${ response.statusText}: Failed to fetch movies`,);
    }
    const data = await response.json();
    console.log(data.results);
    return data.results;

}