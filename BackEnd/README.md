# API Documentation

## Testing

Use the following token for testing of the API.

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDcwMDA0NjB9.90CeRxm9qQ1SmT9HGYZFtLt_ElEhqvqs-Kxku9zE6AU

## Token

### Description

This endpoint is used to get a token to use the core features of the API.

### GET token

URI

    https://kanyemusicrecommender.herokuapp.com/token/username/:username

Sample Response

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
    oReq.open("GET", "https://kanyemusicrecommender.herokuapp.com/token/username/" + username);
    oReq.send();

## Users

### Description

## Vibes

### Description

## Songs

### Description

## Song Vibes

### Description
