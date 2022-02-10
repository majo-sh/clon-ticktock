import './Albumdisk.css'

export default function AlbumDisk ({albumImage}) {
    return (
        <div className='album' >
            <img className='albumImage' src={albumImage} alt="" />
        </div>
    )
}