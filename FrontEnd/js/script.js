
//For user profile images
function previewFile() {
    const preview = $('img');
    const file = $(IMG_FILE_TYPE_SEL).files[0];
    // const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
    else {
        alert("This is not an image.");
    }
  }


let username;

// Check for empty strings
function isEmpty(myString) {
    return !(myString.trim() !== "");
}

// Click on Submit for Username
$(USERNAME_BUTTON_ID_SEL).click(function() {
    let username = $(USERNAME_ID_SEL).val();

    if (isEmpty(username)) {
       alert("Valid Username");
    } else {
        alert("Word or Definition contains numbers or is empty.");
        $(USERNAME_ID_SEL).val("");
    }
    
});

// // On click Listener
// function onLogInClick(name) {
//     username = name;
//     getUser();
// }

// // Fires when data is loaded in getUser()
// function getUserListener() {
//     // User exists
//     if (this.status === 200) {
//         let user_id = JSON.parse(this.responseText)["id"];
//         localStorage.setItem('user_id', user_id);

//         console.log('Got user with ID: ' + user_id);

//         getToken();
//     } 
//     // User does not exist, create a new one.
//     else {
//         createUser();
//     }
// }

// // Retrieve User from Database
// function getUser() {    
//     let oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", getUserListener);
//     oReq.open("GET", "https://kanyemusicrecommender.herokuapp.com/api/v1/users/username/" + username);
//     oReq.send();
// }

// // Fires when POST is completed in createUser()
// function createUserListener() {
//     // Creation successful
//     if (this.status === 201) {
//         let user_id = JSON.parse(this.responseText)["id"];
//         localStorage.setItem('user_id', user_id);

//         console.log('Created new user with ID: ' + user_id);

//         getToken();
//     } 
//     // Failed, there is a user with this username already. 
//     // This case should never happen because if the username matches one in the database, 
//     // then they are simply logged in.
//     else {
//         alert("This Username is taken");
//     }
// }

// // Creates a new user in the database.
// function createUser() {        
//     let oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", createUserListener);
//     oReq.open("POST", "https://kanyemusicrecommender.herokuapp.com/api/v1/users/signup/username/" + username + "/type/client");
//     oReq.send();
// }

// // Fires when the token is loaded from getToken()
// function getTokenListener() {
//     let token = JSON.parse(this.responseText);
//     localStorage.setItem('token', token);

//     nextPage();
// }

// // Retrieve an authorization token from the database using the username
// function getToken() {    
//     let oReq = new XMLHttpRequest();
//     oReq.addEventListener("load", getTokenListener);
//     oReq.open("GET", "https://kanyemusicrecommender.herokuapp.com/api/v1/token/username/" + username);
//     oReq.send();
// }

// // This is where you would redirect user's to next page.
// function nextPage() {
//     alert("Login Passed");

//     // We can see that our user_id and token are both in local storage
//     console.log('User ID: ' + localStorage.getItem('user_id'));
//     console.log('User ID: ' + localStorage.getItem('token'));
// }

// onLogInClick("rowill");