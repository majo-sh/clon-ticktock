import VideoPlayer from "../VideoPlayer"
import './VideosFeed.css';

const VIDEOS = [
    {
        id: 1,
        author: '@grubspot',
        description: 'BIRRIA. PIZZA.🍕 from @birrialossocios #grubspot #birria #pizza #food #cheese #foodtiktok #PlutoTVDecades',
        likes: 122,
        shares: 22,
        comments: 33,
        songTitle: 'original sound creado por Kayla Nicole | Canciones populares en TikTok',
        albumImage: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/d62caf5683bfc8109c446cc388c677b7.jpeg?x-expires=1644609600&x-signature=vMPluoHVHH7j%2Bv7ed320ZsyNvAA%3D',
        src: 'https://v16-webapp.tiktok.com/1e36345e8c201b96b875c045f6eeff3a/6201c385/video/tos/useast2a/tos-useast2a-pve-0068/ee9833e0ae334a27b01d5c0c983fba20/?a=1988&br=4586&bt=2293&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7Th~XYoDXq&l=2022020719121801022309815603483E5D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amRubDg6ZjdpOTMzNzczM0ApZjM5OjZnNWQ3Nzw1N2c3ZGdhcm00cjRfLjZgLS1kMTZzcy4wMC0tMzE2YzJeYF5jXy46Yw%3D%3D&vl=&vr='

    },
    {
        id: 2,
        author: '@grubspot',
        description: 'BIRRIA. PIZZA.🍕 from @birrialossocios #grubspot #birria #pizza #food #cheese #foodtiktok #PlutoTVDecades',
        likes: 122,
        shares: 22,
        comments: 33,
        songTitle: 'original sound creado por Kayla Nicole | Canciones populares en TikTok',
        albumImage: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/d62caf5683bfc8109c446cc388c677b7.jpeg?x-expires=1644609600&x-signature=vMPluoHVHH7j%2Bv7ed320ZsyNvAA%3D',
        src: 'https://v16-webapp.tiktok.com/68d476c9b24176561ee7e341f74c3817/62034a09/video/tos/useast2a/tos-useast2a-ve-0068c001/37f0330e6fd145c5ba8b9425b21b676f/?a=1988&br=5680&bt=2840&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7Thn4_oDXq&l=20220208225750010223016097070BA093&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2pqaWxueTNrMzMzaTczM0ApNzc7ZWlpNDs3Nzc0Ozk6NGcyMzNrYHNnamFgLS1fMTZzc2E1NS9iYS02MmEtYGIwXmE6Yw%3D%3D&vl=&vr='
    },
    {
        id: 3,
        author: '@grubspot',
        description: 'BIRRIA. PIZZA.🍕 from @birrialossocios #grubspot #birria #pizza #food #cheese #foodtiktok #PlutoTVDecades',
        likes: 122,
        shares: 22,
        comments: 33,
        songTitle: 'original sound creado por Kayla Nicole | Canciones populares en TikTok',
        albumImage: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/d62caf5683bfc8109c446cc388c677b7.jpeg?x-expires=1644609600&x-signature=vMPluoHVHH7j%2Bv7ed320ZsyNvAA%3D',
        src: 'https://v16-webapp.tiktok.com/93b1fa54e9f70e2a2004ff7603f2353c/6205d30f/video/tos/useast2a/tos-useast2a-ve-0068c002/cef761861a5a4b2bb041e5cd6e04dee2/?a=1988&br=2348&bt=1174&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7ThtlPpDXq&l=20220210210749010192061170007097C9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3hmcTc6ZnV5OzMzNzczM0ApNDQ5Z2ZoNDw6N2RmZDY3NWcuM3BqcjQwXi5gLS1kMTZzc2IyNi8xYi42Y14zYDVjLmA6Yw%3D%3D&vl=&vr='
    }
]



export default function VideosFeed() {
    return (
        <section className="feed">
            {
                VIDEOS.map(video => {
                    return ( <div className="item" key={video.id}>
                        <VideoPlayer  {...video} />
                    </div>
                    )
                })

            }

        </section>
    )
}