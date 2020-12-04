# API Documentation

## Testing

Use the following token for testing of the API.

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDcwMDA0NjB9.90CeRxm9qQ1SmT9HGYZFtLt_ElEhqvqs-Kxku9zE6AU

## Token

### Description

This endpoint is used to get a token to use the core features of the API.

### GET token

Retrieve a authorization token from the database. Requires a username to generate a token.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/token/username/:username

Sample Response: The authorization token.

    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDcwOTYzNzJ9.UaVT23_Fb3wEksk4AqDNYMBoDi-hw0iwFAkJH3oRXyA"

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
    oReq.open("GET", "https://kanyemusicrecommender.herokuapp.com/api/v1/token/username/" + username);
    oReq.send();

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

Sample Response: ID of the newly created user.

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

Updates a user's profile image in the database by user ID.

URI

    https://kanyemusicrecommender.herokuapp.com/api/v1/users/id/:id/profile_img/:profile_img

XHTTP Request Example

    // Listener Function
    function reqListener () {
        console.log(this.status);
        console.log(this.responseText);
    }

    // JWT Token, replace with auto-generated token.
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDcwOTYzNzJ9.UaVT23_Fb3wEksk4AqDNYMBoDi-hw0iwFAkJH3oRXyA";

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

    // JWT Token, replace with auto-generated token.
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDcwOTYzNzJ9.UaVT23_Fb3wEksk4AqDNYMBoDi-hw0iwFAkJH3oRXyA";

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

## Songs

### Description

## Song Vibes

### Description
