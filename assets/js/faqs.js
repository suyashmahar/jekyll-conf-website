function openAllDetails(obj) {
    var elems = document.getElementsByTagName("details");
    console.log(elems);
  obj.innerHTML = "Collapse All";
  obj.setAttribute("onClick", "closeAllDetails(this);");

  for (var i = 0; i < elems.length; i++){
    elems[i].setAttribute("open", "true");
  }
}

function closeAllDetails(obj) {
  var elems = document.getElementsByTagName("details");
  obj.setAttribute("onClick", "openAllDetails(this);");

  for (var i = 0; i < elems.length; i++){
    elems[i].removeAttribute("open");
  }
  obj.innerHTML = "Expand All";
}


