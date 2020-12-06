
// When click get song 
$(SONG_SUBMIT_BTN_ID_SEL).click(function() {
    console.log("In jQuery function.")
    let vibeScore = localStorage.getItem('vibe_score')
    onUpdateSongVibe(vibeScore);
});

// On click listener
function onUpdateSongVibe(vibeScore) {
    getSongVibeByScore(vibeScore);
}

function getSongVibeByScoreListener() {
    // Creation successful
    if (this.status === 200) {
        let song_name = JSON.parse(this.responseText)[0]['song_name'];
        let album_name = JSON.parse(this.responseText)[0]['album_name'];
        let song_link = JSON.parse(this.responseText)[0]['song_link'];
        let img = JSON.parse(this.responseText)[0]['img']

        $(SONG_TITLE_ID_SEL).text(song_name);
        $(SONG_ALBUM_ID_SEL).text(album_name);
        $(SONG_LINK_ID_SEL).attr("href", song_link);
        $(SONG_IMG_ID_SEL).attr("src", img);
    } 
    // Failed, only if the user somehow enters something not within
    // the range of 1 to 10.
    else {
        alert("Not a valid vibe score.");
    }
}

function getSongVibeByScore(score) {
    // Make a request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", getSongVibeByScoreListener);
    oReq.open("GET", "https://kanyemusicrecommender.herokuapp.com/api/v1/song_vibes/score/" + score);

    // Add authorization
    let token = localStorage.getItem('token');

    // For testing
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDcwOTYzNzJ9.UaVT23_Fb3wEksk4AqDNYMBoDi-hw0iwFAkJH3oRXyA";
    oReq.setRequestHeader("authorization", token);
    oReq.send();
}