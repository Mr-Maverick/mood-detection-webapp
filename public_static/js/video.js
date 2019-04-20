var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player, x=0; // x=0 => video paused

function onYouTubePlayerAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
  
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
        player.playVideo();
        x=1;
    });

    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function() {
        player.pauseVideo();
        x=0;
    });
    
    var toggleButton = document.getElementById("toggle-button");
    toggleButton.addEventListener("click", function() {
        if(x)
            player.pauseVideo();
        else
            player.playVideo();

        x=1-x;
    });

}
