import './style.css'
import { getVideo, drawVideo } from './camera'

const video = await getVideo()
const canvas = document.querySelector('canvas')
const button = document.getElementById('camera')

button.addEventListener('click', () => {
    console.log('drawing')
    drawVideo(video, canvas)
})

await video.play()