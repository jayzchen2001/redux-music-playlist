import React, { Component } from 'react'
import { Button } from '@mui/material';

import {fetchSongs} from "./musicAPI";
import store from "./store"

class MusicButton extends Component {
    render() {

        
        return (
            <Button onClick={() => {
                fetchSongs()
            }}>
                Load Music
            </Button>
        )
    }
}

export default MusicButton