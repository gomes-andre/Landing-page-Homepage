function togglePause() {
    'use strict';
    var myPlayer = document.getElementById('slidervideo');

    if (myPlayer.paused) {
        myPlayer.play();
    } else {
        myPlayer.pause();
    }
}

function pauseVideo() {
    'use strict';
    var myPlayer = document.getElementById('slidervideo');
    
    myPlayer.pause();
}