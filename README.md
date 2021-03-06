# API Documentation

### Table of Contents

1. [About](#about)
2. [Testing](#testing)
3. [Token](#token)
4. [Users](#users)
5. [Vibes](#vibes)
6. [Songs](#songs)
7. [Song Vibes](#song-vibes)

## About

This Web App will recommend you music by Kanye West based on your vibe or mood. 

IMPORTANT NOTE: We discovered that trying to send image dataURLS to the API does not work because it is hosted on Heroku. Heroku has a hard limit of 8kb on the request line, even though we specified a limit of 5mb in the app.js. If we hosted our API using a different service, posting images should have worked.


## Users

### Description

These API endpoints allow for certain CRUD operations on the users table in the database. These include creating, retrieving, deleting, and updating users.

### POST New User

Create a new user in the database. Takes a username and a type. The username must be unique and the type must be either "client" or "admin". This is one the few API calls that does not require an authorization token. This is because this endpoint is involved in the login process of the App where the user has not been given a token yet.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/users/signup/username/:username/type/:type

Sample Response: ID of the newly created user.

    {
        "id": 14
    }

XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // Parameters
    let username = "myUsername";
    let type = "client";

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "https://kanyemusicrecommender.herokuapp.com/api/v1/users/signup/username/" + username + "/type/" + type);
    oReq.send();

### GET User

Retrieves a User from the database by username. This is one the few API calls that does not require an authorization token. This is because this endpoint is involved in the login process of the App where the user has not been given a token yet.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/users/username/:username

Sample Response: The user specified by the ID.

    {
        "id": 8,
        "username": "rowill",
        "type": "client",
        "profile_img": null
    }

XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // Parameters
    let username = "myUsername";

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://kanyemusicrecommender.herokuapp.com/api/v1/users/username/" + username);
    oReq.send();

### PATCH User Profile Image

Updates a user's profile image in the database by user ID. We discovered that this does not work while hosting with heroku because there is a 8kb limit on the request line. Otherwise, it should work to the 5mb limit as specified in the app.js.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/users/id/:id/profile_img/:profile_img

XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // JWT Token
    let token = your_token;

    // Parameters
    let ID = 8;
    let profile_img = "myDataUR";

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("PATCH", "https://kanyemusicrecommender.herokuapp.com/api/v1/users/id/"+ ID + "/profile_img/" + profile_img);
    // Add authorization
    oReq.setRequestHeader("authorization", token);
    oReq.send();

### DELETE User

Deletes a user in the database by ID.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/users/id/:id

XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // JWT Token
    let token = your_token;

    // Parameters
    let ID = 15;

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("DELETE", "https://kanyemusicrecommender.herokuapp.com/api/v1/users/id/"+ ID);
    // Add authorization
    oReq.setRequestHeader("authorization", token);
    oReq.send();

## Vibes

### Description

These API endpoints allow for certain CRUD operations on the vibes table in the database. A "vibe" is a certain mood that a song gives off. These endpoints include retrieving all the vibes or all vibes of a certain score. The score field is the mood of the vibe on a scale of 1 - 10. 1 being depressing and 10 being Hype.

### GET All Vibes

Retrieves all vibes in the database.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/vibes/

Sample Response: A list of all the vibes in the database.

    [
        {
            "id": 1,
            "name": "Depressing",
            "score": 1,
            "user_id": 2
        },
        ...
    ]


XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // JWT Token
    let token = your_token;

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://kanyemusicrecommender.herokuapp.com/api/v1/vibes/");
    // Add authorization
    oReq.setRequestHeader("authorization", token);
    oReq.send();

### GET Vibe(s) By Score

Retrieves one or more vibes by their score.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/vibes/score/:score

Sample Response: A list of all the vibes in the database that match the specified score.

    [
        {
            "id": 10,
            "name": "Hyped",
            "score": 10,
            "user_id": 2
        },
        ...
    ]


XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // JWT Token
    let token = your_token;

    // Parameters
    let score = 10;

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://kanyemusicrecommender.herokuapp.com/api/v1/vibes/score/" + score);
    // Add authorization
    oReq.setRequestHeader("authorization", token);
    oReq.send();

## Songs

### Description

These API endpoints allow for certain CRUD operations on the songs table in the database. These endpoints include creating a new song, retrieving all songs in the database, updating/replacing a song, and deleting a song.

### POST New Song

Creates a new song in the database. Takes a name, a song link, a user_id, a image, and an album name. The song name must be unique. We discovered that providing the image as a dataURL does not work while hosting with heroku because there is a 8kb limit on the request line. Otherwise, it should work to the 5mb limit as specified in the app.js.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/songs/name/:name/song_link/:song_link/user_id/:user_id/img/:img/album_name/:album_name

Sample Response: The newly created song ID.

    {
        "id": 18
    }


XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // JWT Token
    let token = your_token;

    // Parameters
    let name = "mySong";
    let song_link = "mySongLink";
    let user_id = 8;
    let img = "mySongImgDataURL";
    let album_name = "myAlbumName";

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "https://kanyemusicrecommender.herokuapp.com/api/v1/songs/name/" + name + "/song_link/"+ song_link + "/user_id/"+ user_id + "/img/" + img + "/album_name/" + album_name);
    // Add authorization
    oReq.setRequestHeader("authorization", token);
    oReq.send();

### GET All Songs

Retrieves all songs in the database.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/songs/

Sample Response: A list of all the songs in the database.

    [
        {
            "id": 19,
            "name": "mySong",
            "song_link": "mySongLink",
            "img": "mySongImgDataURL",
            "album_name": "myAlbumName",
            "user_id": 8
        },
        ...
    ]


XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // JWT Token
    let token = your_token;

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://kanyemusicrecommender.herokuapp.com/api/v1/songs/");
    // Add authorization
    oReq.setRequestHeader("authorization", token);
    oReq.send();

### PUT Song

Updates/Replaces a song in the database by ID. Takes a JSON string of song keys and values to determine which fields in the database to update.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/songs/id/:id/song/:song


XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // JWT Token
    let token = your_token;

    // Parameters
    let ID = 19;
    let song = { 
        "name": "test3", 
        "song_link": "test-link", 
        "img": "dataURL", 
        "user_id": 2
    };
    // IMPORTANT use JSON.Stringify on song or error will occur.
    song = JSON.stringify(song);

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("PUT", "https://kanyemusicrecommender.herokuapp.com/api/v1/songs/id/"+ ID + "/song/" + song);
    // Add authorization
    oReq.setRequestHeader("authorization", token);
    oReq.send();

### DELETE Song

Deletes a song in the database by ID.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/songs/id/:id

XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // JWT Token
    let token = your_token;

    // Parameters
    let ID = 19;

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("DELETE", "https://kanyemusicrecommender.herokuapp.com/api/v1/songs/id/" + ID);
    // Add authorization
    oReq.setRequestHeader("authorization", token);
    oReq.send();

## Song Vibes

### Description

These API endpoints allow for certain CRUD operations on the song_vibes table in the database. The song_vibes table links a song and vibe together by ID. These operations include creating a new song vibe and getting songs by their vibe score.

### POST Song Vibe

Create a new song vibe entry in the database. Takes a song id and a vibe id. These are foreign key to the songs and vibes tables.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/song_vibes/song_id/:song_id/vibe_id/:vibe_id/user_id/:user_id

XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // JWT Token
    let token = your_token;

    // Parameters
    let song_id = 3;
    let vibe_id = 1;
    let user_id = 14;

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "https://kanyemusicrecommender.herokuapp.com/api/v1/song_vibes/song_id/" + song_id + "/vibe_id/" + vibe_id + "/user_id/" + user_id);
    // Add authorization
    oReq.setRequestHeader("authorization", token);
    oReq.send();

### GET Song Vibes By Score

Gets all Song Vibes in the database by their vibe score.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/song_vibes//score/:score

Sample Response: A list of all the songs vibes in the database matching the specified score.

    [
        {
            "song_vibe_id": 13,
            "user_id": 2,
            "song_id": 13,
            "song_name": "Big Brother",
            "song_link": "https://open.spotify.com/track/1x6jHJGczTBitBy06hIWgx",
            "img": "myDataURL",
            "album_name": "Graduation",
            "vibe_id": 6,
            "vibe_name": "Okay",
            "score": 6
        },
        ...
    ]

XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // JWT Token
    let token = your_token;

    // Parameters
    let score = 5;

    // Make Request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://kanyemusicrecommender.herokuapp.com/api/v1/song_vibes/score/" + score);
    // Add authorization
    oReq.setRequestHeader("authorization", token);
    oReq.send();