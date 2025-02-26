import './style.css'
import { getVideo, drawVideo } from './camera'


(async function run() {
    const video = await getVideo()
    const canvas = document.querySelector('canvas')
    const button = document.getElementById('camera')
    
    button.addEventListener('click', () => {
        drawVideo(video, canvas)
    })
})()