import { Comments } from "../../Icons/Comments";
import { Heart } from "../../Icons/Heart";
import { Shares } from "../../Icons/Shares";
import './VideoActions.css'

export default function VideoPlayerActions ({likes=12, comments = 3, shares =5, hearted= false, }) {
   
    const handleLike = () => {
        alert('Like')
    }

    const handleComment =() => {
        alert('Comment')
    }
    const handleShare =() => {
        alert('Share')
    }
   
   
   
    return (
        <aside className="actions">
            <button onClick={handleLike} className="action">
            <Heart/>
            <span title="likes">{likes}</span>
            </button>
            <button onClick={handleComment} className="action">
            <Comments/>
            <span title="comments">{comments}</span>
            </button>
            <button onClick={handleShare} className="action">
            <Shares/>
            <span title="shares">{shares}</span>
            </button>

        </aside>

        
    )
}