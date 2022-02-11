import clsx from 'clsx';
import {  useRef, useState } from 'react';
import '../../App.css';
import VideoDescription from './VideoDescription/VIdeoDescription.jsx';
import VideoPlayerActions from './VideoActions/VideoPlayerActions.jsx';



export default function VideoPlayer ({author, description, albumImage, songTitle, src, avatar}) {
    const [playing, setPlaying] = useState(false)
    const video = useRef()
    const handlePLayer = () => {
        if (playing) {
            video.current.pause()
        } else {
            video.current.play()
        }

        setPlaying(!playing)
    }

    const playerClasName = clsx( 'player', {
        // eslint-disable-next-line 
        [ 'hidden']: playing
    })
        
        return (
    
        <div className='wrapper'>
            
            <video className="video" src={src} loop controls={false} ref={video} onClick={handlePLayer}/>

            <i className={playerClasName} onClick={handlePLayer}></i>
            <VideoPlayerActions 
            author={author}
            avatar={avatar}
    
            />
            <VideoDescription
            albumImage={albumImage}
            author={author}
            description={description}
            songTitle={songTitle}
            />
        </div>
    )
}