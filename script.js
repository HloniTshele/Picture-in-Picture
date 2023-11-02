const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt the user to select media stream, pass video element, then play 

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }

    }catch(err){
        console.log("Whoops, error here:", err)
    }
}

button.addEventListener('click', async ()=>{
    // Disable button 
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false;
});

// onload  
selectMediaStream()