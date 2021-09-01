function Toogle(id) {

  var x = document.getElementById(id);
  var y = document.getElementById(id+'-toogle')
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";

  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}