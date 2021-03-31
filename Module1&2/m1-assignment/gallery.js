var captionTexts = ["Dog1", "Dog2", "Dog3", "Dog4", "Dog5", "Dog6", "Dog7", "Dog8", "Dog9", "Dog10"];
var descTexts = ["Meet your new Friend1", "Meet your new Friend2", "Meet your new Friend3", "Meet your new Friend4", "Meet your new Friend5",
  "Meet your new Friend6", "Meet your new Friend7", "Meet your new Friend8", "Meet your new Friend9", "Meet your new Friend10"];


// ----- Create box modal ------
var textHeading = ["Fun Dogs", "Friendly Dogs", "Awesome Dog", "Cute Dog", "Happy Dogs", "Active Dogs", "Smiley Dogs", "Cool Dog", "Smart Dog", "Sweet Dog"];

var imageInfo = ["He is a Husky in every way, good on a leash, obedience trained, super loving and sweet, and going to make someone very happy to have him in the family! He would do best in a family with Husky experience.",
                  "He is playful, sweet, and loves her people. However, Tom can love one particular person in a family too much and will try to guard that person from the other members of the family, if allowed.",
                  "Poncho's now obedience trained, so much less fearful, so much more trusting, and so responsive with the people who have worked with him.",
                  "He would like someone with GSD experience to give him structure and, in return, you'll get an amazingly loyal companion who will be your best friend for life.",
                  "Missy is a sweet girl whos quick to learn and eager to please, but she can be stubborn and will take charge if allowed so she needs a calm, assertive handler who can give her leadership and consistency.",
                  "The home best for Tommy will be one with shepherd experience who knows how to apply structure so that he doesn't get overprotective of his people.",
                  "He needs an adopter who can spend time with him, prior to adoption, as he doesn't trust strangers. We will work with you and Poncho - getting you bo",
                  "Odin is so handsome and bonds so quickly, it's hard to imagine how he landed at the shelter in the first place. ",
                  "Missy is almost perfect in every way, but she tends to pick her favorite person in the household",
                  "She become very good on a leash, has learned some basic commands(heel, halt, sit), and continues to improve her manners and obedience."];

var photos = [];
var fileNames = [];
var imageList = [];

//Create images
var openList = "<li class='photo' id='galleryImage'>";
var closeList = "</li>"

var caption;
var textOverlay;

//Create Images
for (var i = 0; i < 10; i++) {
  fileNames.push("gallery" + (i + 1));
  photos.push("<img src='images/" + fileNames[i] + ".jpg' alt='Angkor Wat'>");
  var openPhotoLink = "<a class='lightbox-toggle'>";
  var closePhotoLink = "</a>";
  caption = "<p class='captionText'>" + captionTexts[i] + "</p>";
  textOverlay = "<div class= 'overlay' onclick = 'openModal(" + i + ")'>" + descTexts[i] + "</div>";
  var image = openList + textOverlay + openPhotoLink + photos[i] + closePhotoLink + caption + closeList;
  imageList.push(image);
}

// document.getElementById("album").innerHTML = imageList;
document.getElementById("album").innerHTML = imageList.join(" ");


//Close Modal Button
var imageOpenCloseBtn = "<button id='closeBtn' onclick='closeModal()'>Close</button>";

function openModal(i) {
  //create modal info and heading within the loop
  var imageHeadingInfo = "<h2>" + textHeading[i] + "</h2>";
  var imageDescriptionInfo = "<p>" + imageInfo[i] + "</p>";
  var boxModal = imageHeadingInfo + imageDescriptionInfo + imageOpenCloseBtn;

  // console.log(boxModal);
  document.getElementById("boxModal").innerHTML = boxModal;

  document.getElementById("boxModal").style.display = "block";
}

// document.getElementById("closeBtn").addEventListener("click", closeModal());

function closeModal() {
 document.getElementById("boxModal").style.display= "none";
}



$(document).ready(function () {

  /* Open lightbox on button click */
  $('.lightbox-toggle img').click(function () {
    $('.backdrop').animate({ 'opacity': '.50' }, 300, 'linear').css('display', 'block');
    $('.box').fadeIn();

    //Check if lightbox has an image
    if ($('.box').contents('img')) {
      $('.box').contents().remove('img'); //If true, clear image
    }

    //Get text content in attribute
    // var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

    // if ($altvalue == "Angkor Wat") {
    //   var img = $('#album:nth-child(1) img').clone(); //Duplicate DOM element
    //   $('.box').append(img); //Insert duplicated element in another element
    // }

    var img = $(this).clone();
    $('.box').append(img);


  });

  /* Click to close lightbox */
  $('.close, .backdrop').click(function () {
    $('.backdrop').animate({ 'opacity': '0' }, 300, 'linear', function () {
      $('.backdrop').css('display', 'none');
    });
    $('.box').fadeOut();
  });

});
