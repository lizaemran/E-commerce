import React, {useState, useRef} from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './data';
import Nav from './components/Nav';
import Library from './components/Library';
import { library } from '@fortawesome/fontawesome-svg-core';
function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
});
const [libraryStatus, setlibraryStatus] = useState(false);
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  console.log(duration);
  const roundedCurrent=Math.round(current);
  const roundedDuration=Math.round(duration);
  const animation= Math.round((roundedCurrent/roundedDuration)* 100);
  setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation,});
};
 const songEndHandler = async() => {
  let currentIndex = songs.findIndex((song)=> song.id === currentSong.id);
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      if (isPlaying) audioRef.current.play();
 }
  return (
    <div className={`App ${libraryStatus ? "library-active" : "" }`}>
      <Nav libraryStatus={libraryStatus} setlibraryStatus={setlibraryStatus} />
      <Song currentSong={currentSong}/>
      <Player 
      setSongs = {setSongs}
      setCurrentSong = {setCurrentSong}
      songs ={songs}
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      audioRef={audioRef}
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      currentSong={currentSong}/>
      <Library libraryStatus={libraryStatus} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} />
      <audio onEnded={songEndHandler} onLoadedMetadata= {timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref= {audioRef} src={currentSong.audio}></audio>

    </div>
  );
}

export default App;
