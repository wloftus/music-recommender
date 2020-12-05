//For user profile images
let userImage;

// Preview the image file 
function previewFile() {
    const preview = document.querySelector(USER_IMG_ID_SEL);
    const file = document.querySelector(IMG_FILE_TYPE_SEL).files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      let imgString = reader.result;
      preview.src = imgString;
      userImage = imgString;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
    else {
        alert("This is not an image.");
    }
    // clear local stor
}


// When Upate Profile Picture is clicked
$(USER_IMG_BUTTON_ID_SEL).click(function() {
    previewFile();
    // patchuserimage()
});