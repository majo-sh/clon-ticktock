import { useEffect, useState } from "react";
import VideoPlayer from "../VideoPlayer"
import './VideosFeed.css';
import { getVideos } from '../../services/index'


export default function VideosFeed() {
    const [videos, setVideos] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        getVideos().then(([error, videos]) => {
            if (error) return setError(error)
            setVideos(videos)
            console.log(videos)
        })
    }, [])

    if (error) {
        return (
            <span>{error}</span>
        )
    }
    return (
        <section className="feed">
            {
                videos.map(video => {
                    const { users = {} } = video
                    const { avatar, author } = users
                    return (<div className="item" key={video.id}>
                        <VideoPlayer  {...video} author={author} avatar={avatar} />
                    </div>
                    )
                })

            }

        </section>
    )
}