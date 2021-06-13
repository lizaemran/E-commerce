import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import LibrarySongs from './LibrarySongs'
const Library = ({setSongs, songs, isPlaying, audioRef, libraryStatus, setCurrentSong}) => {
    return (
        <div className= {`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className= "library-songs">
               {songs.map((song) => (
                <LibrarySongs setSongs={setSongs} isPlaying = {isPlaying} audioRef={audioRef} key={song.id} id = {song.id} songs={songs} setCurrentSong={setCurrentSong} song={song} /> 
               ))}
            </div>
        </div>
    )
}

export default Library
