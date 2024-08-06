import * as actions from "./actionTypes";

export function musicLoaded(data) {
    return {
        type: actions.MUSIC_LOADED,
        payload: {
            data: data,
        }
    };
}

export function musicFavorite(id, value) {
    return {
        type: actions.MUSIC_FAVORITE,
        payload: {
            id: id,
            value: value,
        }
    };
}

export function musicQueue(id, value) {
    return {
        type: actions.MUSIC_QUEUE,
        payload: {
            id: id,
            value: value,
        }
    };
}