import { supabase } from './supabase'

export const getVideos = async () => {
    let { data: videos, error } = await supabase
        .from('videos')
        .select(`*, users:user_id (
            author,
            avatar,
            id
            )`)
       
        
            console.log([error, videos])
    return [error, videos]
}