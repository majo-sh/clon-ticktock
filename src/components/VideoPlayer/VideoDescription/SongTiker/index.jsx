import Music from "../../../Icons/Music";
import Marquee from "react-fast-marquee";
import './songtiker.css'

export default function SongTiker({ songTitle }) {
    return (
        <div className="song">
            <Music />

            <Marquee gradient={false} speed={100}>{songTitle}</Marquee>

        </div>
    )
}