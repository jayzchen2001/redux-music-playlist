import React, { Component } from 'react'

import {List, Box} from '@mui/material';
import ListItem from '@mui/material/ListItem';

import store from "./store"

import { useSelector } from 'react-redux'
import MusicTile from './musicTile';

var boxStyle1 = {
    border: '1px solid grey',
    margin: '2px',
    height: '100%',
}
var boxStyle2 = {
    border: '1px solid grey',
    margin: '2px',
    height: '20px',
}
var boxStyle3 = {
    border: '1px solid grey',
    margin: '2px',
    height: 'calc(100% - 30px)',
}

function MusicList(props) {

    const songs = useSelector(state => state.songs)
    // console.log(songs)

    var listName = "My Music"
    var listItems = []

    switch(props.listType) {
        case "Favorites":
            listName = "Favorites"
            listItems = songs.map((s) => {
                if (s.favorited == true) {
                    return <MusicTile key={s.id} {...s} />
                }
            });
            break;
        case "Playlist":
            listName = "Playlist"
            listItems = songs.map((s) => {
                if (s.playlist == true) {
                    return <MusicTile key={s.id} {...s} />
                }
            });
            break;
        default:
            listItems = songs.map((s) =>
                <MusicTile key={s.id} {...s} />
            );
    }


    return (
        <Box sx={boxStyle1}>
            <Box sx={boxStyle2}>
                {listName}
            </Box>
            <Box sx={boxStyle3}>
                <List>
                    {listItems}
                </List>
            </Box>
        </Box>
    );


}
  
export default MusicList;