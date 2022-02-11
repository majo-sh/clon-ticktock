import { Comments } from "../../Icons/Comments";
import { Heart } from "../../Icons/Heart";
import { Shares } from "../../Icons/Shares";
import './VideoActions.css'

export default function VideoPlayerActions({author, avatar, likes = 22, comments = 2, shares = 22, hearted = false, }) {

    const handleLike = () => {
        alert('Like')
    }

    const handleComment = () => {
        alert('Comment')
    }
    const handleShare = () => {
        alert('Share')
    }



    return (
        <aside className="actions">
            <div className="user">
                <img src={avatar} alt={author} class />
                <img src='https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg' alt='author'/>
            </div>
            <button onClick={handleLike} className="action">
                <Heart />
                <span title="likes">{likes}</span>
            </button>
            <button onClick={handleComment} className="action">
                <Comments />
                <span title="comments">{comments}</span>
            </button>
            <button onClick={handleShare} className="action">
                <Shares />
                <span title="shares">{shares}</span>
            </button>

        </aside>


    )
}