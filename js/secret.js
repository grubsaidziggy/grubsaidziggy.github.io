var check_grub = function(key1,key2){
  if(key1 == "grub") && (key2 == 165){
    console.log("ACCESS GRANTED");
    var link = document.createElement("a");
    var linkText = document.createTextNode("Grubber");
    link.appendChild(linkText);
    a.title = "Grubber";
    link.href = "grubber/";
    link.value = "SECRET";
    document.body.appendChild(link);
  }
}
