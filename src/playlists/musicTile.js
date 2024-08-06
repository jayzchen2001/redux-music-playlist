import React, { Component } from 'react'
import { Button, IconButton  } from '@mui/material';

import ListItem from '@mui/material/ListItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import {
    musicFavorite,
    musicQueue,
} from "./actions";

import store from "./store"

function MusicTile(props) {

    var heartIcon
    if (props.favorited){
        heartIcon = <FavoriteIcon/>
    } else {
        heartIcon = <FavoriteBorderIcon/>
    }

    var addIcon
    if (props.playlist){
        addIcon = <AddCircleIcon/>
    } else {
        addIcon = <AddCircleOutlineIcon/>
    }

    return (
        <ListItem>
            {props.title}
            <IconButton onClick={() => {
                store.dispatch(musicFavorite(props.id, !props.favorited))
            }}>
                {heartIcon}
            </IconButton>
            <IconButton onClick={() => {
                store.dispatch(musicQueue(props.id, !props.playlist))
            }}>
                {addIcon}
            </IconButton>
        </ListItem>
    );


}
  
export default MusicTile;