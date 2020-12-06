
// When click get song 
$(SONG_SUBMIT_BTN_ID_SEL).click(function() {
    console.log("In jQuery function.")
    let vibeScore = localStorage.getItem('vibe_score')
    onUpdateSongVibe(vibeScore);

    // console.log(localStorage.getItem('song_name'));
    // console.log(localStorage.getItem('album_name'));
    // console.log(localStorage.getItem('song_link'));
    // console.log(localStorage.getItem('img'));
});


// On click listener
function onUpdateSongVibe(vibeScore) {
    getSongVibeByScore(vibeScore);
}

function getMultipleSongs(jsonObj) {
    // for each json obj in the response, get the songs?
}

// Preview the image file 
// function previewFile(imgLink) {
//     const preview = document.querySelector(SONG_IMG_ID_SEL);
//     //const file = document.querySelector(IMG_FILE_TYPE_SEL).files[0];
//     const file = imgLink;
//     const reader = new FileReader();
  
//     reader.addEventListener("load", function () {
//       // convert image file to base64 string
//       let imgString = reader.result;
//       preview.src = imgString;
//     }, false);
  
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//     else {
//         alert("This is not an image.");
//     }
//     // clear local storage?
// }

function getSongVibeByScoreListener() {
    // Creation successful
    if (this.status === 200) {
        let song_name = JSON.parse(this.responseText)[0]['song_name'];
        let album_name = JSON.parse(this.responseText)[0]['album_name'];
        let song_link = JSON.parse(this.responseText)[0]['song_link'];
        let img = JSON.parse(this.responseText)[0]['img']

        // Is there a way to make use of these?
        // localStorage.setItem('song_name', song_name);
        // localStorage.setItem('album_name', album_name);
        // localStorage.setItem('song_link', song_link);
        // localStorage.setItem('img', img);

        $(SONG_TITLE_ID_SEL).text(song_name);
        $(SONG_ALBUM_ID_SEL).text(album_name);
        $(SONG_LINK_ID_SEL).attr("href", song_link);
        $(SONG_IMG_ID_SEL).attr("src", img);
        //previewFile(img);

        // console.log("In getSongVibeByScoreListener function.")
        // console.log(localStorage.getItem('song_name'));
        // console.log(localStorage.getItem('album_name'));
        // console.log(localStorage.getItem('song_link'));
        // console.log(localStorage.getItem('img'));   
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