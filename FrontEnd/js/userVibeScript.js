
function updateTextInput(vibeScore) {
    // document.getElementById('textInput').value = val;
    // $(USER_VIBE_RESULT_ID_SEL).text(val);
    // vibeScore = $(USER_VIBE_RESULT_ID_SEL).val(); 
    console.log(vibeScore); 
    onUpdateVibe(vibeScore);

    let vibeName = localStorage.getItem('vibe_name');
    console.log("Vibe name at top: " + vibeName);
    $(USER_VIBE_RESULT_ID_SEL).text(vibeName); 
}


// On click listener
function onUpdateVibe(vibeScore) {
    //let userVibeScore = vibeScore;
    console.log("In onUpdateVibe, score: " + vibeScore);
    getUserVibeByScore(vibeScore);
}

function getUserVibeByScoreListener() {
    console.log("This status: " + this.status);
    console.log("This response: " + this.responseText);
    // Creation successful
    if (this.status === 200) {
        let vibe_name = JSON.parse(this.responseText)['name'];
        let vibe_score = JSON.parse(this.responseText)['score'];

        console.log("vibe_name: " + vibe_name);
        console.log("vibe_score: " + vibe_score);

        localStorage.setItem('vibe_name', vibe_name);
        localStorage.setItem('vibe_score', vibe_score);

    } 
    // Failed, only if the user somehow enters something not within
    // the range of 1 to 10.
    else {
        alert("Not a valid vibe score.");
    }
}


function getUserVibeByScore(score) {
    // Make a request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", getUserVibeByScoreListener);
    oReq.open("GET", "https://kanyemusicrecommender.herokuapp.com/api/v1/vibes/score/" + score);

    // Add authorization
    let token = localStorage.getItem('token');
    oReq.setRequestHeader("authorization", token);
    oReq.send();
}