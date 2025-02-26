export async function getVideo() {
    const avStream = await navigator.mediaDevices.getUserMedia({
        // audio: true,
        video: true
    })

    const video = document.createElement('video')
    video.srcObject = avStream
    await video.play()
    return video
}