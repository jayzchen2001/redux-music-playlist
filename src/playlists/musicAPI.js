import {musicLoaded} from "./actions";

import axios from 'axios';
import store from "./store";

import myData from './data.json';

const apiKey = process.env.ITLABPRO_API_KEY;

export function fetchSongs() {
    axios.get(`http://api.itlabpro.io/solo`, {
        params: {
            mykey: apiKey,
        },
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => {
        console.log('music loaded');
        store.dispatch(musicLoaded(response.data))
    }).catch(function (error) {
        console.log('music failed to load; using test data');
        store.dispatch(musicLoaded(myData.data))
    })
}