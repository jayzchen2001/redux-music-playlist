import * as actions from "./actionTypes"

export default function reducer(state = [], action) {
    if (action.type === actions.MUSIC_LOADED) {
        return [...action.payload.data];

    } else if (action.type === actions.MUSIC_FAVORITE) {
        return state.map(song =>
            song.id != action.payload.id ? song : { ...song, favorited: action.payload.value }
        );
        
    } else if (action.type === actions.MUSIC_QUEUE) {
        return state.map(song =>
            song.id != action.payload.id ? song : { ...song, playlist: action.payload.value }
        );
    }

    return state;
}