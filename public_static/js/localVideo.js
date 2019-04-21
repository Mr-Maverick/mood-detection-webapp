var myVideo = document.getElementById("video"); 
const socket    = io('http://localhost:8080');

cy = 0 //consecutive yes-pause commands
cn = 0 //consecutive no-pause commands

socket.on('emoHtml', msg => {
    msg = msg.split(";")
    pause = msg[4]
    $('#content').html(`<h2>${msg[0]}</h2><h4>${msg[1]}</h4>`);
    $('#content2').html(`<h2>${msg[2]}</h2><h4>${msg[3]}</h4>`);
    if(pause == "y"){
        cy += 1
        cn = 0
    }
    else{
        cy = 0
        cn += 1
    }

    if(cy>3)
        myVideo.pause();
    
    if(cn>3) 
        myVideo.play();


});
