
// When Upate Profile Picture is clicked
$(USER_IMG_BUTTON_ID_SEL).click(function() {
    previewFile();
    updateUserImage(localUserID, userImage);
});

// Preview the image file 
function previewFile() {
    const preview = document.querySelector(USER_IMG_ID_SEL);
    const file = document.querySelector(IMG_FILE_TYPE_SEL).files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      let imgString = reader.result;
      preview.src = imgString;
      onUpdateImage(imgString);
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
    else {
        alert("This is not an image.");
    }
    // clear local storage?
}

// On click listener
function onUpdateImage(imgURL) {
    let userImage = imgURL;
    let localUserID = localStorage.getItem('user_id');
    updateUserImage(localUserID, userImage);
}


function updateUserImageListener() {
    // Creation successful
    if (this.status === 201) {
        let profile_img = JSON.parse(this.responseText)["profile_img"];
        localStorage.setItem('profile_img', profile_img);

        console.log('User with ID: ' + localUserID + ' updated their profile image.');
    } 
    // Failed, probably the file is > 5MB
    else {
        alert("Please choose another image under 5MB.");
    }
}


function updateUserImage(userID, profile_img) {
    // Make a request
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", updateUserImageListener);
    oReq.open("PATCH", "https://kanyemusicrecommender.herokuapp.com/api/v1/users/id/"+ userID + "/profile_img/" + profile_img);

    // Add authorization
    let token = localStorage.getItem('token');
    oReq.setRequestHeader("authorization", token);
    oReq.send();
}