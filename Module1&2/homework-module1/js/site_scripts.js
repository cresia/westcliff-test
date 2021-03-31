var photos = [];
var fileNames = ["bustour", "cabinrental", "campingadv", "collegetours", "rentalbike", "tourgroup"];
var fileImages = [];
var imageList = [];
var openList = "<li class='partner'>";
var closeList = "</li>";

for (var i = 0; i < fileNames.length; i++) {
  fileImages.push("partner-" + fileNames[i]);
  photos.push("<img src='images/partners/" + fileImages[i] + ".png'>");
  var image = openList + photos[i] + closeList;
  imageList.push(image);
}

document.getElementById("partners").innerHTML = imageList.join(" ");
