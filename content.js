console.log("Toucan is ready.");

document.title = "Toucan Portal";

var images = document.getElementsByTagName('img');

var toucanImage = "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_toucan.jpg"

for (var i = 0, l = images.length; i < l; i++) {
    images[i].src = toucanImage;
    images[i].width = 15;
    images[i].height = 15;
}

var palette = {
    headerColor:"#fe7702",
    subHeaderColor:"#2b4776",
    subHeaderColorLight:"#9ac503"
};

for(menu of document.getElementsByClassName("darkNeutral"))
    menu.style.backgroundColor = palette.headerColor;

// 1 second is not enough delay.
var delayInMilliseconds = 1500;

setTimeout(function() { // all the elements that must be styled after the page loads
  for(foo of document.getElementsByClassName("mediumHighlight"))
      foo.style.backgroundColor = palette.subHeaderColor;

  for(bar of document.querySelectorAll(".displaytbl th")){
      console.log(bar);
      bar.style.backgroundColor = palette.subHeaderColorLight;
  }
}, delayInMilliseconds);

// NOTE: x.y is the same as x["y"]
