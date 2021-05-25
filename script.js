var myVideo = document.getElementById("myVideo"); 

function playTheVideo() { 
    myVideo.play(); 
} 

function pauseTheVideo() { 
    myVideo.pause(); 
} 

function muteUnmuteTheVideo() {
    if (!myVideo.muted)
    {
        myVideo.muted = true;   
        
    }
    else
    {
        myVideo.muted = false;
    }
    
    
}

//muteTheVideo();