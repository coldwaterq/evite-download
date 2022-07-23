function download(item){
  window.open("https://www.evite.com/ajax/event/"+item.style['backgroundImage'].split("/events/")[1].split("?")[0]+"/download/")
}

var items = document.getElementsByClassName("photo-panel")
for( var i = 0; i<items.length; i++){
  download(items[i]);
}
