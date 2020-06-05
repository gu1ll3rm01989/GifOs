let btn_stop = document.getElementById('btn-stop')
let btn_init = document.getElementById('btn-init')
let video_rec = document.getElementById('video')
let stream = ''

let blob = ''
    // CAMERA ACCESS

async function getMedia(constraints) {


    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
            height: 480,
            widht: 480
        });
        console.log('Ok')
        return stream


    } catch (err) {
        console.log(err)
        return err

    }
}



// CAMERA INIT-STOP


function video_init() {
    getMedia()
        .then(function(stream) {
            video_rec.srcObject = stream
            video.play()

        })


}

function video_stop() {
    getMedia()
        .then(
            video.stopRecording
        )



}
let recorder = new RecordRTCPromisesHandler(video_rec, {
    type: 'video'
})

function viderecon() {


    recorder.startRecording(video_rec)
}

async function viderecof() {
    await recorder.stopRecording()
    blob = await recorder.getBlob()
    invokeSaveAsDialog(blob)
    console.log('ahora todo ok')
}






//RECORD



btn_init.addEventListener('click', video_init, viderecon)
btn_init.addEventListener('blur', video_stop)
btn_stop.addEventListener('click', viderecof)