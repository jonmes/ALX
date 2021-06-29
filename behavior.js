document.addEventListener("DOMContentLoaded", function(event){
    // alert('Hello! EveryBody!')
});

const thumbnailElement = document.getElementById("smart_thumbnail");



thumbnailElement.addEventListener("click", function(){
    if(thumbnailElement.className == ""){
        thumbnailElement.className = "small";
    }
    else{
        thumbnailElement.className = "";
    }
});


async defer crossorigin="anonymous"; src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0" nonce="ulaCShb2"