const videoElement = document.getElementById("video");
const picturebtn = document.getElementById("picturebtn");
const selectScreenbtn = document.getElementById("screenbtn");

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

picturebtn.addEventListener('click', async ()=>{
    // Disable button 
    picturebtn.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    picturebtn.disabled = false;
});

// onload  
selectScreenbtn.addEventListener("click", selectMediaStream)
