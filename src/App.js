
import './App.css';

import MusicButton from './playlists/musicButton'
import MusicList from './playlists/musicList'

import { Box, Grid } from '@mui/material';

var boxStyle = {
  border: '1px solid grey',
  mx: '4px',
}

var gridStyle = {
  display: 'flex',
  flexDirection: 'column',
}


function App() {
  return (
    <div className="App">
      <MusicButton/>
      <div className="App">
        <Box sx={boxStyle}>
          <Grid container>
            <Grid item xs={4} sx={gridStyle}>
              <MusicList />
            </Grid>
            <Grid item xs={4} sx={gridStyle}>
              <MusicList listType={"Favorites"} />
            </Grid>
            <Grid item xs={4} sx={gridStyle}>
              <MusicList listType={"Playlist"} />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default App;
