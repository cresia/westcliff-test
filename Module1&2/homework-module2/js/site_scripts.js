var photos = [];
var fileNames = ["bustour", "cabinrental", "campingadv", "collegetours", "rentalbike", "tourgroup"];
var fileImages = [];
var imageList = [];
var openList = "<li class='partner'>";
var closeList = "</li>";

var openUl = "<ul class='row'>";
var closeUl = "</ul>"

var openDiv = "<div class='col-sm-6 col-md-4 col-lg-2'>";
var closeDiv = "</div>";


for (var i = 0; i < fileNames.length; i++) {
  fileImages.push("partner-" + fileNames[i]);
  photos.push("<img src='images/partners/" + fileImages[i] + ".png'>");
  var image = openDiv + openList + photos[i] + closeList + closeDiv;
  imageList.push(image);
}

document.getElementById("partners").innerHTML = openUl + imageList.join(" ") + closeUl;
