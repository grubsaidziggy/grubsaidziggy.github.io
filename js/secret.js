var check_grub = function(key1,key2){
  if(key1 == "grub") and (key2 == 165) 
  {
    console.log("ACCESS GRANTED");
    var link = document.createElement("a");
    var linkText = document.createTextNode("SECRET");
    link.appendChild(linkText);
    link.title = "SECRET";
    link.href = "grubber/";
    document.body.appendChild(link);
  }
  else
  {
    console.log("ACCESS DENIED");
  }
}
 
