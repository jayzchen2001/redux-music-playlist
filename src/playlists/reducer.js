import * as actions from "./actionTypes"

export default function reducer(state = {songs: []}, action) {
    if (action.type === actions.MUSIC_LOADED) {
        return {songs: [...action.payload.data]};

    } else if (action.type === actions.MUSIC_FAVORITE) {
        return {
            ...state,
            songs: state.songs.map(song =>
            song.id != action.payload.id ? song : { ...song, favorited: action.payload.value }
        )};
        
    } else if (action.type === actions.MUSIC_QUEUE) {
        return {
            ...state,
            songs: state.songs.map(song =>
            song.id != action.payload.id ? song : { ...song, playlist: action.payload.value }
        )};
    }

    return state;
}