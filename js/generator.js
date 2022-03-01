/*
,--------.,--.                ,--.,--.  ,--.    ,--.  ,--.                                                     ,--.   ,--.
'--.  .--'|  ,---.  ,---.     |  |`--',-'  '-.,-'  '-.|  | ,---.     ,--,--,--. ,---. ,--.--.,--,--,--. ,--,--.`--' ,-|  |
   |  |   |  .-.  || .-. :    |  |,--.'-.  .-''-.  .-'|  || .-. :    |        || .-. :|  .--'|        |' ,-.  |,--.' .-. |
   |  |   |  | |  |\   --.    |  ||  |  |  |    |  |  |  |\   --.    |  |  |  |\   --.|  |   |  |  |  |\ '-'  ||  |\ `-' |
   `--'   `--' `--' `----'    `--'`--'  `--'    `--'  `--' `----'    `--`--`--' `----'`--'   `--`--`--' `--`--'`--' `---'
   “She laughed and danced with the thought of death in her heart.”
   ― Hans Christian Andersen, The Little Mermaid
*/

//Returns random number
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

//Returns cookie-value if found
//Code altered from: https://www.w3schools.com/js/js_cookies.asp
function getCookie(name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie); //decodes string to handle special characters
  var splitCookie = decodedCookie.split(';');//splits cookie on semicolon
  for(var i = 0; i <splitCookie.length; i++) {
    var c = splitCookie[i];
    //loops throuh coockie-array
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cookieName) == 0) {
      //if forund; returns value convertet into integer
      return parseInt(c.substring(cookieName.length, c.length));
    }
  }
  //if not found, return empty
  return "";
}

//Calculates the precentage of diffrent cookies clicked by user
//returns a new poem theme based on precentage
function getPrecentage() {
    var seaN = getCookie('sea');
    var landN = getCookie('land');
    var skyN = getCookie('sky');
    var total = seaN + landN + skyN;
    var p = Math.random();

    if (p < seaN / total) {
        return 'sea';
    } else if (p < landN / total) {
        return 'land';
    } else {
        return 'sky';
    }
}

//adds id and onclick-function to words from wordlist when loaded into poem
function getWord(array) {
    word = array.type;
    return '<a id="' + word + '"onclick="setValue(this.id)">' + word + '</a>';
}

//returns random img
function getImg() {
  var illustrations='';
  illustrations = ['<img id="illustation" style="animation: imgFade 8s forwards;" src="images/cornflower.png" alt="Illustration of blue cornflower">',
                  '<img id="illustation" style="animation: imgFade 8s forwards;" src="images/seashell.png" alt="Illustration of purple seashell">',
                  '<img id="illustation" style="animation: imgFade 8s forwards;" src="images/seaweed.png" alt="Illustration of seaweed">',
                  '<img id="illustation" style="animation: imgFade 8s forwards;" src="images/shellclam.png" alt="Illustration of a clam shell with a pearl inside">',
                  '<img id="illustation" style="animation: imgFade 8s forwards;" src="images/scarlet.png" alt="Illustration of a scarlet flower">'];

  return illustrations[getRandomNumber(illustrations.length)];
}
//gets random poem
function getSentence(array) {
    return array[getRandomNumber(array.length)];
}
//function to check if a cookie has value; if not the value is set to 1
//it the cookie has value, the value is increased by 1
function setValue(clickedWord) {
    var i;
    var value;
    for (i = 0; i < arrays.length; i++) {
        if (arrays[i].type == clickedWord) {
            var cookie = arrays[i].theme; 
        } else {
            console.log("Clicked word do not exist in list");
        }
    }

    var name = cookie;
    var minutes = 1440;
    var d = new Date();
    var expires = 'expires=' + d.toUTCString();
    d.setTime(d.getTime() + (minutes * 24 * 60 * 60 * 1000));
    var excValue =  getCookie(name);

    if (excValue == "") {
        document.cookie = name + "=" + 1; + expires + '; path=/storied;'
        var container = document.getElementById('poem');
        container.innerHTML = getSentences('any');
        var images = document.getElementById('img');
        images.innerHTML = getImg();
    } else {
        var theme = getPrecentage();
        value = excValue;
        value++;
        document.cookie = name + "=" + value; + expires + '; path=/storied;'
        var container = document.getElementById('poem');
        container.innerHTML = getSentences(theme);
        var images = document.getElementById('img');
        images.innerHTML = getImg();
    }
}

//function to delete all cookcies
function deleteCookies() {
    var allCookies = document.cookie.split(';');
    for (var i = 0; i < allCookies.length; i++)
        document.cookie = allCookies[i] + "=;expires=" +
        new Date(0).toUTCString();
    displayCookies.innerHTML = document.cookie;
}

var container = document.getElementById('poem');
container.innerHTML = getSentences();
var images = document.getElementById('img');
images.innerHTML = getImg();
