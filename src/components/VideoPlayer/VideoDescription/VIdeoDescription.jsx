import AlbumDisk from "../AlbumDisk/AlbumDisk";
import SongTiker from "./SongTiker";
import './Videodescription.css'

export default function VideoDescription({author, description, albumImage, songTitle}) {
    return (
        <footer className="footer">
            <div className="textWrapper">
                <strong className="author">@{author}</strong>
                <p className="description">{description}</p>
                <SongTiker songTitle ={songTitle} /> 
            </div>
            <div>
                <AlbumDisk albumImage={albumImage}/>
            </div>
        </footer>
    )
}