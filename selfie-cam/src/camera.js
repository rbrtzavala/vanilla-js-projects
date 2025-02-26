export const getVideo = async () => {
    const avStream = await navigator.mediaDevices.getUserMedia({
        video: true
    })

    const video = document.createElement('video')
    try {
        video.srcObject = avStream
    } catch(err) {
        video.src = window.URL.createObjectURL(avStream)
    }

    await video.play()
    return video
}

export function drawVideo(video, canvas) {
    const context = canvas.getContext('2d')
    canvas.width = video.videoWidth
    canvas.height = canvas.width
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
}