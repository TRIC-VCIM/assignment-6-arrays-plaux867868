//Fuction 1

function divColor() {
  var name = prompt("What is your name?").length - 1;
  var color = ["purple", "green", "red", "yellow", "blue", "orange", "teal", "skyblue", "royalblue", "brown", "gold" ];
  if (name >= 10) {
    name = 10;
  }
  document.querySelector("#hero").className = color[name];
}

divColor();

/* function divColor() {
  var name = prompt("What is your name?").length;
  if (name === 2) {
    document.querySelector("#hero").className = "purple";
  }

  else if (name === 3) {
    document.querySelector("#hero").className = "green";
  }

    else if (name === 4) {
    document.querySelector("#hero").className = "red";
  }

    else if (name === 5) {
    document.querySelector("#hero").className = "yellow";
  }

    else if (name === 6) {
    document.querySelector("#hero").className = "blue";
  }

    else if (name === 7) {
    document.querySelector("#hero").className = "orange";
  }

    else if (name === 8) {
    document.querySelector("#hero").className = "teal";
  }

    else if (name === 9) {
    document.querySelector("#hero").className = "skyblue";
  }

    else if (name === 10) {
    document.querySelector("#hero").className = "royalblue";
  }

    else if (name === 11) {
    document.querySelector("#hero").className = "brown";
  }

    else if (name === 12) {
    document.querySelector("#hero").className = "gold";
  }

return name;

}


divColor();

*/



//Function 2

function fontChange() {
  var dayBorn = prompt("What day were you born?");
  var font = ["impact", "franklin", "lucida", "georgia", "gill", "cambria"];
  if (dayBorn >= 5) {
    font = font[5];
  }
  document.querySelector("p").className = font[dayBorn];
  
}

fontChange();

/* function fontChange() {
  var dayBorn = prompt("What day were you born?");
  if (dayBorn >= 1 && dayBorn <= 5 ) {
    document.querySelector("p").className = "impact";
  }

  else if (dayBorn >=6 && dayBorn <= 10) {
    document.querySelector("p").className = "franklin";
  }

  else if (dayBorn >=11 && dayBorn <= 15) {
    document.querySelector("p").className = "lucida";
  }

  else if (dayBorn >=16 && dayBorn <= 20) {
    document.querySelector("p").className = "georgia";
  }

  else if (dayBorn >=21 && dayBorn <= 25) {
    document.querySelector("p").className = "gill";
  }

  else if (dayBorn >=26 && dayBorn <= 31) {
    document.querySelector("p").className = "cambria";
  }

return dayBorn;

}

fontChange();

*/