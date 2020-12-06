
// Called in the index.html when the slider is moved
function updateTextInput(vibeScore) {
    console.log(vibeScore); 
    onUpdateVibe(vibeScore);
}

// On click listener
function onUpdateVibe(vibeScore) {
    getUserVibeByScore(vibeScore);
    let vibeName = localStorage.getItem('vibe_name');
    $(USER_VIBE_RESULT_ID_SEL).text(vibeName); 
}

function getUserVibeByScoreListener() {
    console.log("This status: " + this.status);
    console.log("This response: " + this.responseText);
    // Creation successful
    if (this.status === 200) {
        let vibe_name = JSON.parse(this.responseText)[0]['name'];
        let vibe_score = JSON.parse(this.responseText)[0]['score'];

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
    // let token = localStorage.getItem('token');

    // For testing
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDcwOTYzNzJ9.UaVT23_Fb3wEksk4AqDNYMBoDi-hw0iwFAkJH3oRXyA";
    oReq.setRequestHeader("authorization", token);
    oReq.send();
}