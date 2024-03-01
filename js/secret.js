var check_grub = function(key1,key2){
  console.log();
  switch(key1,key2){
    case "grub",165:
      console.log("ACCESS GRANTED");
      var link = document.createElement("a");
      var linkText = document.createTextNode("SECRET");
      link.appendChild(linkText);
      link.title = "SECRET";
      link.href = "grubber/";
      document.body.appendChild(link);
      break;
    

    //"else" case, dont put any other cases below it
    default:
      console.log("ACCESS DENIED");
      break;
  }
  console.log();
};
